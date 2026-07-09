export interface SkillGroup {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  { title: 'languages/', items: ['Python', 'JavaScript', 'SQL / MySQL'] },
  { title: 'data_stack/', items: ['Pandas', 'NumPy', 'Matplotlib', 'Jupyter'] },
  { title: 'ai_backend/', items: ['Gemini', 'Claude', 'FastAPI', 'APIs'] },
  { title: 'tools/', items: ['Git', 'Vercel', 'Figma', 'CAD'] },
]
