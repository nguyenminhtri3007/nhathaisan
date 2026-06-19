// Nút/liên kết dùng chung. Mặc định render thẻ <a> (đa số nút là link gọi điện).
// - variant: bộ màu + độ đậm chữ
// - size: cỡ chữ + padding
// - className: tinh chỉnh thêm cho từng chỗ (đổ bóng, ẩn/hiện theo breakpoint...)
const VARIANTS = {
  primary: "bg-coral-500 font-bold text-white hover:-translate-y-0.5 hover:bg-coral-600",
  white: "bg-white font-extrabold text-coral-600 hover:-translate-y-0.5 hover:bg-ocean-50",
  ocean: "bg-ocean-700 font-bold text-white hover:-translate-y-0.5 hover:bg-ocean-800",
  glass:
    "border border-white/30 bg-white/10 font-semibold text-white backdrop-blur-sm hover:bg-white/20",
  outlineWhite: "border-2 border-white/70 font-bold text-white hover:bg-white/15",
  outlineOcean:
    "border border-ocean-200 font-semibold text-ocean-700 hover:bg-ocean-50",
};

const SIZES = {
  sm: "gap-2 px-5 py-2.5 text-sm",
  md: "gap-2 px-6 py-3.5 text-base",
  lg: "gap-2.5 px-7 py-4 text-base",
  xl: "gap-2.5 px-8 py-4 text-lg",
};

export default function Button({
  as: Tag = "a",
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}) {
  return (
    <Tag
      className={`group inline-flex items-center justify-center rounded-full transition-all ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
