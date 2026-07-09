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
  href?: string // link to the actual paper/essay (PDF under /public or external)
}

// The archive is EMPTY by default — add entries only for real, finished
// papers. Developer template (copy, uncomment, and fill in):
//
// {
//   index: '[ 001 ]',
//   date: 'jul_2026',
//   category: 'course or research area',
//   type: 'research_brief', // essay | literary_analysis | policy_essay | analysis_note
//   title: 'Paper Title',
//   summary: 'One or two sentences on what the paper examines.',
//   takeaway: 'The single most important conclusion.',
//   tags: ['Tag', 'Tag'],
//   ctaLabel: 'Read paper ↗',
//   href: '/writing/001-paper.pdf',
// },

export const writingItems: WritingItem[] = []

// Shown in the sidebar panel once at least one item exists.
export const featuredPaper =
  writingItems.length > 0
    ? {
        item: writingItems[0],
        filename: '001_paper.md',
        excerpt: '',
      }
    : null

export const writingPage = {
  terminalPath: '~/writing',
  terminalCmd: 'ls archive',
  title: 'Research & Essays',
  subtitle:
    'A curated archive for research papers, essays, and class writing. Each entry will include a concise summary, central argument, evidence, and key takeaway.',
  includes: [
    'Thesis / central argument',
    'Why it matters',
    'Evidence & sources',
    'Key insight',
    'Takeaway',
  ],
  empty: {
    heading: 'No papers published yet.',
    body: 'I’m currently organizing selected research papers, essays, and class writing into concise summaries. Each entry will include the central argument, key evidence, limitations, and what I took away.',
    ctaLabel: 'Add first paper →',
    // Points at the data file in the repo — replace with the first real entry.
    ctaHref: 'https://github.com/KangJustin/Justin-Kang-Portfolio/blob/main/src/data/writing.ts',
  },
}

// Compact homepage callout linking to /writing.
export const writingCallout = {
  label: '// WRITING_ARCHIVE',
  title: 'Research & Essays',
  body: 'A separate archive for selected research papers, class essays, and analytical writing. Each entry will eventually include the central argument, key evidence, limitations, and takeaway.',
  ctaLabel: 'View writing archive →',
}
