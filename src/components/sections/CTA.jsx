import { BRAND, TEL_HREF, TEL2_HREF } from "../../config/site";
import { PhoneIcon } from "../ui/Icons";
import Button from "../ui/Button";

export default function Cta() {
  return (
    <section id="lien-he" className="scroll-mt-20 px-4 pb-8 pt-4 sm:px-6">
      <div className="reveal relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-linear-to-br from-coral-500 to-coral-600 px-6 py-14 text-center shadow-glow sm:px-12 sm:py-16">
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
            <Button href={TEL_HREF} variant="white" size="xl" className="shadow-xl">
              <PhoneIcon className="h-5 w-5" />
              {BRAND.phoneDisplay}
            </Button>
            <Button href={TEL2_HREF} variant="outlineWhite" size="xl">
              <PhoneIcon className="h-5 w-5" />
              {BRAND.phone2Display}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
