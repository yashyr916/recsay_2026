export async function POST(request) {
  const { description } = await request.json();
  const keywords = extractKeywords(description);
  return Response.json({ keywords });
}

function extractKeywords(text) {
  const original = text;
  const lower = text.toLowerCase();
  const found = new Map(); // keyword -> score

  // ── TECH LANGUAGES
  const languages = [
    'python','javascript','typescript','java','kotlin','swift','c++','c#','c',
    'ruby','php','golang','go','rust','scala','r','matlab','perl','bash',
    'shell','powershell','dart','flutter','elixir','haskell','lua','groovy',
    'objective-c','assembly','cobol','fortran','vba','sas',
  ];

  // ── FRONTEND
  const frontend = [
    'react','reactjs','react.js','next.js','nextjs','vue','vuejs','vue.js',
    'angular','angularjs','svelte','nuxt','gatsby','remix','astro',
    'html','html5','css','css3','sass','scss','less','tailwind','bootstrap',
    'material ui','material-ui','chakra ui','ant design','styled-components',
    'webpack','vite','babel','eslint','jquery','redux','zustand','mobx',
    'graphql','apollo','rest api','restful','websocket','web3',
    'figma','adobe xd','sketch','invision','zeplin','storybook',
  ];

  // ── BACKEND
  const backend = [
    'node.js','nodejs','express','expressjs','fastapi','flask','django',
    'spring','spring boot','laravel','rails','ruby on rails','asp.net',
    'dotnet','.net','nestjs','fastify','hapi','koa','strapi','supabase',
    'firebase','appwrite','parse','loopback','feathers',
  ];

  // ── DATABASES
  const databases = [
    'postgresql','postgres','mysql','sqlite','mongodb','redis','cassandra',
    'dynamodb','firebase','firestore','supabase','oracle','sql server','mssql',
    'mariadb','couchdb','elasticsearch','neo4j','influxdb','timescaledb',
    'cockroachdb','planetscale','fauna','prisma','sequelize','mongoose',
    'typeorm','knex','drizzle','sqlalchemy',
  ];

  // ── CLOUD & DEVOPS
  const cloud = [
    'aws','amazon web services','azure','microsoft azure','gcp',
    'google cloud','heroku','vercel','netlify','railway','render',
    'digitalocean','linode','cloudflare','terraform','ansible','puppet',
    'chef','vagrant','docker','kubernetes','k8s','helm','jenkins',
    'github actions','gitlab ci','circleci','travis ci','ci/cd','devops',
    'linux','ubuntu','debian','centos','nginx','apache','caddy',
    'serverless','lambda','cloud functions','cloud run','ecs','eks',
  ];

  // ── AI / DATA SCIENCE
  const aiml = [
    'machine learning','deep learning','artificial intelligence','ai','ml',
    'nlp','natural language processing','computer vision','data science',
    'tensorflow','pytorch','keras','scikit-learn','sklearn','xgboost',
    'pandas','numpy','scipy','matplotlib','seaborn','plotly',
    'jupyter','colab','hugging face','openai','langchain','llm',
    'data analysis','data engineering','data pipeline','etl','elt',
    'spark','hadoop','kafka','airflow','dbt','databricks','snowflake',
    'power bi','tableau','looker','metabase','grafana','kibana',
    'regression','classification','clustering','neural network',
    'reinforcement learning','transfer learning','fine-tuning',
  ];

  // ── MOBILE
  const mobile = [
    'android','ios','react native','flutter','swift','kotlin','xamarin',
    'ionic','cordova','expo','xcode','android studio','mobile development',
    'app store','play store','push notifications','firebase messaging',
  ];

  // ── TESTING
  const testing = [
    'jest','mocha','chai','jasmine','cypress','playwright','selenium',
    'puppeteer','testing library','unit testing','integration testing',
    'e2e testing','tdd','bdd','qa','quality assurance','pytest',
    'unittest','rspec','junit','testng','postman','insomnia',
  ];

  // ── VERSION CONTROL & TOOLS
  const tools = [
    'git','github','gitlab','bitbucket','jira','confluence','notion',
    'slack','trello','asana','linear','figma','postman','swagger',
    'openapi','graphql','rest','soap','grpc','oauth','jwt','auth0',
    'stripe','twilio','sendgrid','resend','cloudinary','s3',
    'redis','rabbitmq','kafka','celery','cron','websockets',
  ];

  // ── SOFT SKILLS
  const softSkills = [
    'communication','leadership','teamwork','collaboration','problem solving',
    'critical thinking','time management','adaptability','creativity',
    'attention to detail','analytical','interpersonal','presentation',
    'project management','stakeholder management','mentoring','coaching',
    'agile','scrum','kanban','waterfall','sprint','standup',
    'cross-functional','self-motivated','proactive','ownership',
    'fast-paced','startup','entrepreneurial','innovative',
  ];

  // ── EXPERIENCE LEVELS
  const seniority = [
    'junior','mid-level','mid level','senior','lead','principal','staff',
    'architect','director','vp','head of','manager','intern','fresher',
    'entry level','entry-level','experienced','expert',
  ];

  // ── EXPERIENCE YEARS (regex)
  const expPatterns = [
    /(\d+)\+?\s*years?\s*(?:of\s*)?(?:experience|exp)/gi,
    /(\d+)\s*-\s*(\d+)\s*years?/gi,
    /minimum\s*(\d+)\s*years?/gi,
  ];

  // ── EDUCATION
  const education = [
    'bachelor','b.tech','b.e','bsc','b.sc','master','m.tech','m.e','msc',
    'm.sc','mba','phd','ph.d','degree','computer science','information technology',
    'software engineering','electronics','electrical','mechanical',
    'engineering','graduate','postgraduate','certification','certified',
  ];

  // ── INDUSTRY TERMS
  const industry = [
    'saas','b2b','b2c','fintech','edtech','healthtech','proptech','legaltech',
    'ecommerce','e-commerce','marketplace','platform','product','startup',
    'enterprise','mid-market','sme','mnc','consulting','agency','remote',
    'hybrid','onsite','full-time','part-time','contract','freelance',
    'equity','esop','stock options',
  ];

  // ── ROLES
  const roles = [
    'software engineer','software developer','full stack','full-stack',
    'frontend developer','backend developer','devops engineer','data engineer',
    'data analyst','data scientist','ml engineer','ai engineer','product manager',
    'product designer','ux designer','ui designer','graphic designer',
    'qa engineer','test engineer','security engineer','cloud engineer',
    'site reliability','sre','platform engineer','mobile developer',
    'ios developer','android developer','solutions architect','tech lead',
    'engineering manager','cto','recruiter','hr','talent acquisition',
    'business analyst','project manager','scrum master',
  ];

  // ── COMBINE ALL TERM LISTS
  const allTermLists = [
    { list: roles,      score: 10, category: 'Role' },
    { list: languages,  score: 9,  category: 'Language' },
    { list: frontend,   score: 8,  category: 'Frontend' },
    { list: backend,    score: 8,  category: 'Backend' },
    { list: databases,  score: 8,  category: 'Database' },
    { list: cloud,      score: 8,  category: 'Cloud/DevOps' },
    { list: aiml,       score: 9,  category: 'AI/ML' },
    { list: mobile,     score: 8,  category: 'Mobile' },
    { list: testing,    score: 7,  category: 'Testing' },
    { list: tools,      score: 7,  category: 'Tools' },
    { list: education,  score: 6,  category: 'Education' },
    { list: seniority,  score: 7,  category: 'Seniority' },
    { list: industry,   score: 5,  category: 'Industry' },
    { list: softSkills, score: 4,  category: 'Soft Skill' },
  ];

  // ── MATCH ALL TERMS
  allTermLists.forEach(({ list, score }) => {
    list.forEach(term => {
      const regex = new RegExp(`\\b${escapeRegex(term)}\\b`, 'gi');
      if (regex.test(lower)) {
        const display = formatKeyword(term);
        const existing = found.get(display.toLowerCase()) || 0;
        found.set(display.toLowerCase(), { display, score: existing + score });
      }
    });
  });

  // ── EXTRACT EXPERIENCE YEARS
  expPatterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(original)) !== null) {
      const tag = match[0].trim();
      found.set(tag.toLowerCase(), { display: tag, score: 8 });
    }
  });

  // ── EXTRACT CAPITALIZED PROPER NOUNS (likely tool/company names)
  const properNouns = original.match(/\b[A-Z][a-zA-Z]{2,}\b/g) || [];
  const commonCaps = new Set(['The','And','For','With','From','This','That','Have','Will','Should','Must','They','Your','Our','Are','Has','Can','Its','You','All','Not','Any','But','More','Been','Also','Into','Over','After','Under','About','Using','Being','Other','Some','Such','Each','Even','Most','Very','Only']);
  properNouns.forEach(word => {
    if (!commonCaps.has(word) && !found.has(word.toLowerCase())) {
      found.set(word.toLowerCase(), { display: word, score: 3 });
    }
  });

  // ── SORT BY SCORE, RETURN TOP 30
  const sorted = Array.from(found.values())
    .sort((a, b) => b.score - a.score)
    .slice(0, 30)
    .map(k => k.display);

  return sorted;
}

// ── HELPERS
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function formatKeyword(term) {
  // Keep known acronyms uppercase
  const acronyms = new Set([
    'aws','gcp','api','sql','html','css','css3','html5','ai','ml','nlp',
    'ui','ux','ci','cd','jwt','oauth','rest','grpc','sre','vba','sas',
    'mba','phd','bsc','msc','ios','sdk','ide','orm','rpc','b2b','b2c',
    'saas','sme','mnc','esop','etl','elt','tdd','bdd','qa','e2e',
  ]);
  if (acronyms.has(term.toLowerCase())) return term.toUpperCase();

  // Title case multi-word
  return term.split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}