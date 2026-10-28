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
  role: 'AI / ML ENGINEER · PYTHON · SOFTWARE DEVELOPER',
  tagline: ['AI / ML Engineer', 'Python', 'Software Developer'],
  intro: 'Building intelligent predictive systems and modern software experiences with Python, AI/ML, and full-stack technologies.',
  location: 'India',
  email: 'krishnakantofficial27@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/krishnakantsrivastava/',
    github: 'https://github.com/krishnakantofficial27-blip',
  },
  resumePdf: '/assets/Krishna_Kant_Srivastava_Resume.pdf',
  portrait: {
    src: '/images/krishna-portrait.png',
    alt: 'Portrait of Krishna Kant Srivastava',
  },
  sunglassesPortrait: {
    src: '/images/krishna-sunglasses.png',
    alt: 'Cinematic portrait of Krishna Kant Srivastava wearing sunglasses',
  },
  interests: ['Artificial Intelligence', 'Machine Learning', 'Python', 'Predictive Modeling', 'Creative Web Development'],
};

export const education = [
  {
    school: 'Undergraduate Engineering Program',
    place: 'India',
    degree: 'Bachelor of Technology · Artificial Intelligence and Machine Learning',
    period: 'Present',
    score: 'AI & ML Focus',
  },
];

export const experience = [
  {
    company: 'Independent Software Engineering',
    role: 'AI / ML & Full-Stack Developer',
    place: 'India',
    period: 'Ongoing',
    points: [
      'Architecting end-to-end machine learning pipelines and predictive modeling workflows with Python, focusing on real-world hazard intelligence and data analysis.',
      'Developing responsive, modern web applications by combining type-safe React and TypeScript frontends with clean, modular architecture.',
      'Prototyping domain-specific predictive solutions including SlopeSafe for automated landslide-risk monitoring and hazard assessment.',
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
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'slopesafe',
    title: 'SlopeSafe',
    year: '2026',
    genre: 'AI / ML · Geo-Risk · Predictive Analytics',
    logline: 'An intelligent landslide-risk monitoring and prediction system utilizing terrain features, meteorological telemetry, and predictive ML models.',
    stack: ['Python', 'Machine Learning', 'Data Analytics', 'Predictive Modeling', 'REST API'],
    build: [
      'Engineered an AI-driven landslide risk monitoring and predictive framework to analyze geological and meteorological hazard indicators.',
      'Developed data preprocessing, feature engineering, and model evaluation pipelines for automated hazard classification and risk scoring.',
      'Designed an intuitive interface enabling domain analysts and local authorities to visualize risk zones and early warning telemetry.',
    ],
    features: [
      'Real-time slope hazard & precipitation risk scoring',
      'Predictive terrain risk classification models',
      'Spatial hazard mapping and environmental telemetry',
      'Early warning notification framework',
    ],
    metrics: [
      { value: 'AI / ML', label: 'predictive hazard engine' },
      { value: 'Real-Time', label: 'risk monitoring & telemetry' },
      { value: 'Early Alert', label: 'warning & zone classification' },
      { value: 'Multi-Factor', label: 'terrain & weather feature analysis' },
    ],
    github: 'https://github.com/krishnakantofficial27-blip',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'shield',
  },
  {
    id: 'cinematic-portfolio',
    title: 'Cinematic Series Portfolio',
    year: '2026',
    genre: 'Creative Dev · React · Framer Motion',
    logline: 'A cinematic OTT streaming-inspired developer portfolio engineered with React 18, TypeScript, Tailwind CSS v4, and Lenis smooth scrolling.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lenis'],
    build: [
      'Engineered a high-performance streaming-inspired portfolio with fluid physics, magnetic pointer interactions, and responsive card rails.',
      'Integrated custom audio-visual timing beats, scroll depth tracking, and accessible motion controls.',
    ],
    features: [
      'Pinned horizontal showcase and swipe rails',
      'Lenis smooth inertia scrolling & dynamic scroll locking',
      '3D interactive card tilt and canvas particle dynamics',
      'Dynamic persona profile switcher reordering section priority',
    ],
    metrics: [
      { value: '60 FPS', label: 'fluid physics & animations' },
      { value: '100%', label: 'responsive across all viewports' },
      { value: 'TypeScript', label: 'strict type-safe architecture' },
    ],
    github: 'https://github.com/krishnakantofficial27-blip/portfolio',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'flow',
  },
  {
    id: 'intelligent-analytics',
    title: 'AI Exploration & ML Pipelines',
    year: '2026',
    genre: 'Python · Data Science · ML Pipelines',
    logline: 'Modular Python pipelines for machine learning modeling, statistical analysis, and algorithmic experimentation.',
    stack: ['Python', 'NumPy', 'Pandas', 'Scikit-Learn'],
    build: [
      'Built modular data processing and model evaluation pipelines for regression, classification, and exploratory data analysis.',
      'Implemented structured experiment tracking, model validation, and metric visualization for reproducible research.',
    ],
    features: [
      'Automated data transformation & feature scaling',
      'Cross-validation & hyperparameter evaluation workflows',
      'Visual performance evaluation metrics',
    ],
    metrics: [
      { value: 'Modular', label: 'reusable ML pipelines' },
      { value: 'Python', label: 'scientific & data stack' },
      { value: 'Automated', label: 'evaluation & validation' },
    ],
    github: 'https://github.com/krishnakantofficial27-blip',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'slopesafe-arch',
    title: 'SlopeSafe Architecture',
    org: 'AI/ML Hazard Intelligence',
    detail: 'Conceived and engineered the predictive model pipeline for landslide risk monitoring.',
    laurel: 'Featured Project',
  },
  {
    id: 'aiml-specialization',
    title: 'AI & ML Specialization',
    org: 'Computer Science & AI',
    detail: 'Focused academic and practical training in Machine Learning, Neural Networks, and Data Science.',
    laurel: 'Academic Focus',
  },
  {
    id: 'creative-dev',
    title: 'Creative Engineering',
    org: 'Web & UI/UX Systems',
    detail: 'Designing high-performance web applications with React, TypeScript, and Framer Motion.',
    laurel: 'Full-Stack',
  },
  {
    id: 'python-engineering',
    title: 'Python Development',
    org: 'Data Science & Software',
    detail: 'Building scalable data pipelines, predictive models, and backend integration services.',
    laurel: 'Primary Stack',
  },
  {
    id: 'continuous-learning',
    title: 'Applied AI Research',
    org: 'Continuous Exploration',
    detail: 'Deepening expertise across deep learning architectures, system design, and predictive intelligence.',
    laurel: 'Innovation',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Discipline', name: 'Artificial Intelligence & Machine Learning', link: '#' },
  { issuer: 'Language', name: 'Python Engineering & Scientific Computing', link: '#' },
  { issuer: 'Frontend', name: 'Modern React & TypeScript Architecture', link: '#' },
  { issuer: 'Core Focus', name: 'Predictive Modeling & Geo-Hazard Intelligence', link: '#' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Python is the primary language',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'C++', mono: 'C+' },
      { name: 'Java', mono: 'Jv' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'aiml',
    title: 'AI & Machine Learning',
    subtitle: 'Predictive modeling & intelligent systems',
    skills: [
      { name: 'Machine Learning', mono: 'Ml' },
      { name: 'Predictive Modeling', mono: 'Pm' },
      { name: 'Scikit-Learn', mono: 'Sk' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'Pandas', mono: 'Pd' },
      { name: 'Deep Learning', mono: 'Dl' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & UI',
    subtitle: 'Interfaces & creative web platform',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'HTML5', mono: 'H5' },
      { name: 'CSS3', mono: 'C3' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Tools',
    subtitle: 'APIs, systems & development workflows',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Postman', mono: 'Pm' },
      { name: 'VS Code', mono: 'Vc' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'Core computer science foundations',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'OOPs', mono: 'Oo' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'OS', mono: 'Os' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Active technical exploration',
    skills: [
      { name: 'Artificial Intelligence', mono: 'Ai' },
      { name: 'Creative Web Development', mono: 'Cw' },
      { name: 'Predictive Systems', mono: 'Ps' },
      { name: 'System Design', mono: 'Sd' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['SlopeSafe', 'AI Exploration & ML Pipelines'],
  'Machine Learning': ['SlopeSafe', 'B.Tech AI & ML'],
  'Predictive Modeling': ['SlopeSafe Landslide Intelligence'],
  'Scikit-Learn': ['SlopeSafe', 'AI Exploration & ML Pipelines'],
  NumPy: ['SlopeSafe Data Preprocessing'],
  Pandas: ['SlopeSafe Feature Engineering'],
  React: ['Cinematic Series Portfolio'],
  TypeScript: ['Cinematic Series Portfolio'],
  'Tailwind CSS': ['Cinematic Series Portfolio'],
  'REST APIs': ['SlopeSafe Architecture'],
  'Git / GitHub': ['Portfolio Repository'],
  DSA: ['Computer Science Foundations'],
  'Artificial Intelligence': ['B.Tech AI & ML Focus'],
  'Creative Web Development': ['Cinematic Series Portfolio'],
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
    period: 'The Beginning',
    synopsis: 'Building deep curiosity and core foundations in mathematics, algorithmic problem solving, and computer science.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Core Fundamentals',
        description: 'Immersing in logic, structured programming, and analytical problem-solving fundamentals.',
        tags: ['Computer Science', 'Logic'],
        runtime: 'Milestone 01',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: AI & ML',
    period: 'Specialization Arc',
    synopsis: 'Diving into Artificial Intelligence and Machine Learning, mastering Python, data analytics, and predictive modeling.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Python Arc',
        description: 'Deep dive into Python for scientific computing, NumPy, Pandas, and exploratory data analysis.',
        tags: ['Python', 'Data Science'],
        runtime: 'Milestone 02',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'Predictive Modeling',
        description: 'Implementing classification, regression, and machine learning models for pattern recognition.',
        tags: ['Machine Learning', 'Scikit-Learn'],
        runtime: 'Milestone 03',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Creative Engineering',
    period: 'Modern Full-Stack',
    synopsis: 'Bridging data-driven intelligence with modern, responsive, and cinematic web interfaces.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Modern Web Architecture',
        description: 'Engineering responsive applications using React, TypeScript, and modern design systems.',
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        runtime: 'Milestone 04',
        palette: violet,
      },
      {
        code: 'S03 E02',
        title: 'Fluid Motion & UX',
        description: 'Designing fluid 60fps micro-interactions, smooth scrolling, and accessible visual hierarchy.',
        tags: ['Framer Motion', 'Lenis', 'UI/UX'],
        runtime: 'Milestone 05',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Real-World Solutions',
    period: 'Featured Work',
    synopsis: 'Applying machine learning to critical environmental challenges through the SlopeSafe system.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'SlopeSafe Genesis',
        description: 'Architecting an AI-driven landslide risk monitoring and prediction system with environmental telemetry.',
        tags: ['SlopeSafe', 'AI/ML', 'Predictive Modeling'],
        runtime: 'Featured',
        palette: amber,
      },
      {
        code: 'S04 E02',
        title: 'Predictive Hazard Mapping',
        description: 'Integrating terrain feature analysis, precipitation telemetry, and real-time hazard scoring.',
        tags: ['Data Pipelines', 'Hazard Intelligence'],
        runtime: 'Featured',
        palette: crimson,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Future Arc',
    synopsis: 'Exploring advanced deep learning architectures, scalable systems, and impactful artificial intelligence.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Developing high-impact AI/ML applications and scalable intelligent software solutions.',
        tags: ['Deep Learning', 'Advanced AI', 'Scalable Systems'],
        runtime: 'In Production',
        palette: ocean,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Featured Original', title: 'SlopeSafe', detail: 'Landslide-risk monitoring & prediction system', palette: amber },
  { label: 'Primary Language', title: 'Python', detail: 'Core tool for AI/ML, data pipelines & scientific computing', palette: crimson },
  { label: 'Discipline', title: 'AI & ML', detail: 'Artificial Intelligence & Machine Learning specialization', palette: ocean },
  { label: 'Core Expertise', title: 'Predictive Modeling', detail: 'Pattern analysis, risk classification & hazard forecasting', palette: violet },
  { label: 'Frontend Stack', title: 'React & TypeScript', detail: 'Modern, strictly typed component architecture', palette: jade },
  { label: 'Cinematic UX', title: 'Framer Motion', detail: 'Smooth physics, layout springs & interactive gestures', palette: amber },
  { label: 'Performance', title: 'Lenis Smooth Scroll', detail: 'Inertia-driven wheel & touch scrolling', palette: crimson },
  { label: 'Design System', title: 'Tailwind CSS v4', detail: 'Curated dark cinema color tokens & utilities', palette: ocean },
  { label: 'Engineering Focus', title: 'Clean Architecture', detail: 'Modular, maintainable, and scalable software design', palette: jade },
  { label: 'Future Vision', title: 'Applied AI', detail: 'Transforming real-world challenges through intelligent systems', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Discipline',
    title: 'AI & ML Engineer',
    lines: ['Krishna Kant Srivastava', 'Specializing in Artificial Intelligence and Machine Learning'],
    chips: ['AI / ML', 'Python', 'Software Dev'],
  },
  {
    kicker: 'Core Stack',
    title: 'Python First.',
    lines: ['Python, C++, Java, JavaScript · React, TypeScript, Tailwind CSS', 'NumPy, Pandas, Scikit-Learn · Machine Learning & Predictive Modeling'],
    chips: ['Python', 'Machine Learning', 'React', 'TypeScript', 'Predictive Modeling'],
  },
  {
    kicker: 'Featured Original',
    title: 'SlopeSafe',
    lines: ['Landslide-risk monitoring and prediction system', 'Predictive hazard scoring, environmental telemetry & early warning alerts'],
    chips: ['SlopeSafe', 'AI/ML', 'Geo-Risk'],
  },
  {
    kicker: 'Creative Engineering',
    title: 'Cinematic Web',
    lines: ['Bridging intelligent backends with fluid, high-performance web interfaces', 'Built with React 18, TypeScript, Tailwind CSS v4, and Framer Motion'],
    chips: ['60 FPS', 'Framer Motion', 'Lenis'],
  },
  {
    kicker: 'Mission',
    title: 'Intelligent Software',
    lines: ['Building applied artificial intelligence solutions that solve real-world problems with clarity and impact.'],
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
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals · SlopeSafe`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 highlights & focus areas', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories · Python & AI/ML`, palette: ocean },
  moments: { nav: 'Moments', card: 'Top Moments', meta: `${achievements.length} Milestones · Focus Areas`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume — View & download', palette: violet },
};
