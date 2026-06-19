import { STATS } from "../../config/site";
import Container from "../ui/Container";

export default function Stats() {
  return (
    <section className="relative z-10 -mt-2">
      <Container>
        <div className="reveal grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-ocean-100 shadow-card md:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-white px-5 py-7 text-center transition-colors hover:bg-ocean-50"
            >
              <div className="font-display text-3xl font-bold text-ocean-700 sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1.5 text-sm font-medium text-ocean-600/80">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
