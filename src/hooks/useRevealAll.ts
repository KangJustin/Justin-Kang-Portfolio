import { useEffect } from 'react'

// Staggered scroll-reveal matching the design handoff: every [data-reveal]
// element fades/slides in on first intersection, delayed by (i % 6) * 0.06s.
export function useRevealAll() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )
    const timer = setTimeout(() => {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el, i) => {
        const delay = (i % 6) * 0.06
        el.style.transition = `opacity .7s cubic-bezier(.2,.7,.2,1) ${delay}s, transform .7s cubic-bezier(.2,.7,.2,1) ${delay}s`
        io.observe(el)
      })
    }, 40)
    return () => {
      clearTimeout(timer)
      io.disconnect()
    }
  }, [])
}
