export const site = {
  name: 'Justin Kang',
  wordmark: 'justin‑kang.vercel.app', // non-breaking hyphen per design
  terminalPath: '~/berkeley',
  terminalCmd: 'whoami',
  statusTags: [
    { text: '[ BERKELEY, CA ]', accent: false },
    { text: '[ DATA SCIENCE + INDUSTRIAL ENGINEERING ]', accent: false },
    { text: '[ ● OPEN TO ROBOTICS · TEST · AI ROLES ]', accent: true },
  ],
  tagline: 'I test, integrate, and build robots — and I care most about finding out why they fail.',
  heroBody:
    "Right now that's QA on AI-powered pick-and-place robots at Ambi Robotics. Before that, 20 months benchmarking robot learning policies at Berkeley AI Research — and on the side, an RC excavator I put under learned control.",
  email: 'justin-kang@berkeley.edu',
  // Set once verified (graduation month/year + internship-search term/year)
  // e.g. 'Data Science + Industrial Engineering · Expected May 2027 · Seeking Summer 2027 software or ML engineering internships.'
  // Left unset rather than a placeholder -- the hero omits the line entirely until this is filled in.
  gradInternshipLine: 'Data Science + IEOR · Expected May 2028 · Seeking 2027 robotics test, validation & deployment internships.' as string | undefined,
  links: {
    github: 'https://github.com/KangJustin',
    linkedin: 'https://www.linkedin.com/in/justinkang06',
    resume: '/resume.pdf',
    portfolio: '/justin-kang-engineering-portfolio.pdf',
  },
}
