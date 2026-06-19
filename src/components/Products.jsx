import { PRODUCTS, TEL_HREF } from "../data";
import { PhoneIcon } from "./Icons";
import SectionTitle from "./SectionTitle";
import SmartImage from "./SmartImage";

export default function Products() {
  return (
    <section id="san-pham" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Sản phẩm"
          title="Hải sản tươi sống mỗi ngày"
          desc="Tôm · Cua · Cá · Mực · Ghẹ · Bề bề — được tuyển chọn kỹ, giữ sống đến tận tay khách hàng."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <article
              key={p.name}
              className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-ocean-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Ảnh sản phẩm (nếu có) */}
              {p.img && (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <SmartImage
                    src={p.img}
                    alt={p.name}
                    className="h-full w-full"
                    imgClass="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    fallbackClass={`bg-gradient-to-br ${p.tint}`}
                    fallbackEmoji={p.emoji}
                  />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-ocean-800 shadow-sm backdrop-blur-sm">
                    <span aria-hidden="true">{p.emoji}</span>
                    {p.name}
                  </span>
                </div>
              )}

              {/* Nội dung */}
              <div className="relative flex flex-1 flex-col p-7">
                {/* tint glow */}
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${p.tint} opacity-70 blur-2xl transition-transform duration-500 group-hover:scale-150`}
                />
                <div className="relative flex flex-1 flex-col">
                  {/* Ô icon — chỉ hiện khi chưa có ảnh */}
                  {!p.img && (
                    <div
                      className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${p.tint} text-4xl shadow-inner`}
                    >
                      <span aria-hidden="true">{p.emoji}</span>
                    </div>
                  )}
                  <h3 className={`font-display text-2xl font-bold text-ocean-900 ${p.img ? "" : "mt-5"}`}>
                    {p.name}
                  </h3>
                  <p className="mt-2 flex-1 leading-relaxed text-ocean-700/80">{p.desc}</p>
                  <a
                    href={TEL_HREF}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-coral-600 transition-colors hover:text-coral-500"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    Hỏi giá hôm nay
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="reveal mt-10 text-center text-ocean-700/70">
          Cần loại khác hoặc đặt số lượng lớn?{" "}
          <a href={TEL_HREF} className="font-bold text-ocean-700 underline decoration-coral-400 decoration-2 underline-offset-4 hover:text-coral-600">
            Gọi ngay để được báo giá
          </a>
          .
        </p>
      </div>
    </section>
  );
}
