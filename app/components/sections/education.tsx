import Reveal from "../ui/reveal";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="bg-[var(--page)] px-4 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <Reveal className="topic">
          <span className="rounded-full bg-[var(--chip)] px-3 py-1 text-xs font-bold tracking-wider text-[var(--muted)] uppercase">
            Academic Background
          </span>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-[var(--ink)]">Education</h2>
          <span className="section-rule" />
        </Reveal>

        <Reveal delay={160}>
        <a
          href="https://www.rmutt.ac.th/"
          target="_blank"
          rel="noreferrer"
          className="mt-8 block rounded-2xl border border-[var(--line)] bg-[var(--card)] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:p-10"
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-5">
              <img
                src="/rmutt.png"
                alt="Rajamangala University of Technology Thanyaburi logo"
                className="h-16 w-16 rounded-2xl bg-[var(--chip)] object-contain p-2"
              />
              <div>
                <p className="text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">
                  Undergraduate Degree · GPAX {education.gpa}
                </p>
                <h3 className="text-2xl font-semibold text-[var(--ink)]">{education.degree}</h3>
                <p className="mt-1 text-[15px] text-[var(--muted)]">{education.institution}</p>
              </div>
            </div>
            <div className="md:text-right">
              <p className="text-sm font-semibold">{education.period}</p>
              <p className="text-sm text-[var(--muted)]">{education.location}</p>
            </div>
          </div>
          {education.achievements.map((item) => (
            <p key={item} className="mt-6 text-sm leading-6 text-[var(--muted)]">
              {item}
            </p>
          ))}
        </a>
        </Reveal>
      </div>
    </section>
  );
}
