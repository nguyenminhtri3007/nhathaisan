import { FEATURES } from "../data";
import { ICONS } from "./Icons";
import SectionTitle from "./SectionTitle";

export default function Features() {
  return (
    <section
      id="cam-ket"
      className="relative scroll-mt-20 overflow-hidden bg-ocean-900 py-20 text-white sm:py-28"
    >
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-ocean-700/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-coral-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-coral-300">
            <span className="h-px w-6 bg-coral-400" />
            Cam kết
            <span className="h-px w-6 bg-coral-400" />
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">
            Vì sao chọn {""}
            <span className="text-coral-300">Nhất Nguyệt?</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ocean-100/80">
            Chất lượng và sự tin cậy là điều chúng tôi đặt lên hàng đầu.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon];
            return (
              <div
                key={f.title}
                className="reveal group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-coral-300/40 hover:bg-white/10"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-coral-500/15 text-coral-300 ring-1 ring-coral-300/30 transition-colors group-hover:bg-coral-500 group-hover:text-white">
                  {Icon && <Icon className="h-7 w-7" />}
                </div>
                <h3 className="mt-5 text-xl font-bold">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-ocean-100/70">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
