export interface ExperienceEntry {
  company: string
  location: string
  dates: string
  role: string
  bullets: string[]
  tech: string[]
}

export interface EducationEntry {
  degree: string
  institution: string
  location: string
  dates: string
}

export const experience: ExperienceEntry[] = [
  {
    company: 'AiGenix',
    location: 'Karachi, Pakistan',
    dates: 'Jun 2026 — Present',
    role: 'Data Scientist',
    bullets: [
      'Deliver client AI solutions with a computer-vision focus, from model development through deployment.',
      'Built a cross-platform mobile app (iOS + Android) with a connected web portal for an AI-powered client solution.',
    ],
    tech: ['Python', 'Computer Vision', 'Mobile (iOS/Android)', 'Web'],
  },
  {
    company: 'UBE Labs',
    location: 'Karachi, Pakistan',
    dates: '2026 — Present',
    role: 'Founder',
    bullets: [
      'Independent AI lab — "AI that ships." Product design, engineering, and deployment end-to-end.',
      'Shipped NeuroMail, an AI email command center with LangGraph multi-agent triage, drafting, and local Mistral 7B summarization.',
      'Shipped Nexus, a cross-platform team-collaboration suite (web + mobile) with real-time chat, RBAC, and push notifications.',
    ],
    tech: ['Electron', 'FastAPI', 'LangGraph', 'Mistral 7B', 'Next.js', 'React Native', 'PostgreSQL'],
  },
  {
    company: 'Freelance',
    location: 'Remote',
    dates: '2022 — Present',
    role: 'AI/ML Engineer — independent & collaborative client projects',
    bullets: [
      'Deliver computer-vision and LLM systems for international clients across conservation, infrastructure, logistics, and healthcare.',
      'Highlights: endangered-species detection (~97% mAP@50), geospatial road-damage detection for a Dutch municipal road authority, license-plate access control for an Amsterdam logistics warehouse, and a biomarker lab-report insights API.',
    ],
    tech: ['YOLO', 'OpenCV', 'PyTorch', 'FastAPI', 'OpenAI', 'Streamlit'],
  },
  {
    company: 'Dellsons Associates',
    location: 'Karachi, Pakistan',
    dates: 'Oct 2025 — Apr 2026',
    role: 'Data Scientist',
    bullets: [
      'Led AI/ML delivery on a compressed product roadmap — shipped 4 production systems in 7 months across enterprise products.',
      'Built NeuroMail V3, an AI email command center with LangGraph multi-agent orchestration and local Mistral 7B summarization, reducing manual email-processing time ~60% for a 50-person org.',
      'Architected a cross-platform team-collaboration suite (web + mobile) with real-time chat, RBAC, and push notifications, consolidating 3 tools into one for 30+ daily active users.',
      'Built a RAG document Q&A system with Pinecone vector search and source attribution across 10K+ documents, cutting research time from hours to minutes.',
      'Delivered a BI & compliance dashboard with dynamic scoring and automated Excel reporting, eliminating 20+ hours/month of manual compliance tracking.',
    ],
    tech: ['Python', 'FastAPI', 'LangGraph', 'Pinecone', 'Mistral 7B', 'Electron', 'Next.js', 'React Native'],
  },
  {
    company: 'Zapdas Technologies',
    location: 'Karachi, Pakistan',
    dates: 'Mar 2022 — Sep 2025',
    role: 'AI/ML Engineer',
    bullets: [
      'Owned the full ML lifecycle across two SaaS products (e-commerce + staff management): development, pipeline architecture, deployment, and monitoring.',
      'Deployed time-series forecasting (ARIMA, Prophet), anomaly detection, and recommendation systems, delivering 20% forecasting-accuracy improvement, 18% fraud reduction, and 30% engagement lift.',
      'Pioneered LLM-powered invoice extraction using Llama 3.2 Vision, achieving 85% accuracy (30% above OCR) and automating 500+ invoices/month.',
      'Architected production data infrastructure: metadata-driven ingestion into BigQuery, an AWS data lake (Redshift, Lambda), and automated ETL, reducing manual workload 20%.',
      'Built AI chatbots (OpenAI) that improved resolution time 25%, plus predictive HR and geospatial workforce models that cut operational inefficiencies 15%.',
    ],
    tech: ['Python', 'BigQuery', 'AWS', 'Prophet', 'TensorFlow', 'Llama 3.2 Vision', 'Airflow', 'FastAPI'],
  },
  {
    company: 'TDK Electronics',
    location: 'Munich, Germany',
    dates: 'Mar 2024 — Aug 2024',
    role: 'Data Analyst (Work Student)',
    bullets: [
      'Built Prophet-based forecasting models for electronic-component failure prediction, improving inventory planning and reducing stockouts.',
      'Designed interactive Excel and Tableau dashboards and delivered insights to senior stakeholders and external clients.',
    ],
    tech: ['Python', 'Prophet', 'Tableau', 'Excel'],
  },
  {
    company: 'Swvl',
    location: 'Karachi, Pakistan',
    dates: 'Sep 2021 — Feb 2022',
    role: 'Data Analyst Intern',
    bullets: [
      'Built demand-forecasting and geospatial fleet-optimization models, reducing idle time 10% and improving ride availability 14%.',
      'Developed a predictive complaint-classification system that cut escalation rates 24%.',
      'Automated cross-platform reporting (Google Sheets, BigQuery, Power BI, Metabase), boosting operational efficiency 15%.',
    ],
    tech: ['Python', 'BigQuery', 'Power BI', 'Metabase', 'Google Sheets'],
  },
]

export const education: EducationEntry[] = [
  {
    degree: 'MS in Artificial Intelligence & Data Science',
    institution: 'Deggendorf Institute of Technology',
    location: 'Deggendorf, Germany',
    dates: 'Mar 2023 — Aug 2024',
  },
  {
    degree: 'BS in Computer Science',
    institution: 'FAST-NUCES (National University of Computer & Emerging Sciences)',
    location: 'Karachi, Pakistan',
    dates: 'Aug 2018 — Jun 2022',
  },
]
