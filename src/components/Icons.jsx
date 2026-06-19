// Bộ icon SVG nhẹ, dùng chung toàn site (stroke = currentColor)
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3 5.5C3 4.1 4.1 3 5.5 3H7c.6 0 1.1.4 1.3 1l1 3.2c.1.5 0 1-.4 1.4L7.6 10c1 2.2 2.2 3.4 4.4 4.4l1.4-1.3c.4-.4.9-.5 1.4-.4l3.2 1c.6.2 1 .7 1 1.3v1.5c0 1.4-1.1 2.5-2.5 2.5C9.6 19 5 14.4 3 5.5Z" />
    </svg>
  );
}

export function MapPinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function WaveIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M2 8c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2" />
      <path d="M2 14c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2" />
    </svg>
  );
}

export function TagIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3.5 12.5 11 5a2 2 0 0 1 1.4-.6H19a1 1 0 0 1 1 1v6.6a2 2 0 0 1-.6 1.4l-7.5 7.5a2 2 0 0 1-2.8 0l-5.6-5.6a2 2 0 0 1 0-2.8Z" />
      <circle cx="15.5" cy="8.5" r="1.4" />
    </svg>
  );
}

export function TruckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17.5" cy="18" r="1.8" />
    </svg>
  );
}

export function ScaleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 4v16M7 20h10M5 8h14M5 8 3 13h4zM19 8l-2 5h4z" />
    </svg>
  );
}

export function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M5 12.5 10 17.5 19 7" />
    </svg>
  );
}

export function ZaloIcon(props) {
  // Simplified Zalo glyph
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.5 2 2 5.8 2 10.5c0 2.6 1.4 4.9 3.6 6.4-.1 1-.5 2.3-1 3.1-.2.3.1.7.5.6 1.8-.5 3.1-1.2 3.8-1.7 1 .2 2 .4 3.1.4 5.5 0 10-3.8 10-8.8S17.5 2 12 2Z" />
    </svg>
  );
}

export const ICONS = {
  wave: WaveIcon,
  tag: TagIcon,
  truck: TruckIcon,
  scale: ScaleIcon,
};
