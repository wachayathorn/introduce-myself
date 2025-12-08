import { education } from "@/data";

export default function Education() {
  return (
    <section
      id="education"
      className="relative z-10 max-w-7xl mx-auto px-6 py-32"
    >
      {/* Section Header */}
      <div className="mb-16 animate-fade-in">
        <h2 className="text-5xl md:text-6xl font-black mb-2 tracking-tight">
          Education
        </h2>
        <div className="h-1 w-24 bg-linear-to-r from-red-500 to-red-400 rounded-full"></div>
      </div>

      {/* Education Cards */}
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className="animate-fade-in"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <div className="group border border-red-200 bg-white rounded-lg p-8 hover:border-red-300 hover:shadow-lg transition-all duration-300">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-black">{edu.degree}</h3>
                  <p className="text-lg text-red-500 font-semibold">
                    {edu.institution}
                  </p>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-500 mb-4">
                <span className="font-medium">{edu.period}</span>
                <span className="hidden md:inline">•</span>
                <span>📍 {edu.location}</span>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-4"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
