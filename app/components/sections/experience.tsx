import Reveal from "../ui/reveal";
import { experiences } from "@/lib/data";

export default function Experience() {
  const current = experiences.find((job) => job.current);
  const previous = experiences.filter((job) => !job.current);

  return (
    <section id="experience" className="bg-[var(--page)] px-4 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <Reveal className="topic mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="rounded-full bg-[var(--chip)] px-3 py-1 text-xs font-bold tracking-wider text-[var(--muted)] uppercase">
              Career
            </span>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-[var(--ink)]">
              Professional Experience
            </h2>
            <span className="section-rule" />
          </div>
          <p className="max-w-md text-[15px] leading-6 text-[var(--muted)]">
            Professional experience in backend microservices, currently with the Virtual Bank team at Ascend Money. Cloud infrastructure supports this work.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {current ? (
            <Reveal delay={120} className="flex flex-col justify-between rounded-2xl border border-[var(--line)] bg-[var(--card)] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:p-10 lg:col-span-7">
              <div>
                <div className="mb-6 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold text-white">
                    <span className="h-2 w-2 rounded-full bg-white" />
                    Current Role · Now
                  </span>
                  <span className="text-xs text-[var(--muted)]">{current.period}</span>
                </div>
                <h3 className="text-4xl font-bold tracking-tight">{current.title}</h3>
                <p className="mt-1 text-lg font-semibold text-[var(--accent)]">
                  {current.company}
                  {current.team ? <span className="font-medium text-[var(--muted)]"> · {current.team}</span> : null}
                </p>
                <p className="mt-6 text-base leading-7 text-[var(--muted)]">
                  Designs backend microservices with Kotlin and Spring Boot. The services are deployed on AWS.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Kotlin", "Spring Boot", "Microservices", "AWS"].map((tool) => (
                    <span key={tool} className="hover-pop rounded-full bg-[var(--chip)] px-3.5 py-1.5 text-xs font-medium hover:bg-[var(--hover-fill)] hover:text-[var(--hover-ink)]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-8 text-sm text-[var(--muted)]">{current.location}</p>
            </Reveal>
          ) : null}

          <div className="flex flex-col gap-4 lg:col-span-5">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[var(--chip)] px-3 py-1 text-xs font-bold tracking-wider text-[var(--muted)] uppercase">
                Previous
              </span>
              <div className="h-px flex-1 bg-[var(--rule)]" />
            </div>
            {previous.map((job, index) => (
              <Reveal key={job.id} delay={200 + index * 80} className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">
                    {job.company}
                  </span>
                  <span className="text-xs text-[var(--muted)]">{job.period}</span>
                </div>
                <h4 className="text-lg font-semibold">{job.title}</h4>
                <p className="mt-4 text-xs text-[var(--muted)]">{job.location}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
