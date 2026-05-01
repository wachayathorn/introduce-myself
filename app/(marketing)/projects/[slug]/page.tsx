import { projects } from "@/lib/data";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-600 mb-6">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-200 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
