import { BRAND, TEL_HREF, TEL2_HREF } from "../data";
import { PhoneIcon } from "./Icons";

export default function CTA() {
  return (
    <section id="lien-he" className="scroll-mt-20 px-4 pb-8 pt-4 sm:px-6">
      <div className="reveal relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-coral-500 to-coral-600 px-6 py-14 text-center shadow-glow sm:px-12 sm:py-16">
        {/* decorative */}
        <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-ocean-900/20 blur-2xl" />

        <div className="relative">
          <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            Đặt hải sản tươi ngay hôm nay
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-white/90">
            Gọi điện để được tư vấn loại hải sản, báo giá và đặt hàng nhanh nhất.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={TEL_HREF}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-lg font-extrabold text-coral-600 shadow-xl transition-all hover:-translate-y-0.5 hover:bg-ocean-50"
            >
              <PhoneIcon className="h-5 w-5" />
              {BRAND.phoneDisplay}
            </a>
            <a
              href={TEL2_HREF}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/70 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/15"
            >
              <PhoneIcon className="h-5 w-5" />
              {BRAND.phone2Display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
