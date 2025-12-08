import { experiences } from "@/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 max-w-7xl mx-auto px-6 py-32"
    >
      {/* Section Header */}
      <div className="mb-16 animate-fade-in">
        <h2 className="text-5xl md:text-6xl font-black mb-2 tracking-tight">
          Experience
        </h2>
        <div className="h-1 w-24 bg-linear-to-r from-red-500 to-red-400 rounded-full"></div>
      </div>

      {/* Experience Cards */}
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="animate-fade-in"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <div className="group border border-red-200 bg-white rounded-lg p-8 hover:border-red-300 hover:shadow-lg transition-all duration-300">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-black">{exp.title}</h3>
                  <p className="text-lg text-red-500 font-semibold">
                    {exp.company}
                  </p>
                </div>
                {exp.current && (
                  <div className="inline-flex w-fit bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                    Current
                  </div>
                )}
              </div>

              {/* Meta Info */}
              <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-500 mb-4">
                <span className="font-medium">{exp.period}</span>
                <span className="hidden md:inline">•</span>
                <span>📍 {exp.location}</span>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-4"></div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-black mb-3">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {exp.responsibilities.slice(0, 4).map((resp, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex gap-3">
                      <span className="text-red-500 font-bold shrink-0">
                        ✓
                      </span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-semibold text-black mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
