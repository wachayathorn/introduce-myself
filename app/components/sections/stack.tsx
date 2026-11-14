import Reveal from "../ui/reveal";
import { currentTools, stacks } from "@/lib/data";

const labels: Record<string, string> = {
  bootstrap: "Bootstrap",
  tailwindcss: "Tailwind",
  react: "React",
  nextjs: "Next.js",
  java: "Java",
  kotlin: "Kotlin",
  spring: "Spring Boot",
  go: "Go",
  gin: "Gin",
  fiber: "Fiber",
  javascript: "JavaScript",
  typescript: "TypeScript",
  express: "Express",
  nestjs: "NestJS",
  mongodb: "MongoDB",
  mysql: "MySQL",
  mariadb: "MariaDB",
  postgresql: "PostgreSQL",
  microsoftsqlserver: "SQL Server",
  redis: "Redis",
  amazonwebservices: "AWS",
  firebase: "Firebase",
  googlecloud: "Google Cloud",
  docker: "Docker",
  kubernetes: "Kubernetes",
  terraform: "Terraform",
};

function toolName(iconUrl: string) {
  const match = iconUrl.match(/\/icons\/([^/]+)\//);
  const slug = match?.[1] ?? "";
  return labels[slug] ?? slug;
}

export default function Stack() {
  return (
    <section id="stack" className="bg-[var(--band)] px-4 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <Reveal className="topic mx-auto mb-10 max-w-2xl text-center">
          <span className="rounded-full bg-[var(--card)] px-3 py-1 text-xs font-bold tracking-wider text-[var(--muted)] uppercase shadow-sm">
            Stack
          </span>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-[var(--ink)]">
            Technologies I Work With
          </h2>
          <span className="section-rule center" />
          <p className="mt-2 text-[15px] text-[var(--muted)]">
            Backend technologies are the focus. Kotlin and Spring Boot are the primary tools. Cloud technologies support those services.
          </p>
        </Reveal>

        <Reveal delay={160} className="mb-6 flex flex-col items-start justify-between gap-6 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.04)] md:flex-row md:items-center md:p-8">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">Current technologies</h3>
              <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--accent)]" />
            </div>
            <p className="text-sm text-[var(--muted)]">Virtual Bank at Ascend Money</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {currentTools.map((tool) => (
              <span
                key={tool.name}
                title={tool.name}
                className="hover-pop flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--line)] bg-[var(--card)]"
              >
                <img src={tool.icon} alt={tool.name} className="h-8 w-8" />
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stacks.map((group, index) => (
            <Reveal key={group.title} delay={240 + index * 80} className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_4px_16px_rgba(0,0,0,0.03)]">
              <h3 className="mb-3 text-lg font-semibold">{group.title}</h3>
              <ul className="space-y-2.5 text-sm text-[var(--soft-text)]">
                {group.icons.map((icon) => (
                  <li key={icon} className="hover-line flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--ink)]" />
                    {toolName(icon)}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
