const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "4", label: "Roles" },
  { value: "3.44", label: "GPA" },
  { value: "API", label: "Microservices" },
];

export default function Welcome() {
  return (
    <section id="home" className="relative px-4 pt-16 pb-16 md:px-10 lg:px-16">
      <div className="pointer-events-none absolute top-10 left-1/2 -z-10 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#e11d2e]/[0.04] via-red-100/10 to-transparent blur-3xl" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center">
        <div className="animate-fade-in mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e11d2e] opacity-25" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#e11d2e]" />
          </span>
          <span className="text-xs font-semibold tracking-wide text-[#6C727F] uppercase">
            Now · Virtual Bank at Ascend Money
          </span>
        </div>

        <h1 className="max-w-4xl text-4xl leading-tight font-extrabold tracking-tight text-[#111418] uppercase md:text-6xl">
          <span className="hero-mask block">
            <span className="block">Wachayathorn</span>
          </span>
          <span className="hero-mask hero-mask-delay block">
            <span className="block">Singsena</span>
          </span>
        </h1>
        <p className="animate-fade-in-up animation-delay-300 mt-3 text-lg font-semibold text-[#e11d2e] md:text-2xl">
          Senior Software Engineer · Backend Microservices
        </p>
        <p className="animate-fade-in-up animation-delay-400 mt-4 max-w-2xl text-base leading-7 text-[#6C727F] md:text-lg">
          I build backend microservices and high-performance APIs. I am on the Virtual Bank team at{" "}
          <span className="font-semibold text-[#111418]">Ascend Money</span>.
          Kotlin and Spring Boot come first. AWS is the cloud I use.
        </p>

        <div className="animate-fade-in-up animation-delay-500 mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/wachayathorn"
            target="_blank"
            rel="noreferrer"
            className="hover-pop inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-[#111418] shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:bg-[#fff1f2] hover:text-[#e11d2e]"
          >
            GitHub
          </a>
          <a
            href="#experience"
            className="hover-pop inline-flex h-12 w-52 items-center justify-center rounded-full bg-black text-sm font-medium text-white shadow-[0_12px_24px_-8px_rgba(0,0,0,0.25)] hover:bg-[#2a2a2a]"
          >
            Explore Experience
          </a>
          <a
            href="#contact"
            className="hover-pop inline-flex h-12 w-52 items-center justify-center rounded-full bg-white text-sm font-medium text-[#111418] shadow-[0_4px_14px_rgba(0,0,0,0.06)] hover:bg-black hover:text-white"
          >
            Get In Touch
          </a>
          <a
            href="https://linkedin.com/in/wachayathorn"
            target="_blank"
            rel="noreferrer"
            className="hover-pop inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-[#111418] shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:bg-[#fff1f2] hover:text-[#e11d2e]"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="hover-pop animate-scale-in flex flex-col items-center rounded-2xl border border-[#E5E7EB] bg-[#F3F4F6] p-6 text-center [animation-fill-mode:both] hover:bg-white"
              style={{ animationDelay: `${0.55 + index * 0.12}s` }}
            >
              <span className="text-4xl font-medium tracking-tight text-[#111418]">
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-semibold tracking-wider text-[#6C727F] uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="relative mt-16 hidden min-h-[280px] w-full md:block">
          <article className="animate-float absolute top-4 left-6 w-72 -rotate-3 rounded-2xl border border-[#E5E7EB] bg-white p-5 text-left shadow-[0_16px_36px_-6px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:rotate-0">
            <p className="text-xs font-semibold text-[#6C727F] uppercase">Now</p>
            <h2 className="mt-1 text-lg font-bold">Virtual Bank</h2>
            <p className="text-sm text-[#6C727F]">Ascend Money · Bangkok, Thailand</p>
            <p className="mt-4 text-sm text-[#45474a]">Backend · Kotlin · Spring Boot</p>
          </article>
          <article className="animate-soft-scale relative z-20 mx-auto w-96 rounded-2xl border border-[#E5E7EB] bg-white p-6 text-left shadow-[0_24px_48px_-8px_rgba(0,0,0,0.1)]">
            <p className="text-xs font-bold tracking-wider text-[#6C727F] uppercase">
              Daily tools
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Kotlin", "Spring Boot", "Microservices"].map((tool) => (
                <span key={tool} className="hover-pop rounded-full bg-[#F3F4F6] px-3 py-1 text-sm font-medium hover:bg-[#fff1f2] hover:text-[#e11d2e]">
                  {tool}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-[#6C727F]">
              Backend microservices for the Virtual Bank team.
            </p>
          </article>
          <article className="animate-float-delayed absolute top-6 right-6 w-72 rotate-3 rounded-2xl border border-[#E5E7EB] bg-white p-5 text-left shadow-[0_16px_36px_-6px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:rotate-0">
            <p className="text-xs font-semibold text-[#e11d2e] uppercase">Before</p>
            <h2 className="mt-1 text-lg font-bold">KBTG</h2>
            <p className="text-sm text-[#6C727F]">Innovation Engineer</p>
            <p className="mt-4 text-sm text-[#45474a]">04/2022 – 10/2026 · Nonthaburi</p>
          </article>
        </div>
      </div>
    </section>
  );
}
