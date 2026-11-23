export interface NowBlock {
  label: string // plain lowercase phrase, no prompt styling
  body: string // first-person, casual sentence
}

export const now = {
  blocks: [
    {
      label: "right now, I'm making",
      body: 'Testing AI pick-and-place robots at Ambi Robotics, and building Next Stop, a Mandarin education video game.',
    },
    {
      label: 'teaching myself',
      body: 'Machine learning (IEOR 142A) and reproducible data science (STAT 159) this fall.',
    },
    {
      label: 'open to',
      body: '2027 internships in robotics test, validation, and deployment — anywhere AI meets real hardware.',
    },
  ] as NowBlock[],
}
