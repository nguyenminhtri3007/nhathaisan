import Eyebrow from "./Eyebrow";

// Tiêu đề mục dùng chung
export default function SectionTitle({ eyebrow, title, desc, center = true }) {
  return (
    <div className={`reveal max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow className="text-coral-600">{eyebrow}</Eyebrow>}
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ocean-900 sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {desc && <p className="mt-4 text-lg leading-relaxed text-ocean-700/80">{desc}</p>}
    </div>
  );
}
