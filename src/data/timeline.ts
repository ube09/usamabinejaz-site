export interface TimelineEntry {
  period: string
  title: string
  company: string
  location: string
  description: string
}

export const timeline: TimelineEntry[] = [
  {
    period: 'Oct 2025 — Present',
    title: 'Lead Data Scientist',
    company: 'Dellsons Associates',
    location: 'Karachi, Pakistan',
    description: 'Leading AI/ML initiatives. Built RAG document Q&A, AI email assistant, team collaboration platform, and BI dashboards.',
  },
  {
    period: 'Mar 2022 — Sep 2025',
    title: 'AI/ML Engineer',
    company: 'Zapdas Technologies',
    location: 'Karachi, Pakistan',
    description: 'Built ML models, data pipelines, and AI features for e-commerce and HR SaaS products. Forecasting, anomaly detection, LLM integration.',
  },
  {
    period: 'Mar 2024 — Aug 2024',
    title: 'Data Analyst (Work Student)',
    company: 'TDK Electronics',
    location: 'Munich, Germany',
    description: 'Built forecasting models for component failure prediction. Interactive dashboards with Tableau.',
  },
  {
    period: 'Sep 2021 — Feb 2022',
    title: 'Data Analyst Intern',
    company: 'Swvl',
    location: 'Karachi, Pakistan',
    description: 'Demand forecasting, complaint classification, geospatial analysis. Built dashboards for fleet optimization.',
  },
]

export const education = [
  {
    degree: 'MS in Artificial Intelligence & Data Science',
    school: 'Deggendorf Institute of Technology',
    location: 'Germany',
    period: '2023 — 2024',
  },
  {
    degree: 'BS in Computer Science',
    school: 'FAST-NUCES',
    location: 'Pakistan',
    period: '2018 — 2022',
  },
]
