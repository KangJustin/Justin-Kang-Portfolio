// About page: the opening paragraph and the Education block.
// "Now" lives in now.ts and "Skills" in skills.ts.

export const aboutBio =
  "I like problems where software has to survive contact with real hardware. Lately, that's meant testing pick-and-place robotics systems at Ambi Robotics, an award-winning agentic iOS safety app, and a multi-agent urban planning system built on six public datasets."

export const education = {
  school: 'UC Berkeley',
  details: ['Data Science + IEOR', 'Expected May 2028'],
}

// Photo grid at the bottom of the About page. Captions are short and
// shown under each photo; alt text describes the photo for screen readers.
export const photos = [
  {
    src: '/photos/flux-glasses.jpg',
    alt: 'Justin wearing Meta Ray-Ban glasses, tapping the frame to give a voice command',
    caption: 'Testing Flux on Meta Ray-Bans, LA Hacks 2026',
  },
  {
    src: '/photos/asme-cadathon.jpg',
    alt: 'Justin and a teammate holding up ASME CADathon award gears',
    caption: '2nd place, ASME CADathon, Spring 2025',
  },
  {
    src: '/photos/yls-2024.jpg',
    alt: 'Justin with four other summit leaders holding certificates of recognition',
    caption: 'Young Leaders Summit, USC 2024',
  },
  {
    src: '/photos/yls-2025.jpg',
    alt: 'Justin kneeling front and center with his squad at the 2025 Young Leaders Summit',
    caption: 'My squad at the Young Leaders Summit, Princeton 2025',
  },
  {
    src: '/photos/downtown-magnets.jpg',
    alt: 'Justin at a podium on stage, with Downtown Magnets High School on the screen behind him',
    caption: 'Downtown Magnets High School',
  },
]
