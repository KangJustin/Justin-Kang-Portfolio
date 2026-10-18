export interface SkillGroup {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  { title: 'languages/', items: ['Python', 'JavaScript', 'Swift', 'SQL / MySQL'] },
  { title: 'robotics_test/', items: ['Robot policy evaluation', 'Franka Emika', 'Grafana', 'Jira', 'Asana', 'ESP32', 'ArUco calibration'] },
  { title: 'data_stack/', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter'] },
  { title: 'ai_backend/', items: ['Claude', 'Gemini', 'FastAPI', 'Node.js', 'React', 'PostgreSQL', 'SQLAlchemy', 'Alembic'] },
  { title: 'tools/', items: ['Git', 'Linux', 'Vercel', 'Figma', 'SwiftUI', 'Xcode', 'DigitalOcean'] },
]
