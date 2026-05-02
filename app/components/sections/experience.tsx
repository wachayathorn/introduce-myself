import { experiences } from "@/lib/data";
import Line from "../ui/line";

export default function Experience() {
  return (
    <div id="experience" className="flex min-h-screen snap-start grow items-center bg-white">
      <div className="container flex flex-col mx-auto max-w-6xl px-6 py-20">
        <div className="gap-12 flex flex-col md:flex-row md:items-start">
          <div className="md:w-5/12 flex flex-col text-center md:text-left">
            <span className="animate-reveal-up text-xs font-semibold uppercase tracking-[0.24em] text-gray-muted">
              Career Timeline
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-none tracking-[-0.05em] animate-reveal-up animation-delay-200">
              <span>5 YEARS OF</span> <br />
              <span className="text-gray-muted">EXPERIENCE</span>
            </h1>
            <p className="mt-6 max-w-sm text-gray-muted leading-7 animate-reveal-up animation-delay-300">
              Building backend systems, APIs, and cloud-native services with a focus on reliability and scale.
            </p>
          </div>
          <div className="md:w-7/12 flex flex-col gap-6 text-center md:text-left">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`premium-card premium-hover flex flex-col p-7 rounded-2xl animate-soft-scale ${
                  index === 0 ? "animation-delay-300" : "animation-delay-500"
                }`}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-black">{experience.title}</h2>
                    <h3 className="mt-1 text-lg font-medium text-black">{experience.company}</h3>
                  </div>
                  <span className="inline-flex w-fit rounded-full border border-gray-light bg-white-off px-4 py-2 text-xs font-semibold text-gray-muted">
                    {experience.period}
                  </span>
                </div>
                <p className="text-gray-muted mt-5">
                  {experience.location}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Line />
      </div>
    </div>
  );
}
