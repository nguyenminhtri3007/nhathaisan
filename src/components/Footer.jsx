import { BRAND, TEL_HREF, TEL2_HREF, MAP_HREF } from "../data";
import { PhoneIcon, MapPinIcon, ClockIcon } from "./Icons";
import SmartImage from "./SmartImage";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ocean-950 text-ocean-100">
      {/* top wave */}
      <div className="absolute inset-x-0 top-0 rotate-180" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-10 w-full">
          <path
            fill="#f6fbfd"
            d="M0,40 C360,80 720,0 1080,32 C1260,48 1380,40 1440,32 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-20 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="h-12 w-12 overflow-hidden rounded-full ring-2 ring-coral-400/70">
                <SmartImage
                  src={BRAND.logo}
                  alt={`Logo ${BRAND.name}`}
                  className="h-full w-full"
                  imgClass="h-full w-full object-cover"
                  fallbackClass="from-coral-400 to-coral-600"
                  fallbackEmoji="🦐"
                />
              </span>
              <div>
                <div className="font-display text-xl font-bold text-white">
                  {BRAND.name}
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-coral-300">
                  Hải Sản Tươi Sống
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-sm leading-relaxed text-ocean-100/70">
              Chuyên thu mua &amp; cung cấp hải sản tươi sống: tôm, cua, cá, mực, ghẹ,
              bề bề. Bán buôn &amp; bán lẻ.
            </p>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
              Liên hệ
            </h3>
            <ul className="mt-5 space-y-4 text-ocean-100/85">
              <li>
                <a href={TEL_HREF} className="group flex items-start gap-3">
                  <PhoneIcon className="mt-0.5 h-5 w-5 flex-none text-coral-300" />
                  <span>
                    <span className="block text-xs text-ocean-100/50">Điện thoại</span>
                    <span className="font-semibold text-white group-hover:text-coral-300">
                      {BRAND.phoneDisplay}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href={TEL2_HREF} className="group flex items-start gap-3">
                  <PhoneIcon className="mt-0.5 h-5 w-5 flex-none text-coral-300" />
                  <span>
                    <span className="block text-xs text-ocean-100/50">Hotline 2</span>
                    <span className="font-semibold text-white group-hover:text-coral-300">
                      {BRAND.phone2Display}
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Address & hours */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
              Địa chỉ
            </h3>
            <ul className="mt-5 space-y-4 text-ocean-100/85">
              <li>
                <a
                  href={MAP_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-3"
                >
                  <MapPinIcon className="mt-0.5 h-5 w-5 flex-none text-coral-300" />
                  <span className="leading-relaxed group-hover:text-coral-300">
                    {BRAND.address}
                    <span className="block text-sm text-ocean-100/60">
                      {BRAND.addressDetail}
                    </span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <ClockIcon className="mt-0.5 h-5 w-5 flex-none text-coral-300" />
                <span className="leading-relaxed">{BRAND.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-ocean-100/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND.name} — Hải Sản Tươi Sống. Bảo lưu mọi
            quyền.
          </p>
          <p className="flex items-center gap-1.5">
            Made with <span className="text-coral-400">🦐</span> tại Hưng Yên
          </p>
        </div>
      </div>
    </footer>
  );
}
