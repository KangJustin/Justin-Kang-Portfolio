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
      body: "BridgeSF, and this website you're looking at.",
    },
    {
      label: 'teaching myself',
      icon: 'bulb',
      body: 'Intro to Python for astrophysics, and honestly loving it.',
    },
    {
      label: 'open to',
      icon: 'compass',
      body: 'Internships in software or hardware.',
    },
    {
      label: 'jotting down',
      icon: 'notebook',
      body: "Future goals — the ones I'm still figuring out.",
    },
  ] as NowBlock[],
}
