import { useEffect, useState } from "react";
import { BRAND, TEL_HREF, NAV_LINKS } from "../../config/site";
import { PhoneIcon, MenuIcon, CloseIcon } from "../ui/Icons";
import Container from "../ui/Container";
import Button from "../ui/Button";
import SmartImage from "../ui/SmartImage";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Khóa cuộn nền khi mở menu mobile
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-foam/90 backdrop-blur-md shadow-[0_6px_30px_-12px_rgba(6,56,77,0.3)] py-2"
          : "bg-transparent py-3"
      }`}
    >
      <Container as="nav" className="flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="group flex items-center gap-3">
          <span className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-coral-400/70 shadow-md transition-transform group-hover:scale-105">
            <SmartImage
              src={BRAND.logo}
              alt={`Logo ${BRAND.name}`}
              className="h-full w-full"
              imgClass="h-full w-full object-cover"
              fallbackClass="from-ocean-600 to-ocean-800"
              fallbackEmoji="🦐"
            />
          </span>
          <span className="leading-tight">
            <span
              className={`block font-display text-lg font-bold tracking-tight transition-colors ${
                scrolled ? "text-ocean-800" : "text-white"
              }`}
            >
              {BRAND.name}
            </span>
            <span
              className={`block text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                scrolled ? "text-coral-600" : "text-coral-300"
              }`}
            >
              Hải Sản Tươi Sống
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul
          className={`hidden items-center gap-8 text-sm font-semibold md:flex ${
            scrolled ? "text-ocean-800" : "text-white/90"
          }`}
        >
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative py-1 transition-colors hover:text-coral-500 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-coral-400 after:transition-transform hover:after:scale-x-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Call CTA (chỉ hiện từ md trở lên) */}
        <div className="hidden md:block">
          <Button
            href={TEL_HREF}
            variant="primary"
            size="sm"
            className="shadow-lg shadow-coral-500/30 hover:shadow-coral-500/40"
          >
            <PhoneIcon className="h-4 w-4" />
            {BRAND.phoneDisplay}
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
          className={`grid h-11 w-11 place-items-center rounded-xl transition-colors md:hidden ${
            scrolled ? "text-ocean-800 hover:bg-ocean-100" : "text-white hover:bg-white/10"
          }`}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile menu — absolute để panel khi đóng không cộng chiều cao vào header */}
      <div
        className={`absolute inset-x-0 top-full md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 top-0 -z-10 bg-ocean-950/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`mx-3 mt-2 origin-top rounded-2xl border border-ocean-100 bg-white p-3 shadow-xl transition-all duration-300 ${
            open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
          }`}
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold text-ocean-800 transition-colors hover:bg-ocean-50"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={TEL_HREF}
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-coral-500 px-5 py-3.5 text-base font-bold text-white shadow-lg shadow-coral-500/30"
          >
            <PhoneIcon className="h-5 w-5" />
            Gọi {BRAND.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}
