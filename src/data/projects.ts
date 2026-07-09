export interface Project {
  title: string
  description: string
  tags: string[]
  // Thumbnail: a glyph tile, or a real 88x64 screenshot under /public.
  thumb: { kind: 'glyph-dark' | 'glyph-light'; glyphText: string } | { kind: 'image'; image: string }
  // Optional filmstrip of real product screenshots shown under the card.
  gallery?: string[]
  link?: string
}

export const projects: Project[] = [
  {
    title: 'UrbanPilot',
    description:
      'AI urban-planning copilot — four Claude agents analyze any address across climate, housing, and accessibility, then render AI-generated 2040/2075 streetscapes.',
    tags: ['React', 'Node', 'Claude'],
    thumb: { kind: 'image', image: '/projects/urbanpilot-icon.png' },
    gallery: [
      '/projects/urbanpilot-pre-analysis.jpg',
      '/projects/urbanpilot-analysis.jpg',
      '/projects/urbanpilot-streetscape.jpg',
    ],
    link: 'https://github.com/KangJustin/urbanpilot',
  },
  {
    title: 'BarelyAtWork',
    description:
      'Voice-powered automation engine — speak one command and it builds and runs a validated multi-app workflow across Gmail, Slack, Calendar, and 12+ other integrations.',
    tags: ['Kotlin', 'FastAPI', 'Gemma'],
    thumb: { kind: 'glyph-light', glyphText: 'b' },
    link: 'https://github.com/trigtbh/lahacks-26',
  },
]
