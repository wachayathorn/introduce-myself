import Link from 'next/link';
import { experiences } from '@/data/experiences';

export default function ExperienceDetailPage({ params }) {
  const experience = experiences.find(exp => exp.id === parseInt(params.id));

  if (!experience) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Experience Not Found
          </h1>
          <Link href="/experience" className="text-red-500 hover:underline">
            ← Back to Experience
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back Link */}
        <Link 
          href="/experience" 
          className="inline-flex items-center text-red-500 hover:underline mb-8"
        >
          ← Back to Experience
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {experience.title}
          </h1>
          <p className="text-2xl text-red-500 mb-2">
            {experience.company}
          </p>
          <p className="text-gray-600 font-medium">
            {experience.period} {experience.current && '(Current)'}
          </p>
        </div>

        {/* Description */}
        <div className="bg-gray-50 rounded-xl p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            About the Role
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {experience.description}
          </p>
        </div>

        {/* Responsibilities */}
        <div className="bg-white border-2 border-gray-200 rounded-xl p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Responsibilities
          </h2>
          <ul className="space-y-3">
            {experience.responsibilities.map((resp, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-500 mr-3">•</span>
                <span className="text-gray-700">{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {experience.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all experiences
export function generateStaticParams() {
  return experiences.map(exp => ({
    id: exp.id.toString()
  }));
}
