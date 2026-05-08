import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function POST(request) {
  try {
    const { candidate_id, current_cluster_id } = await request.json();
    console.log('=== PIPELINE SHIFT ===', candidate_id, current_cluster_id);

    // Step 1 — get cluster + all job_ids
    const { data: cluster, error: clusterError } = await supabase
      .from('clusters')
      .select('*')
      .eq('id', current_cluster_id)
      .single();

    if (clusterError || !cluster) {
      return Response.json({ error: 'Cluster not found' }, { status: 404 });
    }

    const jobIds = (cluster.job_ids || []).map(id => parseInt(id));
    console.log('Job IDs in cluster:', jobIds);

    if (jobIds.length === 0) {
      return Response.json({ message: 'No jobs in cluster' });
    }

    // Step 2 — get all jobs in cluster
    const { data: jobs } = await supabase
      .from('jobs')
      .select('*')
      .in('id', jobIds);

    if (!jobs || jobs.length === 0) {
      return Response.json({ message: 'No jobs found' });
    }

    // Step 3 — get candidate
    const { data: candidate } = await supabase
      .from('candidates')
      .select('*')
      .eq('id', candidate_id)
      .single();

    if (!candidate) {
      return Response.json({ error: 'Candidate not found' }, { status: 404 });
    }

    // Step 4 — find employers already seen this candidate
    const { data: history } = await supabase
      .from('candidate_assignments')
      .select('*')
      .eq('candidate_id', candidate_id);

    const assignedEmployerIds = new Set((history || []).map(h => h.employer_id));
    console.log('Already assigned to:', [...assignedEmployerIds]);

    // Step 5 — find next employer not yet assigned
    const nextJob = jobs.find(job => !assignedEmployerIds.has(job.user_id));

    if (!nextJob) {
      await supabase
        .from('candidates')
        .update({ status: 'pipeline_exhausted' })
        .eq('id', candidate_id);

      return Response.json({
        action: 'exhausted',
        message: 'All employers in cluster have reviewed this candidate',
      });
    }

    // Step 6 — record assignment + reset status
    await supabase.from('candidate_assignments').insert([{
      candidate_id: candidate_id,
      employer_id:  nextJob.user_id,
      job_id:       String(nextJob.id),
      cluster_id:   current_cluster_id,
      status:       'pending',
    }]);

    await supabase
      .from('candidates')
      .update({ status: 'submitted' })
      .eq('id', candidate_id);

    console.log('Shifted to:', nextJob.title, nextJob.user_id);

    return Response.json({
      action:        'shifted',
      next_job:      nextJob.title,
      next_employer: nextJob.user_id,
    });

  } catch (err) {
    console.error('Pipeline shift error:', err.message);
    return Response.json({ error: err.message }, { status: 500 });
  }
}