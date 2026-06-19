import { useEffect, useState } from "react";
import { BRAND, TEL_HREF } from "../data";
import { PhoneIcon } from "./Icons";

// Nút gọi nổi — hiện sau khi cuộn qua hero, tiện cho khách đặt hàng nhanh.
export default function FloatingCall() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={TEL_HREF}
      aria-label={`Gọi ${BRAND.phoneDisplay}`}
      className={`fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-coral-500 py-3.5 pl-4 pr-5 font-bold text-white shadow-xl shadow-coral-500/40 transition-all duration-300 hover:bg-coral-600 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-16 opacity-0"
      }`}
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50" />
        <PhoneIcon className="relative h-5 w-5" />
      </span>
      <span className="hidden sm:inline">Gọi đặt hàng</span>
    </a>
  );
}
