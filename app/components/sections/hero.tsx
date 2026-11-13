export default function Welcome() {
  return (
    <section id="home" className="relative flex min-h-svh items-center justify-center overflow-x-hidden px-4">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[420px] w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#e11d2e]/[0.04] via-red-100/10 to-transparent blur-3xl" />
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <h1 className="font-display max-w-full text-[clamp(1.85rem,6.4vw,5.75rem)] leading-[1.02] font-medium tracking-[-0.035em] text-[#111418] uppercase">
          <span className="hero-line">
            <span>Wachayathorn</span>
          </span>
          <span className="hero-line hero-line-delay">
            <span>Singsena</span>
          </span>
        </h1>
        <p className="animate-fade-in-up animation-delay-300 mt-6 text-lg font-medium tracking-wide text-[#e11d2e] uppercase sm:text-2xl">
          Software Engineer
        </p>
        <p className="animate-fade-in-up animation-delay-300 mt-5 max-w-2xl text-base leading-7 text-[#6C727F] sm:text-lg">
          Specializing in backend microservices and high-performance APIs for the Virtual Bank team
          at Ascend Money. Primary technologies are Kotlin and Spring Boot, with AWS for deployment.
        </p>
      </div>
    </section>
  );
}
