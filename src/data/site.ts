export const site = {
  name: 'Justin Kang',
  wordmark: 'justin‑kang.vercel.app', // non-breaking hyphen per design
  terminalPath: '~/berkeley',
  terminalCmd: 'whoami',
  statusTags: [
    { text: '[ BERKELEY, CA ]', accent: false },
    { text: '[ DATA SCIENCE + INDUSTRIAL ENGINEERING ]', accent: false },
    { text: '[ ● OPEN TO SOFTWARE · AI · DATA ROLES ]', accent: true },
  ],
  tagline: 'I build full-stack AI tools, data products, and practical software systems.',
  heroBody:
    "Lately, that's meant an award-winning agentic iOS safety app and a multi-agent urban planning system built on six public datasets.",
  email: 'justin-kang@berkeley.edu',
  // Set once verified (graduation month/year + internship-search term/year)
  // e.g. 'Data Science + Industrial Engineering · Expected May 2027 · Seeking Summer 2027 software or ML engineering internships.'
  // Left unset rather than a placeholder -- the hero omits the line entirely until this is filled in.
  gradInternshipLine: undefined as string | undefined,
  links: {
    github: 'https://github.com/KangJustin',
    linkedin: 'https://www.linkedin.com/in/justinkang06',
    resume: '/resume.pdf',
  },
  resumeMeta: '1 page · updated jul_2026',
}
