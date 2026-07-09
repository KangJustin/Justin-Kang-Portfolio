export interface SkillGroup {
  label: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend',
    skills: ['React', 'TypeScript', 'Vite', 'HTML', 'CSS'],
  },
  {
    label: 'Backend / Data',
    skills: ['Supabase', 'SQL', 'APIs'],
  },
  {
    label: 'Tools',
    skills: ['Git', 'GitHub', 'Figma', 'Vercel'],
  },
  {
    label: 'Exploring',
    skills: ['AI tools', 'Full-stack architecture', 'Product design', 'Finance'],
  },
]
