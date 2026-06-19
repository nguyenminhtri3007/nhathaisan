import { BRAND, TEL_HREF, MAP_HREF, HIGHLIGHTS } from "../../config/site";
import { PhoneIcon, MapPinIcon, ArrowIcon, CheckIcon } from "../ui/Icons";
import Button from "../ui/Button";
import SmartImage from "../ui/SmartImage";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <SmartImage
          src={BRAND.banner}
          alt="Cửa hàng hải sản Nhất Nguyệt"
          className="h-full w-full"
          imgClass="h-full w-full object-cover object-center"
          fallbackClass="from-ocean-700 via-ocean-800 to-ocean-950"
          fallbackEmoji="🌊"
          fallbackLabel="banner.jpg"
        />
      </div>
      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 -z-10 bg-linear-to-l from-ocean-950/75 via-ocean-900/45 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-ocean-950/70 via-transparent to-ocean-950/25" />

      <div className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-4 pb-24 pt-32 sm:px-6">
        <div className="ml-auto max-w-xl text-right">
          <span className="inline-flex items-center gap-2 rounded-full border border-coral-300/40 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-coral-200 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-coral-400" />{" "}
            Bán buôn · Bán lẻ
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-white drop-shadow-sm sm:text-6xl lg:text-7xl">
            {BRAND.name}
            <span className="mt-2 block bg-linear-to-r from-coral-300 to-coral-500 bg-clip-text text-3xl font-extrabold not-italic text-transparent sm:text-4xl lg:text-5xl">
              Hải Sản Tươi Sống
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ocean-50/90 sm:text-xl">
            Chuyên thu mua &amp; cung cấp hải sản tươi sống mỗi ngày — từ biển khơi
            đến thẳng bàn ăn của bạn.
          </p>

          {/* Product chips */}
          <ul className="mt-6 flex flex-wrap justify-end gap-2.5">
            {HIGHLIGHTS.map((p) => (
              <li
                key={p}
                className="flex items-center gap-1.5 rounded-full bg-white/12 px-3.5 py-1.5 text-sm font-semibold text-white backdrop-blur-sm ring-1 ring-white/15"
              >
                <CheckIcon className="h-3.5 w-3.5 text-coral-300" />
                {p}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
            <Button href={TEL_HREF} variant="primary" size="lg" className="shadow-xl shadow-coral-500/30">
              <PhoneIcon className="h-5 w-5" />
              Gọi đặt hàng: {BRAND.phoneDisplay}
            </Button>
            <Button href="#san-pham" variant="glass" size="lg">
              Xem sản phẩm
              <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Location line */}
          <a
            href={MAP_HREF}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 text-sm text-ocean-50/80 transition-colors hover:text-coral-200"
          >
            <MapPinIcon className="h-4 w-4 text-coral-300" />
            {BRAND.address} — {BRAND.addressDetail}
          </a>
        </div>
      </div>

      {/* Wave divider */}
      <div className="wave-bottom" aria-hidden="true">
        <svg
          viewBox="0 0 1440 110"
          preserveAspectRatio="none"
          className="h-15 w-full sm:h-22.5"
        >
          <path
            fill="#f6fbfd"
            d="M0,64 C240,110 480,110 720,80 C960,50 1200,20 1440,48 L1440,110 L0,110 Z"
          />
        </svg>
      </div>
    </section>
  );
}
