export function SectionHead({ title, meta }: { title: string; meta?: string }) {
  return (
    <div className="sec-head">
      <h2 className="sec-title">{title}</h2>
      <div className="sec-rule" />
      {meta && <span className="sec-meta">{meta}</span>}
    </div>
  )
}
