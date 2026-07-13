export interface SkillGroup {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  { title: 'languages/', items: ['Python', 'JavaScript', 'Swift', 'SQL / MySQL'] },
  { title: 'data_stack/', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'scikit-learn', 'Jupyter'] },
  { title: 'ai_backend/', items: ['Gemini', 'Claude', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Alembic'] },
  { title: 'tools/', items: ['Git', 'Vercel', 'Figma', 'CAD', 'SwiftUI', 'Xcode', 'DigitalOcean'] },
]
