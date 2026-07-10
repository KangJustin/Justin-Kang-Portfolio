export interface ProjectLink {
  label: string
  href: string
  primary?: boolean
}

export interface Project {
  index: string // e.g. '[ 001 ] · jun_2026'
  title: string
  tags: string[]
  desc: string
  proof: string
  windowTitle: string // filename shown in the preview window's title bar
  // Preview panel inside the window frame: a real screenshot (16:10 crop)
  // or one of the hand-built CSS mocks ('flux' | 'skyline').
  preview:
    | { kind: 'image'; src: string }
    | { kind: 'mock'; mock: 'flux' | 'skyline' | 'urbanpilot' }
  // Only real URLs — add 'Demo ↗' / 'Writeup ↗' entries when they exist.
  links: ProjectLink[]
  // Route of the full case-study page (e.g. '/projects/urbanpilot').
  caseStudy?: string
}

export const projects: Project[] = [
  {
    index: '[ 001 ] · jun_2026',
    title: 'UrbanPilot',
    tags: ['Multi-agent AI', 'Python', 'Data pipelines', 'Public datasets'],
    desc: 'Multi-agent AI system that runs parallel scenario analyses — climate, housing, accessibility, urban design — for any real address.',
    proof:
      'Integrates + cleans 6 data sources: Census ACS, FEMA, Open-Meteo, Transit 511, Google Maps. Supports multi-variable sensitivity analysis across planning dimensions.',
    windowTitle: 'urbanpilot — scenario_dashboard',
    preview: { kind: 'mock', mock: 'urbanpilot' },
    links: [{ label: 'Code ↗', href: 'https://github.com/KangJustin/urbanpilot' }],
    caseStudy: '/projects/urbanpilot',
  },
  {
    index: '[ 002 ] · apr_2026',
    title: 'BarelyAtWork / Flux',
    tags: ['Voice AI', 'Gemini', 'Workflow JSON', '12+ integrations'],
    desc: 'Voice-first automation platform on Meta Ray-Ban glasses — one spoken command triggers multi-step workflows across 12+ services, including Gmail, Slack, Notion, and Fetch.ai Agentverse.',
    proof:
      'Constrained Gemini pipeline with a validate → repair loop converts voice transcripts into structured workflow JSON and eliminates invalid parameters.',
    windowTitle: 'flux — voice_to_workflow',
    preview: { kind: 'mock', mock: 'flux' },
    links: [{ label: 'Code ↗', href: 'https://github.com/trigtbh/lahacks-26' }],
    caseStudy: '/projects/flux',
  },
  {
    index: '[ 003 ] · apr_2025',
    title: 'Skyline Transport',
    tags: ['CAD', 'Trade-off analysis', 'ISO 14644'],
    desc: 'Modular overhead gantry and cart system for semiconductor cleanroom material handling, co-designed to ISO 14644 standards. 2nd place, ASME UC Berkeley CADathon Spring 2025.',
    proof:
      'Trade-off analysis across layout alternatives; materials selected within a $2,300 BOM to meet cleanroom and conveyance requirements.',
    windowTitle: 'skyline_transport — assembly_dwg_03',
    preview: { kind: 'mock', mock: 'skyline' },
    links: [{ label: 'Writeup ↗', href: '/skyline-transport-writeup.pdf' }],
    caseStudy: '/projects/skyline',
  },
]
