import Reveal from "../ui/reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-[var(--page)] px-4 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <Reveal className="topic">
          <span className="rounded-full bg-[var(--card)] px-3 py-1 text-xs font-bold tracking-wider text-[var(--muted)] uppercase shadow-sm">
            Contact
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[var(--ink)]">Get In Touch</h2>
          <span className="section-rule" />
          <p className="mt-2 text-lg font-semibold text-[var(--accent)]">
            Inquiries are welcome.
          </p>
          <p className="mt-4 text-[15px] leading-6 text-[var(--muted)]">
            Professional profiles are available on GitHub and LinkedIn.
          </p>
        </Reveal>
        <div className="mt-8 space-y-4">
          <Reveal delay={160}>
            <a
              href="https://github.com/wachayathorn"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border border-[var(--line)] bg-[var(--card)] p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition duration-300 hover:bg-[var(--hover-fill)] hover:text-[var(--hover-ink)]"
            >
              <img src="https://skillicons.dev/icons?i=github" alt="" className="h-10 w-10 rounded-lg bg-white" />
              <span>
                <span className="block text-[11px] tracking-wider text-[var(--muted)] uppercase">GitHub</span>
                <span className="font-semibold">github.com/wachayathorn</span>
              </span>
            </a>
          </Reveal>
          <Reveal delay={240}>
            <a
              href="https://linkedin.com/in/wachayathorn"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border border-[var(--line)] bg-[var(--card)] p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition duration-300 hover:bg-[var(--hover-fill)] hover:text-[var(--hover-ink)]"
            >
              <img src="https://skillicons.dev/icons?i=linkedin" alt="" className="h-10 w-10 rounded-lg bg-white" />
              <span>
                <span className="block text-[11px] tracking-wider text-[var(--muted)] uppercase">LinkedIn</span>
                <span className="font-semibold">linkedin.com/in/wachayathorn</span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
