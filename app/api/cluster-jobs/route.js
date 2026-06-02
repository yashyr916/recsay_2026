import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// ── SENIORITY GROUPS
const SENIORITY = {
  junior:  ['junior','intern','fresher','entry level','entry-level','trainee'],
  mid:     ['mid-level','mid level','associate','intermediate'],
  senior:  ['senior','lead','principal','staff','expert','experienced'],
  manager: ['manager','director','head of','vp','architect','engineering manager'],
};

function getSeniority(keywords) {
  const lower = keywords.map(k => k.toLowerCase());
  for (const [level, terms] of Object.entries(SENIORITY)) {
    if (terms.some(t => lower.some(k => k.includes(t)))) return level;
  }
  return null;
}

const CLUSTER_MAX = 8; // ── max employers per cluster

export async function POST(request) {
  try {
    console.log('=== CLUSTER API HIT ===');
    const { job_id } = await request.json();
    const jobIdStr = String(job_id);
    console.log('Job ID:', jobIdStr);

    const { data: newJob, error: jobError } = await supabase
      .from('jobs').select('*').eq('id', jobIdStr).single();

    console.log('Job fetched:', newJob?.title, 'Error:', jobError);
    if (jobError || !newJob) {
      return Response.json({ error: 'Job not found' }, { status: 404 });
    }

    const newKeywords = newJob.keywords || [];
    console.log('Keywords count:', newKeywords.length);
    if (newKeywords.length === 0) return Response.json({ message: 'No keywords' });

    const newSeniority = getSeniority(newKeywords);
    console.log('Seniority detected:', newSeniority);

    const { data: clusters } = await supabase.from('clusters').select('*');
    console.log('Existing clusters:', clusters?.length || 0);

    let bestCluster = null;
    let bestScore = 0;
    const THRESHOLD = 0.50;

    if (clusters && clusters.length > 0) {
      for (const cluster of clusters) {
        // ── CLUSTER SIZE CAP
        const clusterSize = (cluster.job_ids || []).length;
        if (clusterSize >= CLUSTER_MAX) {
          console.log(`Cluster "${cluster.title}" full (${clusterSize}/${CLUSTER_MAX}), skipping`);
          continue;
        }

        let score = cosineSimilarity(newKeywords, cluster.keywords || []);

        // ── SENIORITY WEIGHTING
        const clusterSeniority = getSeniority(cluster.keywords || []);
        if (newSeniority && clusterSeniority) {
          if (newSeniority === clusterSeniority) {
            score = Math.min(score * 1.1, 1.0); // same level → boost
            console.log(`Seniority match (${newSeniority}) → boosted score: ${score}`);
          } else {
            score = score * 0.6; // mismatch → penalty
            console.log(`Seniority mismatch (${newSeniority} vs ${clusterSeniority}) → penalised: ${score}`);
          }
        }

        console.log(`Cluster "${cluster.title}" final score: ${score}`);
        if (score >= THRESHOLD && score > bestScore) {
          bestScore = score;
          bestCluster = cluster;
        }
      }
    }

    if (bestCluster) {
      console.log('Joining cluster:', bestCluster.title, 'score:', bestScore);
      const mergedKeywords = Array.from(new Set([...bestCluster.keywords, ...newKeywords]));
      const updatedJobIds = [...(bestCluster.job_ids || []), jobIdStr];

      await supabase.from('clusters')
        .update({ keywords: mergedKeywords, job_ids: updatedJobIds })
        .eq('id', bestCluster.id);

      await supabase.from('jobs')
        .update({ cluster_id: bestCluster.id })
        .eq('id', jobIdStr);

      return Response.json({
        action: 'added_to_cluster',
        cluster_id: bestCluster.id,
        score: Math.round(bestScore * 100),
        seniority: newSeniority,
        cluster_size: (bestCluster.job_ids || []).length + 1,
      });
    }

    // ── CREATE NEW CLUSTER
    console.log('Creating new cluster for:', newJob.title);
    const { data: newCluster, error: clusterError } = await supabase
      .from('clusters')
      .insert([{ title: newJob.title, keywords: newKeywords, job_ids: [jobIdStr] }])
      .select().single();

    console.log('New cluster:', newCluster, 'Error:', clusterError);
    if (clusterError) return Response.json({ error: clusterError.message }, { status: 500 });

    await supabase.from('jobs')
      .update({ cluster_id: newCluster.id })
      .eq('id', jobIdStr);

    return Response.json({
      action: 'created_new_cluster',
      cluster_id: newCluster.id,
      seniority: newSeniority,
    });

  } catch (err) {
    console.error('CLUSTER ERROR:', err.message);
    return Response.json({ error: err.message }, { status: 500 });
  }
}

function cosineSimilarity(keywordsA, keywordsB) {
  if (!keywordsA.length || !keywordsB.length) return 0;
  const normalize = k => k.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
  const expand = (keywords) => {
    const result = new Set();
    keywords.forEach(k => {
      const norm = normalize(k);
      result.add(norm);
      norm.split(' ').forEach(w => { if (w.length > 2) result.add(w); });
    });
    return result;
  };
  const setA = expand(keywordsA);
  const setB = expand(keywordsB);
  const union = new Set([...setA, ...setB]);
  const vecA = [], vecB = [];
  union.forEach(term => { vecA.push(setA.has(term) ? 1 : 0); vecB.push(setB.has(term) ? 1 : 0); });
  let dot = 0;
  for (let i = 0; i < vecA.length; i++) dot += vecA[i] * vecB[i];
  const magA = Math.sqrt(vecA.reduce((s, v) => s + v * v, 0));
  const magB = Math.sqrt(vecB.reduce((s, v) => s + v * v, 0));
  if (magA === 0 || magB === 0) return 0;
  return dot / (magA * magB);
}