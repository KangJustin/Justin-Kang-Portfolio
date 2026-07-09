export interface WritingItem {
  index: string // '[ 001 ]'
  date: string // 'jul_2026'
  category: string
  type: string // snake_case, e.g. 'research_brief'
  title: string
  summary: string
  takeaway: string
  tags: string[]
  ctaLabel: string // 'Read paper ↗' | 'Read essay ↗' | 'Read analysis ↗'
  // Placeholder until the actual paper/essay is uploaded — set to a real
  // URL (e.g. '/writing/001-ai-in-education.pdf') when available.
  href?: string
}

export const writingItems: WritingItem[] = [
  {
    index: '[ 001 ]',
    date: 'jul_2026',
    category: 'education research',
    type: 'research_brief',
    title: 'AI in Education and Workforce Readiness',
    summary:
      'Examines how AI tools are reshaping student skill development, project-based learning, and early-career readiness.',
    takeaway:
      'AI is most effective when it supports feedback loops, not when it replaces student reasoning.',
    tags: ['AI', 'Education', 'Workforce'],
    ctaLabel: 'Read paper ↗',
  },
  {
    index: '[ 002 ]',
    date: 'jun_2026',
    category: 'gender, race, nation, and health',
    type: 'essay',
    title: 'Health, Social Space, and Structural Inequality',
    summary:
      'Explores how race, gender, class, and place shape access to health and produce unequal outcomes across institutions.',
    takeaway:
      'Inequality is produced by both systems and the spatial geographies that embed them.',
    tags: ['Public Health', 'Inequality', 'Social Science'],
    ctaLabel: 'Read essay ↗',
  },
  {
    index: '[ 003 ]',
    date: 'may_2026',
    category: 'literature',
    type: 'literary_analysis',
    title: 'Power, Voice, and Survival in Their Eyes Were Watching God',
    summary:
      'A close reading of Janie’s journey as an act of narrative reclamation and the pursuit of self-definition.',
    takeaway: 'Janie’s story reframes autonomy as both resistance and renewal.',
    tags: ['Literature', 'Modernism', 'Black Studies'],
    ctaLabel: 'Read analysis ↗',
  },
  {
    index: '[ 004 ]',
    date: 'apr_2026',
    category: 'urban systems',
    type: 'analysis_note',
    title: 'Urban Data, Climate Risk, and Public Planning',
    summary:
      'Analyzes how public datasets can guide equitable climate planning across housing, infrastructure, and emergency response.',
    takeaway: 'Data-driven planning works best when it centers community context and capacity.',
    tags: ['Urban Planning', 'Data', 'Climate'],
    ctaLabel: 'Read paper ↗',
  },
  {
    index: '[ 005 ]',
    date: 'mar_2026',
    category: 'international environmental law',
    type: 'policy_essay',
    title: 'Treaty Interpretation and Climate Governance',
    summary:
      'Argues for a dynamic, context-informed approach to interpreting climate treaties in a rapidly changing world.',
    takeaway: 'Legal interpretation must evolve with science and intergenerational equity.',
    tags: ['International Law', 'Climate Policy', 'Governance'],
    ctaLabel: 'Read essay ↗',
  },
]

export const featuredPaper = {
  item: writingItems[0],
  filename: '001_AI_in_Education.md',
  excerpt:
    'AI tools are changing how students practice, get feedback, and build early-career skills. The question is not whether to use them, but where they belong in the learning loop.',
}

export const writingPage = {
  terminalPath: '~/writing',
  terminalCmd: 'ls archive',
  title: 'Research & Essays',
  subtitle:
    'A curated space to showcase research papers, essays, and class writing. Each piece includes a concise summary, central argument, evidence, and key takeaway.',
  includes: [
    'Thesis / central argument',
    'Why it matters',
    'Evidence & sources',
    'Key insight',
    'Takeaway',
  ],
}
