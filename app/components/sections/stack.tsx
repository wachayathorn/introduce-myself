import { stacks } from "@/lib/data";
import Line from "../ui/line";

export default function Stack() {
  return (
    <div id="stack" className="premium-surface flex min-h-screen snap-start grow items-center">
      <div className="container mx-auto max-w-6xl h-auto px-6 py-20 flex flex-col items-center justify-center">
        <span className="animate-reveal-up text-xs font-semibold uppercase tracking-[0.24em] text-gray-muted">
          Toolkit
        </span>
        <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-none tracking-[-0.05em] text-center text-black animate-reveal-up animation-delay-200">
          Technologies I Work With <br />
          <span className="mt-4 inline-block text-gray-muted font-medium text-base md:text-xl tracking-normal">
            Tech stack I have experience in
          </span>
        </h1>
        <div className="mt-12 grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stacks.map((stackCategory, categoryIndex) => (
            <div
              key={stackCategory.title}
              className={`premium-card premium-hover flex flex-col items-center rounded-2xl p-6 animate-soft-scale ${
                categoryIndex === 0
                  ? "animation-delay-300"
                  : categoryIndex === 1
                    ? "animation-delay-400"
                    : categoryIndex === 2
                      ? "animation-delay-500"
                      : "animation-delay-600"
              }`}
            >
              <div className="font-bold text-xl md:text-2xl pb-5 text-black">
                {stackCategory.title}
              </div>
              <ul className="grid grid-cols-2 gap-3 justify-center">
                {stackCategory.icons.map((icon, index) => (
                  <li
                    key={index}
                    className="p-3 rounded-2xl border border-transparent bg-white-off hover:border-gray-light hover:bg-white hover:scale-105 hover:shadow-sm transition-all duration-300 flex flex-col items-center"
                  >
                    <img src={icon} className="w-10 h-10 md:w-12 md:h-12 m-2" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Line />
      </div>
    </div>
  );
}
