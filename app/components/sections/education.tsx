import { education } from "@/lib/data";
import Line from "../ui/line";

export default function Education() {
  return (
    <div
      id="education"
      className="flex min-h-screen snap-start grow items-center bg-white"
    >
      <div className="container mx-auto max-w-6xl h-auto px-6 py-20 flex flex-col items-center justify-center">
        <span className="animate-reveal-up text-xs font-semibold uppercase tracking-[0.24em] text-gray-muted">
          Academic Background
        </span>
        <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-none tracking-[-0.05em] text-center text-black animate-reveal-up animation-delay-200">
          Education
        </h1>
        <div className="premium-card premium-hover mt-12 flex w-full max-w-3xl flex-col items-center rounded-3xl p-8 text-center animate-soft-scale animation-delay-300">
          <a
            href="https://www.rmutt.ac.th/"
            target="_blank"
            className="flex h-28 w-28 items-center justify-center rounded-3xl border border-gray-light bg-white-off transition-transform duration-300 hover:scale-105"
          >
            <img src="/rmutt.png" width={80} height={96} />
          </a>
          <h2 className="mt-8 text-2xl md:text-3xl font-semibold text-black">
            {education.degree}
          </h2>
          <h3 className="mt-3 text-lg md:text-xl font-medium text-black">
            {education.institution}
          </h3>
          <p className="mt-5 inline-flex flex-col rounded-2xl border border-gray-light bg-white-off px-5 py-3 text-gray-muted md:flex-row md:gap-2">
            <span>{education.period}</span>
            <span className="hidden md:inline">/</span>
            <span>{education.location}</span>
          </p>
        </div>
        <Line />
      </div>
    </div>
  );
}
