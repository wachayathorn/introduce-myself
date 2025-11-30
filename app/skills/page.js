import { skills } from '@/data/skills';

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Skills
          </h1>
          <p className="text-lg text-gray-600">
            My technical expertise
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-8">
          {Object.entries(skills).map(([key, category]) => (
            <div key={key} className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {category.category}
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.items.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-red-50 hover:border-red-500 border-2 border-transparent transition-all"
                  >
                    <div className="text-3xl mb-2">
                      {/* You can replace this with actual icons later */}
                      💻
                    </div>
                    <span className="text-sm font-medium text-gray-900 text-center">
                      {skill.name}
                    </span>
                    <span className="text-xs text-gray-500 mt-1 capitalize">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-12 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Summary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">
                {Object.values(skills).reduce((acc, cat) => acc + cat.items.length, 0)}+
              </div>
              <div className="text-gray-600">Total Skills</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">
                {Object.keys(skills).length}
              </div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">
                5+
              </div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
