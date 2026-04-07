import { Brain, Database, Code2 } from 'lucide-react'

export const services = [
  {
    icon: Brain,
    title: 'AI/ML Engineering',
    description: 'Production AI systems — not just notebooks.',
    bullets: [
      'LLM applications (RAG, agents, chatbots)',
      'ML models (forecasting, anomaly detection, NLP, CV)',
      'AI product development (end-to-end)',
    ],
    tools: ['Python', 'TensorFlow', 'PyTorch', 'LangGraph', 'OpenAI', 'Pinecone'],
  },
  {
    icon: Database,
    title: 'Data Engineering & Analytics',
    description: 'Pipelines that don\'t break at 3 AM.',
    bullets: [
      'ETL/ELT pipelines (Airflow, PySpark, dbt)',
      'Data warehousing (BigQuery, Redshift)',
      'BI dashboards (Power BI, Tableau, Recharts)',
    ],
    tools: ['SQL', 'AWS', 'GCP', 'FastAPI', 'Airflow', 'BigQuery'],
  },
  {
    icon: Code2,
    title: 'Full-Stack Products',
    description: 'I build the app around the model.',
    bullets: [
      'Web apps (Next.js, React, TypeScript)',
      'Mobile apps (React Native, Expo)',
      'Desktop apps (Electron)',
    ],
    tools: ['Next.js', 'React Native', 'TypeScript', 'PostgreSQL', 'Prisma', 'Electron'],
  },
]

export const processSteps = [
  { step: 1, title: 'Discovery', description: 'Understand your problem, data, and goals.' },
  { step: 2, title: 'Design', description: 'Architecture, tech stack, and timeline.' },
  { step: 3, title: 'Build', description: 'Iterative development with deployable increments.' },
  { step: 4, title: 'Ship', description: 'Deploy, test, document, hand off.' },
]
