import Reveal from "../ui/reveal";
import { currentTools, stacks } from "@/lib/data";

const labels: Record<string, string> = {
  html5: "HTML5",
  sass: "Sass",
  bootstrap: "Bootstrap",
  tailwindcss: "Tailwind",
  react: "React",
  nextjs: "Next.js",
  kotlin: "Kotlin",
  spring: "Spring",
  go: "Go",
  grpc: "gRPC",
  express: "Express",
  nestjs: "NestJS",
  graphql: "GraphQL",
  "dot-net": ".NET",
  mongodb: "MongoDB",
  mysql: "MySQL",
  mariadb: "MariaDB",
  postgresql: "PostgreSQL",
  microsoftsqlserver: "SQL Server",
  redis: "Redis",
  amazonwebservices: "AWS",
  googlecloud: "Google Cloud",
  firebase: "Firebase",
  docker: "Docker",
  kubernetes: "Kubernetes",
  terraform: "Terraform",
  jenkins: "Jenkins",
};

function toolName(iconUrl: string) {
  const match = iconUrl.match(/\/icons\/([^/]+)\//);
  const slug = match?.[1] ?? "";
  return labels[slug] ?? slug;
}

export default function Stack() {
  return (
    <section id="stack" className="bg-[#f3f4f5] px-4 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <Reveal className="topic mx-auto mb-10 max-w-2xl text-center">
          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold tracking-wider text-[#6C727F] uppercase shadow-sm">
            Stack
          </span>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-[#111418]">
            Technologies I Work With
          </h2>
          <p className="mt-2 text-[15px] text-[#6C727F]">
            Backend technologies are the focus. Kotlin and Spring Boot are the primary tools. Cloud technologies support those services.
          </p>
        </Reveal>

        <Reveal delay={80} className="mb-6 flex flex-col items-start justify-between gap-6 rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.04)] md:flex-row md:items-center md:p-8">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">Current technologies</h3>
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#e11d2e]" />
            </div>
            <p className="text-sm text-[#6C727F]">Virtual Bank at Ascend Money</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {currentTools.map((tool) => (
              <span
                key={tool.name}
                title={tool.name}
                className="hover-pop flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E5E7EB] bg-white"
              >
                <img src={tool.icon} alt={tool.name} className="h-8 w-8" />
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stacks.map((group, index) => (
            <Reveal key={group.title} delay={index * 70} className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-[0_4px_16px_rgba(0,0,0,0.03)]">
              <h3 className="mb-3 text-lg font-semibold">{group.title}</h3>
              <ul className="space-y-2.5 text-sm text-[#45474a]">
                {group.icons.map((icon) => (
                  <li key={icon} className="hover-line flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-black" />
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
