// Nhãn nhỏ phía trên tiêu đề, dạng "── Nhãn ──".
// lines="both" (mặc định) có gạch hai bên; lines="left" chỉ gạch bên trái.
export default function Eyebrow({ children, className = "", lines = "both" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] ${className}`}
    >
      <span className="h-px w-6 bg-coral-400" />
      {children}
      {lines === "both" && <span className="h-px w-6 bg-coral-400" />}
    </span>
  );
}
