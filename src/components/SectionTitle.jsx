// Tiêu đề mục dùng chung
export default function SectionTitle({ eyebrow, title, desc, center = true }) {
  return (
    <div className={`reveal max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-coral-600">
          <span className="h-px w-6 bg-coral-400" />
          {eyebrow}
          <span className="h-px w-6 bg-coral-400" />
        </span>
      )}
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ocean-900 sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {desc && <p className="mt-4 text-lg leading-relaxed text-ocean-700/80">{desc}</p>}
    </div>
  );
}
