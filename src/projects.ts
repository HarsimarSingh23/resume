export interface Project {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  color: string;
  size: 'small' | 'wide' | 'large';
  image?: string;
  language: string;
  url: string;
  year: string;
  brief: string;
  highlights: string[];
  tech: string[];
}


export const projects: Project[] = [
  {
    id: 'ai-shopping-agent',
    title: 'AI Shopping Agent',
    tagline: 'Your personal agent that hunts products in nearby stores',
    icon: '🛒',
    color: '#1BA1E2',
    size: 'large',
    image: '/tiles/shopping.jpg',
    language: 'Python',
    url: 'https://github.com/HarsimarSingh23/personal_ai_agent_for_shopping',
    year: '2026',
    brief:
      'A deployable personal AI agent for shopping that checks whether a product is actually available in stores near you — instead of you calling around or doomscrolling listings. It wires an LLM-driven agent loop to real-world product availability so the agent does the legwork.',
    highlights: [
      'Designed an autonomous agent loop that takes a natural-language shopping request and turns it into structured product searches.',
      'Built availability checking against nearby stores so results are grounded in the real world, not hallucinated.',
      'Packaged the whole thing to be deployable as *your* agent — clone, configure, and it shops for you.',
    ],
    tech: ['Python', 'LLM Agents', 'Tool Use', 'Prompt Engineering'],
  },
  {
    id: 'maison-jewellery',
    title: 'Maison Jewellery',
    tagline: 'Cinematic luxury landing page with scroll-driven storytelling',
    icon: '💎',
    color: '#D80073',
    size: 'wide',
    image: '/tiles/jewellery.jpg',
    language: 'TypeScript',
    url: 'https://github.com/HarsimarSingh23/maison-jewellery-landing',
    year: '2026',
    brief:
      'A cinematic landing page for a luxury jewellery maison — built as a portfolio piece to pitch custom website design. Every scroll is choreographed: pieces rotate into light, copy fades in like film titles, and the page feels more like a trailer than a website.',
    highlights: [
      'Choreographed the full page with GSAP ScrollTrigger — pinned scenes, scrubbed timelines, parallax depth.',
      'Designed the art direction myself: typography, pacing, and color graded for a high-jewellery brand.',
      'Kept it buttery on mobile by promoting only transform/opacity animations to the compositor.',
    ],
    tech: ['React', 'TypeScript', 'GSAP ScrollTrigger', 'Vite'],
  },
  {
    id: 'formspy',
    title: 'FormSpy',
    tagline: 'Chrome extension that tracks, saves & autofills forms',
    icon: '📝',
    color: '#F09609',
    size: 'small',
    image: '/tiles/forms.jpg',
    language: 'JavaScript',
    url: 'https://github.com/HarsimarSingh23/Autofill-Profile',
    year: '2026',
    brief:
      'FormSpy is a Chrome extension (v6) that watches the forms you fill across the web, saves your field profiles, and autofills them on demand — built out of the pain of filling the same government and job-application forms over and over.',
    highlights: [
      'Built content scripts that detect and fingerprint form fields across wildly inconsistent websites.',
      'Designed a local profile store so your data never leaves the browser.',
      'Iterated through 6 versions of field-matching heuristics to make autofill actually reliable.',
    ],
    tech: ['JavaScript', 'Chrome Extension APIs', 'Content Scripts'],
  },
  {
    id: 'hf-cleaner',
    title: 'HF Cleaner',
    tagline: 'Reclaim gigabytes from your Hugging Face cache',
    icon: '🧹',
    color: '#E51400',
    size: 'small',
    image: '/tiles/cleaning.jpg',
    language: 'Python',
    url: 'https://github.com/HarsimarSingh23/hf_cleaner',
    year: '2025',
    brief:
      'Every ML engineer has a hidden ~/.cache/huggingface folder eating 50+ GB of forgotten model weights. HF Cleaner is a small UI utility that shows you exactly which models and datasets are cached locally and lets you delete them selectively.',
    highlights: [
      'Built a UI over the Hugging Face cache internals to list models/datasets with real disk sizes.',
      'Selective deletion instead of nuking the whole cache — keep the 70B you need, drop the rest.',
      'Scratched my own itch during heavy fine-tuning work; shipped it for everyone else.',
    ],
    tech: ['Python', 'Hugging Face Hub', 'CLI/UI Tooling'],
  },
  {
    id: 'google-leetcode',
    title: 'Google LeetCode',
    tagline: 'Most-asked Google questions, organized by pattern',
    icon: '🧩',
    color: '#0050EF',
    size: 'small',
    image: '/tiles/puzzle.jpg',
    language: 'Markdown',
    url: 'https://github.com/HarsimarSingh23/most_asked_google_leetcode_questions',
    year: '2026',
    brief:
      'A curated, pattern-organized list of the LeetCode questions Google actually asks — with direct links. Instead of grinding 2000 random problems, you study by pattern: sliding window, monotonic stack, graphs, DP — the way interviews actually rhyme.',
    highlights: [
      'Mapped most-asked Google questions to their underlying algorithmic patterns.',
      'Organized for spaced practice: each pattern builds on the previous one.',
      'Earned its stars the honest way — people actually prep with it.',
    ],
    tech: ['Algorithms', 'Data Structures', 'Curation'],
  },
  {
    id: 'for-wifey',
    title: 'For Wifey',
    tagline: 'Deploy-to-impress romance, as a Vercel app',
    icon: '💌',
    color: '#FA6800',
    size: 'small',
    image: '/tiles/love.jpg',
    language: 'TypeScript',
    url: 'https://github.com/HarsimarSingh23/for_wifey',
    year: '2025',
    brief:
      'A fork-friendly TypeScript app you edit and deploy on Vercel to impress your partner. Proof that "ships products end-to-end" includes the most important stakeholder of all.',
    highlights: [
      'Built to be forked: edit a config, hit deploy, melt a heart.',
      'The highest-stakes production deployment of my career.',
    ],
    tech: ['TypeScript', 'React', 'Vercel'],
  },
];

export interface Job {
  id: string;
  role: string;
  company: string;
  period: string;
  color: string;
  icon: string;
  size: 'small' | 'wide' | 'large';
  tagline: string;
  points: string[];
}

export const experience: Job[] = [
  {
    id: 'kpmg',
    role: 'Consultant — AI/ML, GovTech',
    company: 'KPMG',
    period: 'Apr 2025 – Present',
    color: '#1BA1E2',
    icon: '🏛️',
    size: 'wide',
    tagline: 'Building the CPGRAMS AI chatbot for the Government of India',
    points: [
      'Building the CPGRAMS AI Chatbot for DARPG — a voice-powered grievance system for the citizens of India.',
      'Led backend design of scalable AI data pipelines integrated with government infrastructure.',
      'Fine-tuned and optimized GPT-OSS 120B; own the end-to-end MLOps infra on Azure & E2E cloud.',
      'Benchmarked evaluations to 90% accuracy; run CI/CD, monitoring, and production databases.',
    ],
  },
  {
    id: 'vaar-lab',
    role: 'Head & Co-founder',
    company: 'VAAR Lab',
    period: 'Apr 2024 – Feb 2025',
    color: '#D80073',
    icon: '🚀',
    size: 'wide',
    tagline: 'Co-founded an AI lab bringing LLMs to Punjabi',
    points: [
      'Co-founded an AI lab focused on Indic-language ML — fine-tuned VisionEncoderDecoder models on custom Punjabi datasets.',
      'Shipped FastAPI backends powering AI features in production; integrated OpenAI APIs into pipelines.',
      'Improved Punjabi pipeline accuracy ~25% via chain-of-thought and self-consistency prompting.',
      'Fine-tuned models up to 1B params with PEFT/adapters on minimal hardware.',
    ],
  },
  {
    id: 'rapido',
    role: 'Senior Data Analyst / Data Engineer',
    company: 'Rapido',
    period: 'Feb 2022 – Mar 2024',
    color: '#A4C400',
    icon: '🛵',
    size: 'wide',
    tagline: '100+ pipelines documented, 30% cloud spend saved',
    points: [
      'Architected modular, reusable ETL components; standardized docs for 100+ pipelines.',
      'Cut cloud spend 30% through infra audits; wired Prometheus/Grafana/Airflow observability.',
      'Defined dataset SLAs with Data Science, Product, and Engineering; mentored junior engineers.',
    ],
  },
  {
    id: 'zolostays',
    role: 'Software Developer',
    company: 'Zolostays',
    period: 'Sep 2020 – Feb 2022',
    color: '#F09609',
    icon: '🏠',
    size: 'wide',
    tagline: 'Distributed systems that cut operational delays 80%',
    points: [
      'Designed distributed systems for cross-department data flow — cut operational delays 80%.',
      'Automated workflows (60% less manual effort); built dashboards used by the CTO & CFO.',
    ],
  },
];

export interface SkillGroup {
  group: string;
  icon: string;
  color: string;
  size: 'small' | 'wide' | 'large';
  items: string[];
}

export const skills: SkillGroup[] = [
  { group: 'AI / ML', icon: '🧠', color: '#6A00FF', size: 'large', items: ['LLM Fine-tuning', 'PEFT/LoRA', 'RAG', 'Agentic AI', 'Prompt Engineering', 'PyTorch', 'TensorFlow', 'Langchain'] },
  { group: 'Languages', icon: '⌨️', color: '#00ABA9', size: 'small', items: ['Python', 'C++', 'SQL', 'TypeScript'] },
  { group: 'Big Data', icon: '🗄️', color: '#A20025', size: 'small', items: ['Spark', 'Hadoop', 'Airflow', 'Kafka', 'BigQuery', 'PySpark'] },
  { group: 'Systems', icon: '⚙️', color: '#647687', size: 'small', items: ['Microservices', 'FastAPI', 'Kubernetes', 'Docker', 'ELK', 'CI/CD'] },
  { group: 'Cloud', icon: '☁️', color: '#0050EF', size: 'small', items: ['AWS', 'GCP', 'Azure'] },
  { group: 'Databases', icon: '💾', color: '#60A917', size: 'wide', items: ['Postgres', 'MySQL', 'MongoDB'] },
];
