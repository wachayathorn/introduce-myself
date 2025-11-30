import Link from 'next/link';
import { experiences } from '@/data/experiences';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Experience
          </h1>
          <p className="text-lg text-gray-600">
            My 5+ years professional journey
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <Link
              key={exp.id}
              href={`/experience/${exp.id}`}
              className="block bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-red-500 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {exp.title}
                  </h2>
                  <p className="text-xl text-red-500 mb-2">
                    {exp.company}
                  </p>
                </div>
                <span className="text-gray-600 font-medium">
                  {exp.period}
                </span>
              </div>

              <p className="text-gray-700 mb-4 line-clamp-3">
                {exp.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.slice(0, 5).map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {exp.technologies.length > 5 && (
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    +{exp.technologies.length - 5} more
                  </span>
                )}
              </div>

              <div className="mt-4 text-red-500 font-medium">
                View details →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
