import { BRAND, TEL_HREF, MAP_HREF } from "../data";
import { PhoneIcon, MapPinIcon, CheckIcon } from "./Icons";
import SmartImage from "./SmartImage";

const POINTS = [
  "Nguồn hàng nhập trực tiếp, tươi mới mỗi ngày",
  "Phục vụ tận tâm cho cả khách buôn và khách lẻ",
  "Hỗ trợ thu mua & giao hàng trong khu vực",
];

export default function About() {
  return (
    <section id="gioi-thieu" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Image collage */}
        <div className="reveal relative">
          <div className="overflow-hidden rounded-[2rem] shadow-glow ring-1 ring-ocean-100">
            <SmartImage
              src={BRAND.banner}
              alt={`Cửa hàng ${BRAND.name}`}
              className="aspect-[4/3] w-full"
              imgClass="h-full w-full object-cover"
              fallbackClass="from-ocean-600 to-ocean-900"
              fallbackEmoji="🏪"
              fallbackLabel="banner.jpg"
            />
          </div>
          {/* floating logo badge */}
          <div className="animate-float-slow absolute -bottom-6 -right-2 hidden h-28 w-28 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-glow sm:block lg:-right-6">
            <SmartImage
              src={BRAND.logo}
              alt={`Logo ${BRAND.name}`}
              className="h-full w-full"
              imgClass="h-full w-full object-cover"
              fallbackClass="from-coral-400 to-coral-600"
              fallbackEmoji="🦐"
            />
          </div>
          {/* floating tag */}
          <div className="animate-float absolute -left-3 -top-5 rounded-2xl bg-coral-500 px-5 py-3 text-white shadow-xl lg:-left-6">
            <div className="font-display text-2xl font-bold leading-none">Tươi</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-white/85">
              mỗi ngày
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="reveal inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-coral-600">
            <span className="h-px w-6 bg-coral-400" />
            Giới thiệu
          </span>
          <h2 className="reveal mt-3 font-display text-3xl font-bold leading-tight text-ocean-900 sm:text-4xl">
            Thương hiệu hải sản uy tín của vùng biển
          </h2>
          <p className="reveal mt-5 text-lg leading-relaxed text-ocean-700/85">
            <strong className="text-ocean-900">{BRAND.name}</strong> chuyên thu mua và
            cung cấp hải sản tươi sống: tôm, cua, cá, mực, ghẹ, bề bề… Chúng tôi mang đến
            cho khách hàng nguồn hải sản chất lượng với giá tận gốc, phục vụ cả bán buôn
            lẫn bán lẻ.
          </p>

          <ul className="reveal mt-7 space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-coral-100 text-coral-600">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="text-ocean-800">{p}</span>
              </li>
            ))}
          </ul>

          <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={TEL_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ocean-700 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-ocean-700/25 transition-all hover:-translate-y-0.5 hover:bg-ocean-800"
            >
              <PhoneIcon className="h-5 w-5" />
              {BRAND.phoneDisplay}
            </a>
            <a
              href={MAP_HREF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ocean-200 px-6 py-3.5 text-base font-semibold text-ocean-700 transition-colors hover:bg-ocean-50"
            >
              <MapPinIcon className="h-5 w-5 text-coral-500" />
              Xem địa chỉ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
