export type NowIcon = 'hammer' | 'bulb' | 'compass' | 'notebook'

export interface NowBlock {
  label: string // plain lowercase phrase, no prompt styling
  icon: NowIcon
  body: string // first-person, casual sentence
}

export const now = {
  lastUpdated: 'last_updated: oct_2026',
  blocks: [
    {
      label: "right now, I'm making",
      icon: 'hammer',
      body: 'Testing AI pick-and-place robots at Ambi Robotics, and writing up EXCA-Scan — the RC excavator I put under learned control at act-athon.',
    },
    {
      label: 'teaching myself',
      icon: 'bulb',
      body: 'Machine learning (IEOR 142A) and reproducible data science (STAT 159) this fall.',
    },
    {
      label: 'open to',
      icon: 'compass',
      body: '2027 internships in robotics test, validation, and deployment — anywhere AI meets real hardware.',
    },
  ] as NowBlock[],
}
