export interface SkillGroup {
  label: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Generative AI / LLM',
    items: [
      'OpenAI (GPT-4o)', 'Gemini', 'Llama 3.2 Vision', 'Mistral 7B', 'LangGraph',
      'LangChain', 'RAG', 'Pinecone', 'FAISS', 'Prompt Engineering',
      'Multi-Agent Orchestration',
    ],
  },
  {
    label: 'Computer Vision',
    items: [
      'YOLOv5–v11', 'Detectron2', 'OpenCV', 'CLIP', 'OWL-ViT',
      'DeepSORT / SORT', 'OCR (Tesseract)', 'Segmentation', 'Stereo Vision', 'ONNX',
    ],
  },
  {
    label: 'ML / Data Science',
    items: [
      'PyTorch', 'TensorFlow', 'scikit-learn', 'ARIMA', 'Prophet',
      'Anomaly Detection', 'Clustering', 'Recommendation Systems',
      'Model Fine-Tuning & Evaluation',
    ],
  },
  {
    label: 'Data Engineering',
    items: [
      'Airflow', 'PySpark', 'dbt', 'ETL/ELT', 'BigQuery',
      'Redshift', 'AWS Lambda', 'Streaming (ijson)',
    ],
  },
  {
    label: 'Languages',
    items: ['Python', 'SQL', 'TypeScript', 'JavaScript', 'C++', 'C#'],
  },
  {
    label: 'Web / Cloud / DevOps',
    items: [
      'FastAPI', 'Flask', 'Next.js', 'React', 'React Native', 'Electron',
      'AWS', 'GCP', 'Azure', 'PostgreSQL', 'MySQL', 'MongoDB',
      'Docker', 'Git', 'GitHub Actions', 'Render', 'Vercel',
      'Power BI', 'Tableau',
    ],
  },
]
