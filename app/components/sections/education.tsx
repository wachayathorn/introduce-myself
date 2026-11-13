import Reveal from "../ui/reveal";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="bg-[#f8f9fa] px-4 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:p-10">
        <span className="rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-bold tracking-wider text-[#6C727F] uppercase">
          Academic Background
        </span>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-[#111418]">Education</h2>

        <Reveal>
        <a
          href="https://www.rmutt.ac.th/"
          target="_blank"
          rel="noreferrer"
          className="mt-8 block rounded-2xl border border-[#E5E7EB] bg-[#F3F4F6] p-8 md:p-10"
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-5">
              <img
                src="/rmutt.png"
                alt="Rajamangala University of Technology Thanyaburi logo"
                className="h-16 w-16 rounded-2xl bg-[#F3F4F6] object-contain p-2"
              />
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#e11d2e] uppercase">
                  Undergraduate Degree · GPA {education.gpa}
                </p>
                <h3 className="text-2xl font-semibold text-[#111418]">{education.degree}</h3>
                <p className="mt-1 text-[15px] text-[#6C727F]">{education.institution}</p>
              </div>
            </div>
            <div className="md:text-right">
              <p className="text-sm font-semibold">{education.period}</p>
              <p className="text-sm text-[#6C727F]">{education.location}</p>
            </div>
          </div>
          {education.achievements.map((item) => (
            <p key={item} className="mt-6 text-sm leading-6 text-[#6C727F]">
              {item}
            </p>
          ))}
        </a>
        </Reveal>
      </div>
    </section>
  );
}
