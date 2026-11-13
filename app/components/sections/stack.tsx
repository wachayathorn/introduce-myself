import { currentTools, stacks } from "@/lib/data";
import Line from "../ui/line";
import Reveal from "../ui/reveal";

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
        <Reveal className="mt-12 w-full">
        <div className="premium-card flex w-full flex-col items-center rounded-3xl px-6 py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Now
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {currentTools.map((tool, index) => (
              <li
                key={tool.name}
                className="pop-in flex min-w-28 flex-col items-center rounded-2xl border border-gray-light bg-white-off px-5 py-4"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <img src={tool.icon} alt={tool.name} className="h-12 w-12" />
                <span className="mt-3 text-sm font-semibold text-black">{tool.name}</span>
              </li>
            ))}
            </ul>
        </div>
        </Reveal>
        <div className="mt-5 grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stacks.map((stackCategory, categoryIndex) => (
            <Reveal key={stackCategory.title} delay={categoryIndex * 100}>
            <div className="premium-card premium-hover flex h-full flex-col items-center rounded-2xl p-6">
              <div className="font-bold text-xl md:text-2xl pb-5 text-black">
                {stackCategory.title}
              </div>
              <ul className="grid grid-cols-2 gap-3 justify-center">
                {stackCategory.icons.map((icon, index) => (
                  <li
                    key={index}
                    className="p-3 rounded-2xl border border-transparent bg-white-off hover:border-accent hover:bg-white hover:scale-105 hover:shadow-sm transition-all duration-300 flex flex-col items-center"
                  >
                    <img src={icon} className="w-10 h-10 md:w-12 md:h-12 m-2" />
                  </li>
                ))}
              </ul>
            </div>
            </Reveal>
          ))}
        </div>
        <Line />
      </div>
    </div>
  );
}
