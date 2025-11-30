import { education } from '@/data/education';

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Education
          </h1>
          <p className="text-lg text-gray-600">
            My academic background
          </p>
        </div>

        {/* Education List */}
        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-white border-2 border-gray-200 rounded-xl p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h2>
                  <p className="text-xl text-red-500 mb-2">
                    {edu.institution}
                  </p>
                  {edu.gpa && (
                    <p className="text-gray-700 font-medium">
                      GPA: {edu.gpa}
                    </p>
                  )}
                </div>
                <span className="text-gray-600 font-medium">
                  {edu.period}
                </span>
              </div>

              {edu.location && (
                <p className="text-gray-600 mb-4">
                  📍 {edu.location}
                </p>
              )}

              {/* Achievements */}
              {edu.achievements && edu.achievements.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Achievements
                  </h3>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-3">•</span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
