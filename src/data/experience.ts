export interface Experience {
  dates: string
  loc: string
  org: string
  role: string
  summary: string
}

// Verified entries from Justin's resume (July 2026). Most recent first.

export const experience: Experience[] = [
  {
    dates: 'oct_2024 — may_2026',
    loc: 'berkeley, ca',
    org: 'Berkeley AI Research — Robotic AI & Learning Lab',
    role: 'Undergraduate Research Assistant',
    summary:
      'Designed and ran measurement studies across 15+ experimental configurations, isolating performance factors and failure modes. A/B-tested ML policy variants to quantify trade-offs, and processed large-scale operational datasets in Python/Pandas for engineering stakeholders.',
  },
  {
    dates: 'jul_2024 — aug_2024',
    loc: 'inglewood, ca',
    org: 'Los Angeles Rams (NFL)',
    role: 'Football Operations Intern',
    summary:
      'Managed training camp operations for 4,000+ attendees, coordinating logistics against team and fan-engagement goals. Streamlined internal workflows by communicating across executive, coaching, and event stakeholders.',
  },
  {
    dates: 'aug_2020 — apr_2024',
    loc: 'los angeles, ca',
    org: 'MustemUSA (eBay Store)',
    role: 'Founder',
    summary:
      'Managed pricing, inventory, and fulfillment for an e-commerce resale business generating $100K+ in revenue. Scaled to international markets while sustaining 100% positive feedback and eBay Top-Rated Seller status.',
  },
  {
    dates: 'may_2024 — may_2026',
    loc: 'hybrid',
    org: 'Hispanic Scholarship Fund',
    role: 'YLS Scholar Squad Leader · College Consultant',
    summary:
      'Mentored 15+ high school seniors one-on-one across two application cycles; facilitated operations at the 2024 USC and 2025 Princeton Young Leaders Summits. Mentees admitted to Yale, Columbia, Brown, Tufts (QuestBridge), USC, WashU, and UC Berkeley, including a Gates Scholarship recipient.',
  },
]
