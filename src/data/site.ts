export const site = {
  name: 'Justin Kang',
  wordmark: 'justinkang.dev',
  tagline: 'UC Berkeley student building practical software, data tools, and student projects.',
  heroBody:
    'I’m interested in software, AI, data, finance, and product. I like building useful tools, learning by shipping, and turning rough ideas into clean, working systems.',
  email: 'justin-kang@berkeley.edu',
  links: {
    github: 'https://github.com/KangJustin',
    linkedin: 'https://www.linkedin.com/in/justinkang06',
    resume: '/resume.pdf', // drop resume.pdf into /public
  },
  // Proof of Work card in the hero. `count` stays undefined until you have
  // real numbers — the card renders an em dash instead of a made-up figure.
  proofOfWork: [
    { label: 'Projects shipped', count: undefined as number | string | undefined },
    { label: 'GitHub repos', count: undefined as number | string | undefined },
    { label: 'Live demos', count: undefined as number | string | undefined },
    { label: 'Technical writeups', count: undefined as number | string | undefined },
  ],
}
