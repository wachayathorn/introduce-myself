export default function Welcome() {
  return (
    <section id="home" className="relative flex min-h-svh items-center justify-center overflow-x-hidden px-4">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[420px] w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[var(--accent)]/[0.025] via-[var(--accent)]/[0.03] to-transparent blur-3xl" />
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <h1 className="hero-name font-display max-w-full text-[clamp(1.85rem,6.4vw,5.75rem)] leading-[1.02] font-medium tracking-[-0.035em] text-[var(--ink)] uppercase">
          <span className="block">Wachayathorn</span>
          <span className="block">Singsena</span>
        </h1>
        <span className="hero-rule block" />
        <p className="hero-copy mt-6 text-lg font-medium tracking-wide text-[var(--accent)] uppercase sm:text-2xl">
          Software Engineer
        </p>
        <p className="hero-copy mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
          Software Engineer with at least six years of experience. Specializes in scalable
          microservices and high-performance APIs. Proficient in concurrency, distributed systems,
          and the optimization of backend architectures for reliability. Experience includes API
          design, database design, message queues, and cloud-native infrastructure.
        </p>
      </div>
    </section>
  );
}
