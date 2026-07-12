export type NowIcon = 'hammer' | 'bulb' | 'compass' | 'notebook'

export interface NowBlock {
  label: string // plain lowercase phrase, no prompt styling
  icon: NowIcon
  body: string // first-person, casual sentence
}

export const now = {
  lastUpdated: 'last_updated: jul_2026',
  blocks: [
    {
      label: "right now, I'm making",
      icon: 'hammer',
      body: "Fresh off building BuzzBuddy at an MLH × DigitalOcean hackathon — now polishing this website you're looking at.",
    },
    {
      label: 'teaching myself',
      icon: 'bulb',
      body: 'A summer course learning about Python for astrophysics.',
    },
    {
      label: 'open to',
      icon: 'compass',
      body: 'Internships in software or hardware, learning more about culture, and developing new skills.',
    },
  ] as NowBlock[],
}
