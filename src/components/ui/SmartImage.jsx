import { useState } from "react";

// Ảnh có fallback: nếu file chưa tồn tại (chưa thêm vào public/images),
// hiển thị nền gradient + nhãn để layout không bị vỡ.
export default function SmartImage({
  src,
  alt,
  className = "",
  fallbackClass = "from-ocean-700 to-ocean-900",
  fallbackLabel,
  fallbackEmoji = "🌊",
  imgClass = "",
  ...rest
}) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`relative flex items-center justify-center bg-linear-to-br ${fallbackClass} ${className}`}
        role="img"
        aria-label={alt}
        {...rest}
      >
        <div className="flex flex-col items-center gap-2 text-center text-white/90 px-4">
          <span className="text-5xl sm:text-6xl drop-shadow" aria-hidden="true">
            {fallbackEmoji}
          </span>
          {fallbackLabel && (
            <span className="text-xs sm:text-sm font-medium tracking-wide text-white/70">
              {fallbackLabel}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`${className} ${imgClass}`}
      {...rest}
    />
  );
}
