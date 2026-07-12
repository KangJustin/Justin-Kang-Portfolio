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

export const writingItems: WritingItem[] = [
  {
    index: '[ 001 ]',
    date: 'jul_2026',
    category: 'digital infrastructure 101 — the hidden foundations of the internet',
    type: 'article',
    title: 'What IRIS Actually Fixed',
    summary:
      'Iceland’s third submarine cable gets the credit for the country’s swing from crypto mining to AI infrastructure. Drawing on a cable-by-cable inventory, investment records, and energy data, this piece tests how much of that credit the record actually supports.',
    takeaway:
      'IRIS removed the constraint — it didn’t create the demand. Generation and transmission now decide how far Iceland scales.',
    tags: ['Digital Infrastructure', 'Submarine Cables', 'Data Centers', 'Energy'],
    ctaLabel: 'Read article ↗',
    href: '/writing/001-what-iris-actually-fixed.pdf',
  },
  {
    index: '[ 002 ]',
    date: 'may_2026',
    category: 'creation, creativity, and origin stories in modern greek literature and film',
    type: 'literary_analysis',
    title: 'Cohesion and Collapse: Sophocles Against Freud',
    summary:
      'Freud’s Totem and Taboo argues that guilt, taboo, and the authority of the dead are the forces that found civilization. Reading Oedipus Rex and Antigone against that model, this essay tracks the same three forces through Thebes and finds them doing the opposite of what Freud predicts.',
    takeaway:
      'Freud was right about the forces — guilt, taboo, the dead — but wrong about the outcome. In Sophocles they don’t build order, they dismantle it, twice.',
    tags: ['Classics', 'Sophocles', 'Freud', 'Literary Theory'],
    ctaLabel: 'Read essay ↗',
    href: '/writing/002-cohesion-and-collapse-sophocles-against-freud.pdf',
  },
  {
    index: '[ 003 ]',
    date: 'mar_2026',
    category: 'creation, creativity, and origin stories in modern greek literature and film',
    type: 'literary_analysis',
    title: 'The Weight of Remembrance in Poem 3 of Mythistorema',
    summary:
      'A close reading of George Seferis’s Poem 3, which opens on the command “Remember the baths where you were murdered.” Tracing the poem’s shift from an unidentified second person to a private “I” holding a marble head, this essay reads memory as something imposed on the speaker rather than chosen.',
    takeaway:
      'By the poem’s end the speaker isn’t holding something broken — they are the broken thing. Seferis stages remembrance as coercive and inescapable, a burden that has to be carried alone even when the past it draws on is shared.',
    tags: ['Poetry', 'George Seferis', 'Close Reading', 'Modern Greek Literature'],
    ctaLabel: 'Read essay ↗',
    href: '/writing/003-the-weight-of-remembrance-mythistorema.pdf',
  },
  {
    index: '[ 004 ]',
    date: 'dec_2024',
    category: 'principles of sociology — xsociol 3ac',
    type: 'research_paper',
    title: 'Parenting Across Cultures: A Comparative Analysis of Asian American and European American Styles',
    summary:
      'A sociological comparison of Asian American (authoritarian) and European American (authoritative) parenting, using Chao’s concept of “training,” Kim’s racial triangulation, and cross-cultural research to argue that Western frameworks mislabel disciplined, collectivist parenting as simply harsh.',
    takeaway:
      'Neither style is superior, just differently rooted — Asian American parenting’s structure and discipline function as intentional care within a collectivist framework, not the deficit Western-centric labels like “Tiger Mom” assume.',
    tags: ['Sociology', 'Cultural Comparison', 'Parenting', 'Asian American Studies'],
    ctaLabel: 'Read paper ↗',
    href: '/writing/004-parenting-across-cultures.pdf',
  },
  {
    index: '[ 005 ]',
    date: 'may_2026',
    category: 'newspace economy — team startup investment proposal (group 3)',
    type: 'business_proposal',
    title: 'Qubital: In-Orbit Quantum Processor Fabrication',
    summary:
      'A group investment proposal (written with Group 3 teammates) pitching Qubital, a startup that 3D-nanoprints quantum processors directly in orbit to exploit microgravity, vacuum, and radiative cooling — advantages no terrestrial cleanroom can replicate. Covers technical feasibility, target markets (defense, pharma, AI), competitive positioning against incumbents like IBM and Infleqtion, and a staged revenue model.',
    takeaway:
      'Qubital’s moat isn’t better qubits — it’s the only proposal combining in-orbit fabrication with space-native operation, a category no terrestrial quantum incumbent or existing orbital-manufacturing startup currently occupies.',
    tags: ['Quantum Computing', 'Space Economy', 'Startup Strategy', 'Group Project'],
    ctaLabel: 'Read proposal ↗',
    href: '/writing/005-qubital-newspace-economy-proposal.pdf',
  },
  {
    index: '[ 006 ]',
    date: 'sep_2024',
    category: 'audiobiography — musically expressing group identities',
    type: 'personal_essay',
    title: 'Audiobiography: Musically Expressing Group Identities',
    summary:
      'A personal reflection told through three songs, each tied to a group identity: “Eye of the Tiger” and the running community built through marathon training, “Still D.R.E.” and the West Coast hip-hop culture that bridged a childhood in Korea to Central LA, and “Way Back Then” (from Squid Game) and pride in Korean culture reaching a global audience.',
    takeaway:
      'Music doesn’t just soundtrack identity — it does the work of belonging, bridging communities (a marathon field, a new city, a home culture) faster than shared language or background ever could.',
    tags: ['Personal Essay', 'Identity', 'Music', 'Immigration'],
    ctaLabel: 'Read essay ↗',
    href: '/writing/006-audiobiography-musically-expressing-group-identities.pdf',
  },
  {
    index: '[ 007 ]',
    date: 'mar_2024',
    category: 'IB History HL — internal assessment',
    type: 'research_paper',
    title: 'To What Extent Was the Rodney King Incident the Main Contributor for the LA Riots?',
    summary:
      'An IB History Internal Assessment weighing the 1991 Rodney King beating against LAPD-community tensions, Korean-Black community conflict, and judicial discrepancies (the Simi Valley venue, the all-white jury, the Soon Ja Du verdict) as causes of the 1992 Los Angeles riots.',
    takeaway:
      'The beating was a catalyst, not the root cause — systemic discrepancies in the judicial system, layered on years of LAPD violence and Korean-Black tension, did the most to make the riots inevitable.',
    tags: ['History', 'IB IA', 'Los Angeles Riots', 'Civil Rights'],
    ctaLabel: 'Read paper ↗',
    href: '/writing/007-rodney-king-la-riots.pdf',
  },
]

// Shown in the sidebar panel once at least one item exists.
export const featuredPaper =
  writingItems.length > 0
    ? {
        item: writingItems[0],
        filename: '001_what_iris_actually_fixed.md',
        excerpt:
          'Iceland’s third cable gets the credit for the country’s swing from crypto to AI infrastructure. The record supports something narrower, and points at the grid.',
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
