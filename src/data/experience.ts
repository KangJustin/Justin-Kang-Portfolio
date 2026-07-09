export interface Experience {
  org: string
  role: string
  dates: string
}

// "Experience & Involvement" — the section and its nav link stay hidden
// until this array has verified entries. Add real roles only:
//
// { org: 'Organization', role: 'Your Role', dates: 'MMM 20XX — MMM 20XX' },

export const experience: Experience[] = []
