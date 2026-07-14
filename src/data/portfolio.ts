export type Category = 'genai' | 'cv' | 'ml' | 'datasci' | 'dataeng' | 'fullstack'

export const CATEGORY_META: Record<Category, { label: string; accent: string }> = {
  genai: { label: 'GenAI / LLM', accent: '#7B68EE' },
  cv: { label: 'Computer Vision', accent: '#4A90D9' },
  ml: { label: 'ML & MLOps', accent: '#2DD4BF' },
  datasci: { label: 'Data Science', accent: '#F59E0B' },
  dataeng: { label: 'Data Engineering', accent: '#34D399' },
  fullstack: { label: 'Full-Stack', accent: '#FB7185' },
}

export interface CaseStudy {
  challenge: string
  approach: string
  results: { label: string; value: number; suffix: string }[]
  screenshots: string[]
  heroImage?: string
}

export interface PortfolioProject {
  id: string
  title: string
  kicker: string
  category: Category
  secondary?: Category[]
  description: string
  metric?: string
  tech: string[]
  link: { type: 'github' | 'case-study' | 'request' | 'none'; href?: string }
  image?: string
  video?: string
  featured?: boolean
  year?: string
  client?: string
  caseStudy?: CaseStudy
}

export const projects: PortfolioProject[] = [
  // ── GenAI / LLM ────────────────────────────────────────────────
  {
    id: 'neuromail',
    title: 'NeuroMail V3 — AI Email Command Center',
    kicker: 'Email Intelligence',
    category: 'genai',
    secondary: ['ml', 'fullstack'],
    description:
      'Multi-mailbox desktop app with LangGraph multi-agent triage and drafting, importance scoring, and local Mistral 7B thread summarization.',
    metric: '~60% less manual email processing',
    tech: ['Electron', 'React', 'FastAPI', 'LangGraph', 'Mistral 7B', 'OpenAI', 'Gmail SDK'],
    link: { type: 'request' },
    image: '/images/neuromail/neuromail-draft-dark.webp',
    featured: true,
    caseStudy: {
      challenge:
        'Email overload kills productivity. Users needed an intelligent assistant that could triage, draft, and track emails automatically — not just filter spam.',
      approach:
        'Built a desktop application (Electron + React) with a Python/FastAPI backend. Orchestrated 4 AI agents via LangGraph for email triage, draft generation, follow-up tracking, and contact extraction. Integrated directly with Gmail SDK.',
      results: [
        { label: 'AI Agents', value: 4, suffix: '' },
        { label: 'Email Providers', value: 2, suffix: '' },
        { label: 'Features Shipped', value: 7, suffix: '+' },
        { label: 'Licensing Tiers', value: 3, suffix: '' },
      ],
      screenshots: [
        '/images/neuromail/neuromail-dashboard.webp',
        '/images/neuromail/neuromail-labelsuggestion.webp',
        '/images/neuromail/neuromail-contacts.webp',
      ],
      heroImage: '/images/neuromail/neuromail-draft-dark.webp',
    },
  },
  {
    id: 'pafla-ai',
    title: 'RAG-Powered Document Q&A',
    kicker: 'Document Intelligence',
    category: 'genai',
    secondary: ['dataeng', 'fullstack'],
    description:
      'Conversational Q&A over large document repositories with a Pinecone vector pipeline, full source attribution, and multi-tenant namespace isolation.',
    metric: '10K+ docs — research time from hours to minutes',
    tech: ['Python', 'FastAPI', 'LlamaIndex', 'Pinecone', 'OpenAI', 'Redis', 'React'],
    link: { type: 'case-study' },
    image: '/images/pafla-ai/chatbot2.webp',
    featured: true,
    caseStudy: {
      challenge:
        'An organization needed a chatbot that could answer user queries accurately from their official documents — not hallucinate generic responses.',
      approach:
        'Built a RAG pipeline using LlamaIndex + Pinecone vector DB. PDFs are uploaded, chunked, and embedded via OpenAI. User queries retrieve relevant chunks and feed them as context to GPT-4. Added Redis-backed chat memory, async message processing, and conversation threading.',
      results: [
        { label: 'Source Chunks / Query', value: 5, suffix: '' },
        { label: 'Concurrent Threads', value: 10, suffix: '+' },
        { label: 'DB Models', value: 5, suffix: '' },
        { label: 'API Endpoints', value: 6, suffix: '' },
      ],
      screenshots: ['/images/pafla-ai/chatbot1.webp'],
      heroImage: '/images/pafla-ai/chatbot2.webp',
    },
  },
  {
    id: 'lablens',
    title: 'LabLens — Health Insights API',
    kicker: 'Clinical AI',
    category: 'genai',
    secondary: ['ml', 'datasci'],
    description:
      'Four FastAPI microservices turning 100+-biomarker lab reports into clinical notes, recommendations, and follow-up suggestions — GPT-4o with automatic Gemini fallback.',
    metric: '100+ biomarkers, 9 clinical categories',
    tech: ['Python', 'FastAPI', 'OpenAI GPT-4o', 'Google Gemini', 'scikit-learn', 'Pydantic', 'Render'],
    link: { type: 'github', href: 'https://github.com/ube09/LabLens-Health-API' },
    client: 'A digital-health platform',
  },

  // ── Computer Vision ────────────────────────────────────────────
  {
    id: 'tahr-guardian',
    title: 'Tahr-Guardian',
    kicker: 'Wildlife Monitoring',
    category: 'cv',
    secondary: ['genai', 'ml'],
    description:
      'YOLOv8/v11 + CLIP pipeline detecting the endangered Arabian Tahr and intruders from drone and field-camera footage, with zero-shot habitat classification.',
    metric: '~97% mAP@50 · ~94% recall',
    tech: ['Python', 'YOLOv8', 'YOLOv11', 'OpenAI CLIP', 'OpenCV', 'PyTorch', 'scikit-learn'],
    link: { type: 'github', href: 'https://github.com/ube09/Tahr-Guardian' },
    image: '/images/portfolio/tahr-guardian/detections.webp',
    featured: true,
    client: 'Saudi conservation program',
  },
  {
    id: 'pavescan-ai',
    title: 'PaveScan-AI',
    kicker: 'Infrastructure Vision',
    category: 'cv',
    secondary: ['ml', 'dataeng'],
    description:
      'Geospatial YOLO + stereo-depth pipeline detecting 13+ classes of road damage from vehicle-mounted footage and GPS-tagging every defect via GNSS fusion.',
    metric: '13+ damage classes, GPS-tagged',
    tech: ['Python', 'YOLO', 'PyTorch', 'OpenCV', 'ZED Stereo SDK', 'GNSS', 'pandas'],
    link: { type: 'github', href: 'https://github.com/ube09/PaveScan-AI' },
    image: '/images/portfolio/pavescan/frame-1.webp',
    featured: true,
    client: 'A Dutch municipality',
  },
  {
    id: 'lanevision',
    title: 'LaneVision',
    kicker: 'Traffic Analytics',
    category: 'cv',
    secondary: ['ml'],
    description:
      'Real-time vehicle detection, axle-based classification, and directional turning-movement counts on live traffic cameras, with automated TMC Excel reports.',
    metric: 'Axle-based classification + automated TMC counts',
    tech: ['Python', 'YOLOv8/v11', 'OpenCV', 'DeepSORT', 'SORT', 'PyTorch', 'Hydra'],
    link: { type: 'github', href: 'https://github.com/ube09/LaneVision' },
    image: '/images/portfolio/lanevision/demo-poster.webp',
    video: '/images/portfolio/lanevision/demo.webm',
  },
  {
    id: 'platevision',
    title: 'PlateVision',
    kicker: 'Access Control',
    category: 'cv',
    secondary: ['genai'],
    description:
      'Vision-AI app reading license plates and country codes from vehicle photos via the OpenAI Vision API, with country-specific disambiguation and strict JSON validation.',
    metric: '8-country plate disambiguation',
    tech: ['Python', 'Streamlit', 'OpenAI Vision', 'Pillow', 'NumPy', 'Render'],
    link: { type: 'github', href: 'https://github.com/ube09/PlateVision' },
    client: 'A logistics warehouse in Amsterdam',
  },
  {
    id: 'roofvision',
    title: 'RoofVision',
    kicker: 'Property Tech',
    category: 'cv',
    secondary: ['ml', 'fullstack'],
    description:
      'FastAPI service running YOLO instance segmentation on rooftop imagery and returning ordered corner coordinates as structured JSON for automated roof measurement.',
    metric: 'YOLO segmentation → ordered corner JSON',
    tech: ['Python', 'FastAPI', 'YOLO', 'OpenCV', 'PyTorch', 'OWL-ViT'],
    link: { type: 'github', href: 'https://github.com/ube09/RoofVision' },
    client: 'A roofing-tech startup',
  },
  {
    id: 'panomend',
    title: 'PanoMend',
    kicker: 'Image Restoration',
    category: 'cv',
    secondary: ['fullstack'],
    description:
      'Multi-pass content-aware sky inpainting for 360° panoramas — HSV void detection, progressive reconstruction, and an embedded interactive Pannellum viewer.',
    metric: 'Multi-pass 360° sky reconstruction',
    tech: ['Python', 'OpenCV', 'NumPy', 'Streamlit', 'Pannellum'],
    link: { type: 'github', href: 'https://github.com/ube09/PanoMend' },
    client: 'A beach-resort owner',
  },
  {
    id: 'cv-suite',
    title: 'Computer Vision Project Suite',
    kicker: 'Vision Suite',
    category: 'cv',
    secondary: ['ml', 'fullstack'],
    description:
      'Nine end-to-end detection systems — fire, garbage, plant disease, potholes, sign language, NSFW, P&ID OCR — across YOLOv5–v8, Detectron2, and ONNX deployment.',
    metric: '9 projects · 5 frameworks',
    tech: ['YOLOv5–v8', 'Detectron2', 'PyTorch', 'OpenCV', 'Tesseract OCR', 'Flask', 'ONNX'],
    link: { type: 'github', href: 'https://github.com/ube09/Computer-Vision-Project-Suite' },
    image: '/images/portfolio/cv-suite/plant-disease.webp',
  },
  {
    id: '1flick',
    title: '1Flick — Multimodal Search Engine',
    kicker: 'Multimodal Search',
    category: 'cv',
    secondary: ['genai', 'ml'],
    description:
      'Final-year project: a multimodal search engine combining Whoosh text indexing with XceptionNet image features and ANNOY approximate nearest-neighbor retrieval.',
    tech: ['PyTorch', 'XceptionNet', 'ANNOY', 'Whoosh'],
    link: { type: 'none' },
  },

  // ── ML & MLOps ─────────────────────────────────────────────────
  {
    id: 'ecommerce-ml',
    title: 'E-commerce Analytics & ML Platform',
    kicker: 'Production ML',
    category: 'ml',
    secondary: ['genai', 'datasci', 'dataeng'],
    description:
      'Demand forecasting, fraud detection, LLM invoice extraction, and a recommendation engine for an e-commerce platform, fed by metadata-driven ETL into BigQuery.',
    metric: '85% invoice extraction · 18% fraud reduction',
    tech: ['Python', 'BigQuery', 'AWS', 'FastAPI', 'TensorFlow', 'Prophet', 'OpenAI'],
    link: { type: 'case-study' },
    image: '/images/ecommerce/ecommerceandml.webp',
    featured: true,
    client: 'Zapdas Technologies',
    caseStudy: {
      challenge:
        'An e-commerce company needed better demand forecasting, fraud detection, and automated document processing to scale their operations.',
      approach:
        'Built a comprehensive ML system: time-series forecasting with Prophet/ARIMA, anomaly detection on transaction data, LLM-powered invoice extraction using Llama 3.2 Vision, and a recommendation engine. Designed metadata-driven ETL pipelines feeding into BigQuery.',
      results: [
        { label: 'Forecast Accuracy', value: 20, suffix: '%' },
        { label: 'Fraud Reduction', value: 18, suffix: '%' },
        { label: 'Invoice Extraction', value: 85, suffix: '%' },
        { label: 'Engagement Boost', value: 30, suffix: '%' },
      ],
      screenshots: ['/images/ecommerce/ecommercebasic.webp'],
      heroImage: '/images/ecommerce/ecommerceandml.webp',
    },
  },
  {
    id: 'hr-analytics',
    title: 'HR Analytics SaaS',
    kicker: 'Workforce Analytics',
    category: 'ml',
    secondary: ['datasci'],
    description:
      'Predictive HR models for employee attrition plus geospatial workforce optimization, built into a staff-management SaaS product.',
    metric: '15% cut in operational inefficiencies',
    tech: ['Python', 'scikit-learn', 'SQL', 'Geospatial Modeling'],
    link: { type: 'none' },
    client: 'Zapdas Technologies',
  },
  {
    id: 'prophettrader',
    title: 'ProphetTrader — TSLA Forecasting',
    kicker: 'Financial Forecasting',
    category: 'ml',
    secondary: ['datasci'],
    description:
      'Prophet forecasting pipeline over 10 years of TSLA data — Open/High/Low regressors, multi-interval inference from 5-minute to daily, and confidence-interval bands.',
    metric: '10 yrs data · 5 inference intervals',
    tech: ['Python', 'Prophet', 'yfinance', 'pandas', 'joblib', 'matplotlib'],
    link: { type: 'github', href: 'https://github.com/ube09/ProphetTrader-TSLA' },
    image: '/images/portfolio/prophettrader/forecast.webp',
  },
  {
    id: 'sarcasm-detection',
    title: 'Sarcasm Detection',
    kicker: 'NLP Research',
    category: 'ml',
    secondary: ['datasci'],
    description:
      'Junior-year NLP project: a sarcasm classifier over 30K news headlines using Naive Bayes and SVM.',
    metric: '79% accuracy on 30K headlines',
    tech: ['Python', 'Naive Bayes', 'SVM'],
    link: { type: 'none' },
  },

  // ── Data Science & Analytics ───────────────────────────────────
  {
    id: 'bi-dashboard',
    title: 'Business Intelligence & Compliance Dashboard',
    kicker: 'Business Intelligence',
    category: 'datasci',
    secondary: ['fullstack'],
    description:
      'Seven-module analytics platform with weighted compliance scoring, automated Excel reporting, and multi-dimensional trend views for the property-valuation industry.',
    metric: '20+ hrs/month manual tracking eliminated',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'XLSX'],
    link: { type: 'case-study' },
    image: '/images/bi-dashboard/bi-dashboard-dark.webp',
    client: 'A property-valuation company',
    caseStudy: {
      challenge:
        'A property valuation company needed to track enlistment criteria, bank relationships, and financial metrics across multiple dimensions — with automated compliance scoring.',
      approach:
        'Built a Next.js dashboard with dynamic WAS scoring algorithms, multi-dimensional analytics (yearly, by bank, by city), 4 automated Excel report templates, and interactive visualizations using Recharts.',
      results: [
        { label: 'Report Templates', value: 4, suffix: '' },
        { label: 'Analytics Views', value: 6, suffix: '+' },
        { label: 'Bank Partners Tracked', value: 12, suffix: '+' },
        { label: 'Scoring Algorithms', value: 3, suffix: '' },
      ],
      screenshots: ['/images/bi-dashboard/bi-dashboard-dark.webp'],
      heroImage: '/images/bi-dashboard/bi-dashboard-dark.webp',
    },
  },

  // ── Data Engineering ───────────────────────────────────────────
  {
    id: 'data-infrastructure',
    title: 'Production Data Infrastructure & ETL',
    kicker: 'Data Platform',
    category: 'dataeng',
    secondary: ['ml'],
    description:
      'Metadata-driven ingestion into BigQuery, a multi-source AWS data lake (Redshift, Lambda), and automated ETL powering internal data APIs and dashboards.',
    metric: '20% less manual workload',
    tech: ['Python', 'BigQuery', 'Redshift', 'AWS Lambda', 'Airflow', 'PySpark', 'dbt'],
    link: { type: 'none' },
    client: 'Zapdas Technologies',
  },

  // ── Full-Stack ─────────────────────────────────────────────────
  {
    id: 'nexus',
    title: 'Nexus — Team Collaboration Platform',
    kicker: 'Team Collaboration',
    category: 'fullstack',
    description:
      'Cross-platform collaboration suite — web + mobile sharing one API — with real-time chat, RBAC, push notifications, and role-based dashboards.',
    metric: '3 tools → 1 · 30+ daily active users',
    tech: ['Next.js', 'React Native', 'Expo', 'PostgreSQL', 'Prisma', 'Socket.io', 'TypeScript'],
    link: { type: 'request' },
    image: '/images/nexus/nexus-dashboard-dark.webp',
    caseStudy: {
      challenge:
        'A company needed a unified platform for task management, team communication, and project tracking — accessible on both web and mobile with real-time sync.',
      approach:
        'Architected a monorepo with Next.js 16 (web) and React Native/Expo (mobile). Built JWT auth with RBAC, real-time chat with @mentions, push notifications, task management with recurring tasks and priorities, and role-based dashboards.',
      results: [
        { label: 'DB Models', value: 14, suffix: '' },
        { label: 'Platforms', value: 3, suffix: '' },
        { label: 'Core Features', value: 10, suffix: '+' },
        { label: 'Auth Roles', value: 4, suffix: '' },
      ],
      screenshots: [
        '/images/nexus/nexus-chatthread.webp',
        '/images/nexus/nexus-tasklist.webp',
        '/images/nexus/nexus-reports.webp',
      ],
      heroImage: '/images/nexus/nexus-dashboard-dark.webp',
    },
  },
  {
    id: 'bytechsol-portal',
    title: 'BytechSol Workforce Portal',
    kicker: 'HR Operations',
    category: 'fullstack',
    description:
      'Role-based workforce portal with four dashboards, IP-validated attendance, timezone-aware night-shift logic, and payroll + HR-document automation.',
    metric: '4 role dashboards · realtime sync',
    tech: ['React 19', 'TypeScript', 'Vite', 'Supabase', 'Tailwind CSS', 'ExcelJS', 'GitHub Actions'],
    link: { type: 'github', href: 'https://github.com/ube09/BytechSol-Workforce-Portal' },
  },
  {
    id: 'mockupstudio',
    title: 'MockupStudio',
    kicker: 'Design Tooling',
    category: 'fullstack',
    description:
      'Turns any live URL into export-ready device mockups — 4 viewports at 3× DPR with pixel-perfect 4K export, on a hardened headless-Chromium capture service.',
    metric: '4 viewports @ 3× DPR → 4K export',
    tech: ['React 19', 'Vite', 'Node.js', 'Express 5', 'Puppeteer', 'Tailwind CSS'],
    link: { type: 'github', href: 'https://github.com/ube09/MockupStudio' },
  },
  {
    id: 'payerprice-compare',
    title: 'PayerPrice-Compare',
    kicker: 'Healthcare Pricing',
    category: 'fullstack',
    secondary: ['datasci', 'dataeng'],
    description:
      'Compares CPT-code negotiated rates across payers from gzipped Transparency-in-Coverage JSON, with memory-safe streaming ingestion and configurable pricing rules.',
    metric: '300MB+ streamed JSON · 6 pricing rules',
    tech: ['Python', 'Flask', 'pandas', 'ijson', 'openpyxl', 'gunicorn'],
    link: { type: 'github', href: 'https://github.com/ube09/PayerPrice-Compare' },
  },
]
