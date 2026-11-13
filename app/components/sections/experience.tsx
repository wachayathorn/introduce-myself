import { experiences } from "@/lib/data";
import Line from "../ui/line";
import Reveal from "../ui/reveal";

export default function Experience() {
  const current = experiences.find((experience) => experience.current);
  const previous = experiences.filter((experience) => !experience.current);

  return (
    <div id="experience" className="flex min-h-screen snap-start grow items-center bg-white-off">
      <div className="container mx-auto flex max-w-6xl flex-col px-6 py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-stretch">
          <div className="flex flex-col md:w-5/12">
            <span className="animate-reveal-up text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Now
            </span>
            <Reveal className="mt-6 flex flex-1" delay={80}>
            <div className="premium-hover flex w-full flex-1 flex-col justify-between rounded-3xl border-t-4 border-accent bg-black p-8 text-white">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
                  Current role
                </p>
                <h1 className="mt-4 text-4xl font-bold leading-none tracking-[-0.05em] md:text-5xl">
                  {current?.title}
                </h1>
                <h2 className="mt-4 text-xl font-medium text-white/80">
                  {current?.company}
                </h2>
                {current?.team ? (
                  <p className="mt-2 text-base text-white/60">{current.team}</p>
                ) : null}
              </div>
              <div className="mt-10 flex flex-col gap-2 text-sm text-white/60">
                <span>{current?.period}</span>
                <span>{current?.location}</span>
              </div>
            </div>
            </Reveal>
          </div>

          <div className="flex flex-col md:w-7/12">
            <span className="animate-reveal-up text-xs font-semibold uppercase tracking-[0.24em] text-gray-muted">
              Before
            </span>
            <div className="mt-6 flex flex-col border-l border-gray-light pl-8">
              {previous.map((experience, index) => (
                <Reveal key={experience.id} delay={index * 120}>
                <div className="relative pb-8 last:pb-0">
                  <span className="absolute -left-[39px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-accent" />
                  <h2 className="text-xl font-semibold text-black">{experience.title}</h2>
                  <h3 className="mt-1 text-base font-medium text-black">{experience.company}</h3>
                  <p className="mt-2 text-sm text-gray-muted">
                    {experience.period}
                    <span className="px-2">·</span>
                    {experience.location}
                  </p>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
        <Line />
      </div>
    </div>
  );
}
