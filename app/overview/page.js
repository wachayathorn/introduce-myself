import { personalInfo } from '@/data/personal';

export default function OverviewPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Overview
          </h1>
          <p className="text-lg text-gray-600">
            Learn more about me
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {personalInfo.name}
          </h2>
          <p className="text-xl text-red-500 mb-6">
            {personalInfo.title}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {personalInfo.summary}
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Contact Information
          </h3>
          <div className="space-y-3">
            <div>
              <span className="font-semibold text-gray-700">Email:</span>{' '}
              <a href={`mailto:${personalInfo.email}`} className="text-red-500 hover:underline">
                {personalInfo.email}
              </a>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Phone:</span>{' '}
              <span className="text-gray-600">{personalInfo.phone}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Location:</span>{' '}
              <span className="text-gray-600">{personalInfo.location}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">LinkedIn:</span>{' '}
              <a 
                href={`https://${personalInfo.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-500 hover:underline"
              >
                {personalInfo.linkedin}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
