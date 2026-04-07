export interface Project {
  id: string
  title: string
  subtitle: string
  challenge: string
  approach: string
  results: { label: string; value: number; suffix: string }[]
  tech: string[]
  heroImage: string
  screenshots: string[]
}

export const projects: Project[] = [
  {
    id: 'ecommerce-ml',
    title: 'E-commerce Analytics & ML Platform',
    subtitle: 'End-to-end ML and analytics for an e-commerce platform',
    challenge: 'An e-commerce company needed better demand forecasting, fraud detection, and automated document processing to scale their operations.',
    approach: 'Built a comprehensive ML system: time-series forecasting with Prophet/ARIMA, anomaly detection on transaction data, LLM-powered invoice extraction using Llama 3.2 Vision, and a recommendation engine. Designed metadata-driven ETL pipelines feeding into BigQuery.',
    results: [
      { label: 'Forecast Accuracy', value: 20, suffix: '%' },
      { label: 'Fraud Reduction', value: 18, suffix: '%' },
      { label: 'Invoice Extraction', value: 85, suffix: '%' },
      { label: 'Engagement Boost', value: 30, suffix: '%' },
    ],
    tech: ['Python', 'BigQuery', 'AWS', 'FastAPI', 'TensorFlow', 'Prophet', 'OpenAI'],
    heroImage: '/images/ecommerce/ecommerceandml.webp',
    screenshots: ['/images/ecommerce/ecommercebasic.webp'],
  },
  {
    id: 'neuromail',
    title: 'AI-Powered Email Assistant',
    subtitle: 'Desktop app with LangGraph agent orchestration',
    challenge: 'Email overload kills productivity. Users needed an intelligent assistant that could triage, draft, and track emails automatically — not just filter spam.',
    approach: 'Built a desktop application (Electron + React) with a Python/FastAPI backend. Orchestrated 4 AI agents via LangGraph for email triage, draft generation, follow-up tracking, and contact extraction. Integrated directly with Gmail SDK.',
    results: [
      { label: 'AI Agents', value: 4, suffix: '' },
      { label: 'Email Providers', value: 2, suffix: '' },
      { label: 'Features Shipped', value: 7, suffix: '+' },
      { label: 'Licensing Tiers', value: 3, suffix: '' },
    ],
    tech: ['Electron', 'React', 'FastAPI', 'LangGraph', 'OpenAI', 'spaCy', 'Gmail SDK'],
    heroImage: '/images/neuromail/neuromail-draft.webp',
    screenshots: [
      '/images/neuromail/neuromail-dashboard.webp',
      '/images/neuromail/neuromail-labelsuggestion.webp',
      '/images/neuromail/neuromail-contacts.webp',
    ],
  },
  {
    id: 'bi-dashboard',
    title: 'Business Intelligence & Compliance Dashboard',
    subtitle: 'Analytics platform for property valuation industry',
    challenge: 'A property valuation company needed to track enlistment criteria, bank relationships, and financial metrics across multiple dimensions — with automated compliance scoring.',
    approach: 'Built a Next.js dashboard with dynamic WAS scoring algorithms, multi-dimensional analytics (yearly, by bank, by city), 4 automated Excel report templates, and interactive visualizations using Recharts.',
    results: [
      { label: 'Report Templates', value: 4, suffix: '' },
      { label: 'Analytics Views', value: 6, suffix: '+' },
      { label: 'Bank Partners Tracked', value: 12, suffix: '+' },
      { label: 'Scoring Algorithms', value: 3, suffix: '' },
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'XLSX'],
    heroImage: '/images/bi-dashboard/bi-dashboard.webp',
    screenshots: ['/images/bi-dashboard/bi-dashboard-dark.webp'],
  },
  {
    id: 'nexus',
    title: 'Team Collaboration Platform',
    subtitle: 'Cross-platform web + mobile app for teams',
    challenge: 'A company needed a unified platform for task management, team communication, and project tracking — accessible on both web and mobile with real-time sync.',
    approach: 'Architected a monorepo with Next.js 16 (web) and React Native/Expo (mobile). Built JWT auth with RBAC, real-time chat with @mentions, push notifications, task management with recurring tasks and priorities, and role-based dashboards.',
    results: [
      { label: 'DB Models', value: 14, suffix: '' },
      { label: 'Platforms', value: 3, suffix: '' },
      { label: 'Core Features', value: 10, suffix: '+' },
      { label: 'Auth Roles', value: 4, suffix: '' },
    ],
    tech: ['Next.js', 'React Native', 'Expo', 'PostgreSQL', 'Prisma', 'Socket.io', 'TypeScript'],
    heroImage: '/images/nexus/nexus-dashboard.webp',
    screenshots: [
      '/images/nexus/nexus-chatthread.webp',
      '/images/nexus/nexus-tasklist.webp',
      '/images/nexus/nexus-reports.webp',
    ],
  },
]
