/**
 * Central portfolio data · personalized for Krishna Kant Srivastava.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Krishna Kant Srivastava',
  displayName: 'Krishna Kant Srivastava',
  firstName: 'KRISHNA',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A SRIVASTAVA ORIGINAL',
  role: 'AI / ML ENGINEER · GENERATIVE AI & VIBE CODER · SOFTWARE DEVELOPER',
  tagline: ['AI / ML Engineer', 'Generative AI & Vibe Coder', 'Software Developer'],
  intro:
    'B.Tech CSE (AI & ML) student at JAIN (Deemed-to-be University). An AI-assisted developer and vibe coder who combines prompt engineering and modern dev tools with hands-on programming to turn ideas into working prototypes.',
  location: 'Bengaluru, India',
  phone: '+91 9263416269',
  email: 'krishnakantofficial27@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/krishna-kant-srivastava-aab294388',
    github: 'https://github.com/krishnakantofficial27-blip',
    portfolio: 'https://krishnakantofficial27-blip.github.io/portfolio',
    credly: 'https://www.credly.com/users/krishnakant-srivastava',
  },
  resumePdf: './assets/Krishna_Kant_Srivastava_Resume.pdf',
  portrait: {
    src: './images/krishna-portrait.png',
    alt: 'Portrait of Krishna Kant Srivastava',
  },
  sunglassesPortrait: {
    src: './images/krishna-sunglasses.png',
    alt: 'Cinematic portrait of Krishna Kant Srivastava wearing sunglasses',
  },
  interests: [
    'Generative AI Engineering',
    'Agentic AI',
    'Machine Learning',
    'Vibe Coding & Rapid Prototyping',
    'Prompt Engineering',
    'Backend Development',
  ],
  strengths: [
    'Problem Solving',
    'Team Collaboration',
    'Creative Thinking',
    'Adaptability',
    'Continuous Learning',
  ],
};

export const education = [
  {
    school: 'JAIN (Deemed-to-be University)',
    department: 'Faculty of Engineering and Technology',
    place: 'Bengaluru, India',
    degree: 'B.Tech – Computer Science & Engineering (AI & ML)',
    period: '2025–2029',
    score: 'Currently Pursuing Semester III',
  },
];

export const experience = [
  {
    company: 'AI-Assisted Development & Collaborative Engineering',
    role: 'AI / ML & Software Developer · Vibe Coder',
    place: 'Bengaluru, India',
    period: '2025 — Present',
    points: [
      'Combining prompt engineering and modern development tools with hands-on programming to turn ideas into working prototypes rapidly.',
      'Contributed to collaborative hackathon solutions including Smart India Hackathon 2026 (Second-Round Selection).',
      'Engineered SlopeSafe, an AI/ML-based landslide risk prediction and evacuation-support prototype tested end-to-end against validated real-world data.',
      'Developing responsive web and full-stack solutions with Python, React.js, Next.js, TypeScript, Node.js, and REST APIs.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  link?: string;
  linkText?: string;
  certificate?: string;
  certificateText?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'sih-2026',
    title: 'SIH 2026 Solution',
    year: '2026',
    genre: 'Smart India Hackathon · Team Project · AI & Full-Stack',
    logline:
      'Collaborative solution engineered for Smart India Hackathon 2026, selected for Round 2 and featuring rapid prototyping, AI-assisted development, and live deployment.',
    stack: ['Python', 'AI / ML', 'React.js', 'Next.js', 'Vercel', 'Prompt Engineering'],
    build: [
      'Collaborated with teammates on a Smart India Hackathon 2026 solution, achieving Second-Round selection.',
      'Contributed to solution development, AI-assisted rapid prototyping, and presentation architecture.',
      'Deployed live cloud overview platform on Vercel with structured telemetry and demonstrations.',
    ],
    features: [
      'Selected for Second Round in Smart India Hackathon 2026',
      'Rapid prototype development with prompt engineering and vibe coding',
      'Team collaboration on system architecture and pitch deck',
      'Live cloud hosting and project overview on Vercel',
    ],
    metrics: [
      { value: 'Round 2', label: 'SIH 2026 selection' },
      { value: 'Live Web', label: 'si-h-2026.vercel.app' },
      { value: 'Certified', label: 'SIH 2026 participation' },
      { value: 'Rapid Proto', label: 'prompt engineered MVP' },
    ],
    link: 'https://si-h-2026.vercel.app/overview',
    linkText: 'Live Web Link ↗',
    certificate: './certificates/sih-2026-certificate.jpg',
    certificateText: 'View SIH Certificate ↗',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'slopesafe',
    title: 'SlopeSafe',
    year: '2026',
    genre: 'AI / ML · Landslide Risk · Evacuation Support',
    logline:
      'An AI/ML-based landslide risk prediction and evacuation-support prototype tested end-to-end using validated real-world data.',
    stack: ['Python', 'Machine Learning', 'Data Analytics', 'Predictive Modeling', 'Risk Scoring'],
    build: [
      'Contributed to an AI/ML-based landslide risk prediction and evacuation-support prototype as Prototype & Demo Designer.',
      'Worked with Python and core AI/ML concepts to evaluate geological slope stability and precipitation risk factors.',
      'Tested the prototype end-to-end against validated real-world meteorological and terrain datasets.',
    ],
    features: [
      'AI/ML-based landslide hazard and risk prediction models',
      'Evacuation-support framework for disaster preparedness',
      'End-to-end testing with validated real-world datasets',
      'Meteorological & terrain telemetry data preprocessing',
    ],
    metrics: [
      { value: 'AI / ML', label: 'landslide risk models' },
      { value: 'Validated', label: 'tested on real-world data' },
      { value: 'Early Alert', label: 'evacuation-support prototype' },
      { value: 'Python', label: 'core modeling & testing' },
    ],
    github: 'https://github.com/krishnakantofficial27-blip',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'shield',
  },
  {
    id: 'cinematic-portfolio',
    title: 'The Series Portfolio',
    year: '2026',
    genre: 'Creative Dev · React.js · Framer Motion',
    logline:
      'A cinematic OTT streaming-inspired developer portfolio engineered and vibe coded with React 18, TypeScript, Tailwind CSS v4, and Lenis smooth scrolling.',
    stack: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lenis', 'Vercel'],
    build: [
      'Engineered a high-performance streaming-inspired portfolio with fluid physics, magnetic pointer interactions, and responsive card rails.',
      'Integrated Google Cloud Skill Badges credential showcase, interactive badge modal inspection, and PDF resume sheet.',
      'Optimized with universal relative asset resolution and deployed across GitHub Pages and Vercel CDN.',
    ],
    features: [
      'Pinned horizontal showcase and responsive mobile swipe rails',
      'Lenis smooth inertia scrolling & dynamic scroll locking',
      'Interactive 10 Google Cloud Skill Badges showcase rail',
      'Embedded PDF resume sheet and direct download viewer',
    ],
    metrics: [
      { value: '60 FPS', label: 'fluid spring physics' },
      { value: '10 Badges', label: 'Google Cloud verifications' },
      { value: 'TypeScript', label: 'strict type-safe architecture' },
      { value: 'Universal', label: 'GitHub Pages & Vercel CDN' },
    ],
    github: 'https://github.com/krishnakantofficial27-blip/portfolio',
    link: 'https://krishnakantofficial27-blip.github.io/portfolio/',
    linkText: 'Live Portfolio ↗',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
  linkLabel?: string;
  webLink?: string;
  webLinkLabel?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'sih-2026',
    title: 'Smart India Hackathon 2026',
    org: 'National Hackathon · JAIN University',
    detail: 'Selected for the second round through a collaborative AI/ML team project.',
    laurel: 'Round 2 Selection',
    link: './certificates/sih-2026-certificate.jpg',
    linkLabel: 'View Certificate ↗',
    webLink: 'https://si-h-2026.vercel.app/overview',
    webLinkLabel: 'Live Web Link ↗',
  },
  {
    id: 'sih-2025',
    title: 'Smart India Hackathon 2025',
    org: 'JAIN University Internal',
    detail: 'Selected for the second round of the university internal hackathon; participated in the 24-hour hackathon.',
    laurel: 'Round 2 Selection',
    link: './certificates/sih-2025-certificate.jpg',
    linkLabel: 'View Certificate ↗',
  },
  {
    id: 'vibeathon-2026',
    title: 'Vibeathon 2026',
    org: 'Cognito Club · JAIN University',
    detail: 'Certificate of Participation in the "Build & Ship" technical competition demonstrating rapid execution.',
    laurel: 'Build & Ship',
    link: './certificates/vibeathon-2026-certificate.jpg',
    linkLabel: 'View Certificate ↗',
  },
  {
    id: 'ju-hackathon-2025',
    title: "JU Hackathon '25",
    org: 'JU Entrepreneurship Festival',
    detail: 'Certificate of Appreciation awarded during JAIN Entrepreneurship Festival Week (Sept 2025).',
    laurel: 'Appreciation',
    link: './certificates/ju-hackathon-2025-certificate.jpg',
    linkLabel: 'View Certificate ↗',
  },
  {
    id: 'gcp-badges-credly',
    title: 'Google Cloud Skill Badges',
    org: 'Google Cloud & Credly',
    detail: '10 official skill badges in Generative AI, Vertex AI Gemini API, AI Studio, Cloud Vision, Speech API & Compute.',
    laurel: '10 Verified Badges',
    link: 'https://www.credly.com/users/krishnakant-srivastava',
    linkLabel: 'View Credly Profile ↗',
  },
];

export type SkillBadge = {
  id: string;
  title: string;
  issuer: string;
  category: string;
  level: string;
  image: string;
  description: string;
};

export const skillBadges: SkillBadge[] = [
  {
    id: 'gcp-vertex-ai-gemini',
    title: 'Explore Generative AI with the Vertex AI Gemini API',
    issuer: 'Google Cloud',
    category: 'Machine Learning & AI',
    level: 'Skill Badge · Intermediate',
    image: './badges/google-cloud-vertex-ai-gemini-api.png',
    description: 'Developing advanced generative AI solutions using Vertex AI SDK and the Gemini API, covering prompt design, multimodal inputs, and parameter tuning.',
  },
  {
    id: 'gcp-gemini-enterprise',
    title: 'Create Your First Gemini Enterprise Application',
    issuer: 'Google Cloud',
    category: 'Artificial Intelligence',
    level: 'Skill Badge · Introductory',
    image: './badges/google-cloud-gemini-enterprise-app.png',
    description: 'Hands-on proficiency in building enterprise-grade applications with Google Gemini generative AI models and APIs.',
  },
  {
    id: 'gcp-ai-studio',
    title: 'Develop AI-powered Prototypes in Google AI Studio',
    issuer: 'Google Cloud',
    category: 'Artificial Intelligence',
    level: 'Skill Badge · Introductory',
    image: './badges/google-cloud-ai-studio-prototypes.png',
    description: 'Rapid prototyping and prompt engineering for multimodal generative AI applications in Google AI Studio.',
  },
  {
    id: 'gcp-cloud-vision',
    title: 'Analyze Images with the Cloud Vision API',
    issuer: 'Google Cloud',
    category: 'Machine Learning & AI',
    level: 'Skill Badge · Introductory',
    image: './badges/google-cloud-vision-api.png',
    description: 'Leveraging Cloud Vision API to perform label detection, OCR text extraction, facial analysis, and safe-search landmark detection on image datasets.',
  },
  {
    id: 'gcp-speech-api',
    title: 'Using the Google Cloud Speech API',
    issuer: 'Google Cloud',
    category: 'Machine Learning & AI',
    level: 'Skill Badge · Introductory',
    image: './badges/google-cloud-speech-api.png',
    description: 'Transcribing audio files to text, processing streaming audio, and translating speech using the Google Cloud Speech-to-Text API.',
  },
  {
    id: 'gcp-speech-language',
    title: 'Implement Speech and Language Solutions with Pre-trained APIs',
    issuer: 'Google Cloud',
    category: 'Artificial Intelligence',
    level: 'Skill Badge · Introductory',
    image: './badges/google-cloud-speech-language-apis.png',
    description: 'Integrating Google Cloud Speech-to-Text, Natural Language, and Translation APIs into production workflows.',
  },
  {
    id: 'gcp-cloud-compute',
    title: 'The Basics of Google Cloud Compute',
    issuer: 'Google Cloud',
    category: 'Infrastructure Modernization',
    level: 'Skill Badge · Introductory',
    image: './badges/google-cloud-compute-basics.png',
    description: 'Provisioning and configuring Compute Engine virtual machine instances, persistent disks, and compute load balancers.',
  },
  {
    id: 'gcp-build-website',
    title: 'Build a Website on Google Cloud',
    issuer: 'Google Cloud',
    category: 'Infrastructure Modernization',
    level: 'Skill Badge · Introductory',
    image: './badges/google-cloud-build-a-website.png',
    description: 'Deploying scalable web applications on Google Cloud using Compute Engine, Cloud Run, and containerized architectures.',
  },
  {
    id: 'gcp-store-manage-data',
    title: 'Store, Process, and Manage Data - Console',
    issuer: 'Google Cloud',
    category: 'Data Management',
    level: 'Skill Badge · Introductory',
    image: './badges/google-cloud-store-process-manage-data.png',
    description: 'Configuring Cloud Storage, querying scalable datasets in BigQuery, and administering cloud database systems.',
  },
  {
    id: 'gcp-iam-service-accounts',
    title: 'Configure Service Accounts and IAM roles for Google Cloud',
    issuer: 'Google Cloud',
    category: 'Security',
    level: 'Skill Badge · Introductory',
    image: './badges/google-cloud-iam-service-accounts.png',
    description: 'Enforcing cloud security, identity & access management (IAM), and least-privilege service account architectures.',
  },
];

export type Certification = { issuer: string; name: string; link: string; badgeImage?: string; category?: string };

export const certifications: Certification[] = [
  { issuer: 'Google Cloud', name: 'Explore Generative AI with the Vertex AI Gemini API', link: 'https://www.credly.com/users/krishnakant-srivastava', badgeImage: './badges/google-cloud-vertex-ai-gemini-api.png', category: 'Machine Learning & AI' },
  { issuer: 'Google Cloud', name: 'Create Your First Gemini Enterprise Application', link: 'https://www.credly.com/users/krishnakant-srivastava', badgeImage: './badges/google-cloud-gemini-enterprise-app.png', category: 'Artificial Intelligence' },
  { issuer: 'Google Cloud', name: 'Develop AI-powered Prototypes in Google AI Studio', link: 'https://www.credly.com/users/krishnakant-srivastava', badgeImage: './badges/google-cloud-ai-studio-prototypes.png', category: 'Artificial Intelligence' },
  { issuer: 'Google Cloud', name: 'Analyze Images with the Cloud Vision API', link: 'https://www.credly.com/users/krishnakant-srivastava', badgeImage: './badges/google-cloud-vision-api.png', category: 'Machine Learning & AI' },
  { issuer: 'Google Cloud', name: 'Using the Google Cloud Speech API', link: 'https://www.credly.com/users/krishnakant-srivastava', badgeImage: './badges/google-cloud-speech-api.png', category: 'Machine Learning & AI' },
  { issuer: 'Google Cloud', name: 'Implement Speech and Language Solutions with Pre-trained APIs', link: 'https://www.credly.com/users/krishnakant-srivastava', badgeImage: './badges/google-cloud-speech-language-apis.png', category: 'Artificial Intelligence' },
  { issuer: 'Google Cloud', name: 'The Basics of Google Cloud Compute', link: 'https://www.credly.com/users/krishnakant-srivastava', badgeImage: './badges/google-cloud-compute-basics.png', category: 'Infrastructure Modernization' },
  { issuer: 'Google Cloud', name: 'Build a Website on Google Cloud', link: 'https://www.credly.com/users/krishnakant-srivastava', badgeImage: './badges/google-cloud-build-a-website.png', category: 'Infrastructure Modernization' },
  { issuer: 'Google Cloud', name: 'Store, Process, and Manage Data - Console', link: 'https://www.credly.com/users/krishnakant-srivastava', badgeImage: './badges/google-cloud-store-process-manage-data.png', category: 'Data Management' },
  { issuer: 'Google Cloud', name: 'Configure Service Accounts and IAM roles for Google Cloud', link: 'https://www.credly.com/users/krishnakant-srivastava', badgeImage: './badges/google-cloud-iam-service-accounts.png', category: 'Security' },
  { issuer: 'Cyber Jagrit Bharat', name: 'Cyber Security Awareness Quiz (2025)', link: 'https://www.credly.com/users/krishnakant-srivastava', category: 'Cyber Security' },
  { issuer: 'NSS', name: 'Vigilance Awareness Week (2025)', link: 'https://www.credly.com/users/krishnakant-srivastava', category: 'Awareness & Ethics' },
  { issuer: 'Universal Human Values', name: 'World Kindness Day (2025)', link: 'https://www.credly.com/users/krishnakant-srivastava', category: 'Human Values' },
  { issuer: 'CGRI', name: 'Centre for Grassroots Research & Innovation — Inauguration Participation (2025)', link: 'https://www.credly.com/users/krishnakant-srivastava', category: 'Innovation & Research' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    subtitle: 'Core algorithmic and software languages',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'Java', mono: 'Jv' },
      { name: 'C', mono: 'C' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'TypeScript', mono: 'Ts' },
    ],
  },
  {
    id: 'webdev',
    title: 'Web Development',
    subtitle: 'Modern responsive interfaces and frameworks',
    skills: [
      { name: 'HTML5', mono: 'H5' },
      { name: 'CSS3', mono: 'C3' },
      { name: 'React.js', mono: 'Re' },
      { name: 'Next.js', mono: 'Nx' },
      { name: 'Tailwind CSS', mono: 'Tw' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    subtitle: 'Server-side systems and integration architectures',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'REST APIs', mono: 'Ap' },
    ],
  },
  {
    id: 'aiml',
    title: 'AI & Emerging Tech',
    subtitle: 'Machine learning, generative AI and deep models',
    skills: [
      { name: 'AI/ML Fundamentals', mono: 'Ml' },
      { name: 'Generative AI', mono: 'Gen' },
      { name: 'Prompt Engineering', mono: 'Pe' },
      { name: 'TensorFlow', mono: 'Tf' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    subtitle: 'Cloud, deployment environments and developer platforms',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'VS Code', mono: 'Vc' },
      { name: 'Jupyter Notebook', mono: 'Jp' },
      { name: 'Google Cloud', mono: 'Gc' },
      { name: 'Firebase', mono: 'Fb' },
      { name: 'Vercel', mono: 'Vr' },
    ],
  },
  {
    id: 'approach',
    title: 'Development Approach',
    subtitle: 'Modern rapid prototyping and AI-augmented coding',
    skills: [
      { name: 'Vibe Coding', mono: 'Vc', note: 'Rapid Prototyping' },
      { name: 'AI-assisted Development', mono: 'Ai' },
      { name: 'Rapid Prototyping', mono: 'Rp' },
      { name: 'Debugging', mono: 'Db' },
    ],
  },
  {
    id: 'exploring',
    title: 'Currently Exploring',
    subtitle: 'Active research and next-horizon software domains',
    skills: [
      { name: 'Generative AI Engineering', mono: 'Ge' },
      { name: 'Agentic AI', mono: 'Ag' },
      { name: 'Machine Learning', mono: 'Ml' },
      { name: 'Backend Development', mono: 'Bd' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['SlopeSafe Landslide Intelligence', 'SIH 2026 Solution'],
  'Generative AI': ['Google Cloud Vertex AI Gemini API', 'Google AI Studio'],
  'Prompt Engineering': ['AI-Assisted Development & Vibe Coding'],
  'Machine Learning': ['SlopeSafe Landslide Risk Prediction', 'B.Tech AI & ML'],
  'React.js': ['SIH 2026 Solution', 'The Series Portfolio'],
  'Next.js': ['SIH 2026 Solution'],
  TypeScript: ['The Series Portfolio'],
  'Tailwind CSS': ['The Series Portfolio'],
  'REST APIs': ['SIH 2026 Solution', 'SlopeSafe Architecture'],
  GitHub: ['Portfolio Repository', 'SIH 2026 Collaboration'],
  'Google Cloud': ['10 Official GCP Skill Badges'],
  Vercel: ['si-h-2026.vercel.app', 'Live Deployment'],
  'Vibe Coding': ['Rapid Prototyping & Build-and-Ship'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2025 · The Beginning',
    synopsis: 'Starting B.Tech CSE (AI & ML) at JAIN University, mastering C, Java, logic, and core algorithmic problem solving.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Core Fundamentals & Algorithms',
        description: 'Immersing in logic, structured programming in C & Java, and object-oriented foundations.',
        tags: ['Computer Science', 'Java', 'C', 'Logic'],
        runtime: 'Milestone 01',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: AI & ML',
    period: 'Specialization Arc',
    synopsis: 'Diving into Artificial Intelligence, TensorFlow, prompt engineering, and mastering 10 Google Cloud Skill Badges.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Python & AI Stack',
        description: 'Deep dive into Python for machine learning, data manipulation, and TensorFlow fundamentals.',
        tags: ['Python', 'AI/ML', 'TensorFlow'],
        runtime: 'Milestone 02',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'Google Cloud & Generative AI Badges',
        description: 'Earning 10 verified credentials across Vertex AI Gemini API, Google AI Studio, Cloud Vision, and Compute.',
        tags: ['Google Cloud', 'Generative AI', 'Credly'],
        runtime: 'Milestone 03',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'The Hackathon Arena',
    period: 'Competition Arc',
    synopsis: 'Testing skills under fire: Smart India Hackathon, Vibeathon 2026 Build & Ship, and JU Hackathon.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Smart India Hackathon Round 2',
        description: 'Selected for Round 2 in Smart India Hackathon 2026 through collaborative AI/ML solution engineering.',
        tags: ['SIH 2026', 'Round 2', 'Team Solution'],
        runtime: 'Milestone 04',
        palette: violet,
      },
      {
        code: 'S03 E02',
        title: 'Vibeathon & JU Hackathon',
        description: 'Participating in Cognito Club Vibeathon Build & Ship competition and receiving Certificate of Appreciation at JU Hackathon.',
        tags: ['Vibeathon 2026', 'JU Hackathon', 'Rapid Dev'],
        runtime: 'Milestone 05',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Real-World Solutions',
    period: 'Featured Works',
    synopsis: 'Engineering SlopeSafe for landslide hazard prediction and deploying full-stack platforms on Vercel.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'SlopeSafe – Landslide Risk AI',
        description: 'Conceiving and testing an AI/ML-based landslide risk prediction and evacuation-support prototype using validated real-world data.',
        tags: ['SlopeSafe', 'AI/ML', 'Evacuation Support'],
        runtime: 'Featured',
        palette: amber,
      },
      {
        code: 'S04 E02',
        title: 'SIH 2026 Cloud Platform',
        description: 'Prototyping and deploying si-h-2026.vercel.app with prompt engineering, live cloud hosting, and presentation architecture.',
        tags: ['SIH 2026', 'React.js', 'Vercel Deployment'],
        runtime: 'Featured',
        palette: crimson,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Future Horizon',
    synopsis: 'Pioneering Agentic AI, Generative AI Engineering, and scalable backend systems.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Agentic AI & Next-Gen Systems',
        description: 'Developing high-impact autonomous agent architectures and intelligent cloud-native software solutions.',
        tags: ['Agentic AI', 'Generative AI', 'Backend Systems'],
        runtime: 'In Production',
        palette: ocean,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Featured Original', title: 'SlopeSafe', detail: 'Landslide-risk prediction & evacuation-support prototype', palette: amber },
  { label: 'Hackathon Selection', title: 'SIH 2026 Round 2', detail: 'Smart India Hackathon collaborative team solution', palette: crimson },
  { label: 'Academic Focus', title: 'B.Tech CSE (AI & ML)', detail: 'JAIN (Deemed-to-be University), Bengaluru', palette: ocean },
  { label: 'Primary Language', title: 'Python', detail: 'Core tool for AI/ML, data pipelines & rapid prototypes', palette: violet },
  { label: 'Developer Approach', title: 'Vibe Coding', detail: 'Prompt engineering & rapid AI-assisted development', palette: jade },
  { label: 'Cloud Credentials', title: '10 GCP Badges', detail: 'Generative AI, Vertex AI Gemini & Google AI Studio on Credly', palette: amber },
  { label: 'Frontend Stack', title: 'React.js & Next.js', detail: 'Modern, strictly typed component architecture', palette: crimson },
  { label: 'Cinematic UX', title: 'Framer Motion', detail: 'Smooth physics, layout springs & interactive gestures', palette: ocean },
  { label: 'Build & Ship', title: 'Vibeathon 2026', detail: 'Technical competition by Cognito Club, JAIN University', palette: jade },
  { label: 'Future Horizon', title: 'Agentic AI', detail: 'Autonomous intelligent agents & scalable software systems', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Discipline',
    title: 'AI & ML Engineer',
    lines: ['Krishna Kant Srivastava', 'B.Tech CSE (AI & ML) at JAIN University · Bengaluru, India'],
    chips: ['AI / ML', 'Python', 'Vibe Coder'],
  },
  {
    kicker: 'Developer Approach',
    title: 'Vibe Coder & AI-Assisted',
    lines: ['Combining prompt engineering & modern developer tools with hands-on programming', 'Rapidly turning ideas into working prototypes with Python, React, Next.js & REST APIs'],
    chips: ['Vibe Coding', 'Prompt Engineering', 'Rapid Prototyping'],
  },
  {
    kicker: 'Hackathons',
    title: 'SIH 2026 Round 2',
    lines: ['Smart India Hackathon 2026 Second-Round Selection', 'SIH 2025 Internal Round 2 · Vibeathon 2026 Build & Ship · JU Hackathon Appreciation'],
    chips: ['SIH 2026', 'Hackathon Finalist', 'Team Solution'],
  },
  {
    kicker: 'Featured Original',
    title: 'SlopeSafe',
    lines: ['AI/ML-based landslide risk prediction and evacuation-support prototype', 'Tested end-to-end using validated real-world meteorological and geological data'],
    chips: ['SlopeSafe', 'AI/ML', 'Evacuation Support'],
  },
  {
    kicker: 'Verified Credentials',
    title: '10 Google Cloud Badges',
    lines: ['Google Cloud Skills Boost & Credly verified achievements', 'Vertex AI Gemini API, Google AI Studio, Cloud Vision & Infrastructure'],
    chips: ['Google Cloud', 'Credly Verified', 'Generative AI'],
  },
];

export type ProfileId = 'krishna' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'krishna',
    name: 'Krishna',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot — Background & focus', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons · ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals · SIH & SlopeSafe`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 highlights & focus areas', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories · Python, AI/ML & Web`, palette: ocean },
  moments: { nav: 'Moments', card: 'Top Moments', meta: `${achievements.length} Milestones · Hackathons & Awards`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume — View & download', palette: violet },
};
