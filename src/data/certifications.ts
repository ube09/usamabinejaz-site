export interface Certification {
  id: string
  name: string
  issuer: string
  date?: string
  tags: string[]
  accent: string
}

export const certifications: Certification[] = [
  {
    id: 'ielts-c1',
    name: 'IELTS C1 Advanced',
    issuer: 'British Council',
    tags: ['English Proficiency', 'C1 Advanced'],
    accent: '#E31837',
  },
  {
    id: 'hackerrank-sql',
    name: 'SQL (Basic to Advanced)',
    issuer: 'HackerRank',
    date: 'Jan 2025',
    tags: ['SQL', 'Databases'],
    accent: '#00EA64',
  },
  {
    id: 'next-gen-data-science',
    name: 'Data Science',
    issuer: 'Next-Gen Analytics',
    date: 'Mar 2022',
    tags: ['Data Science', 'Analytics'],
    accent: '#F59E0B',
  },
  {
    id: 'datacamp-supervised-learning',
    name: 'Supervised Learning with Scikit-Learn',
    issuer: 'DataCamp',
    date: 'Mar 2021',
    tags: ['Machine Learning', 'scikit-learn'],
    accent: '#03EF62',
  },
  {
    id: 'datacamp-data-viz',
    name: 'Intro to Data Visualization in Python',
    issuer: 'DataCamp',
    date: 'Dec 2020',
    tags: ['Python', 'Data Visualization'],
    accent: '#03EF62',
  },
]
