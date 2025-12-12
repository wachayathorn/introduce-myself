import { experiences } from "@/data/experiences";

export default function Experience() {
  return (
    <div className="container mx-auto max-w-7xl h-auto p-5 gap-10 flex flex-col md:px-55 md:flex md:flex-row">
      <div className="md:w-1/2 flex flex-col text-center md:text-end p-5">
        <h1 className="text-3xl md:text-4xl font-bold p-5">
          5 YEARS OF EXPERIENCE
        </h1>
      </div>
      <div className="md:w-1/2 flex flex-col text-center md:text-left p-5">
        {experiences.map((experience, index) => (
          <div className="hover:bg-[#FAFAFA] flex flex-col p-5 rounded-xl">
            <h2 key={index} className="text-2xl font-semibold">
              {experience.title}
            </h2>
            <h3 className="text-xl font-medium">{experience.company}</h3>
            <p className="text-gray-600">
              {experience.period} <br /> {experience.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
