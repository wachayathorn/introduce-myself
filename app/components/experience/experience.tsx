import { experiences } from "@/app/data/experiences";
import Line from "../line/line";

export default function Experience() {
  return (
    <div className="flex min-h-screen snap-start grow items-center">
      <div className="container flex flex-col mx-auto max-w-7xl">
        <div className="p-5 gap-10 flex flex-col md:flex md:flex-row">
          <div className="md:w-1/2 flex flex-col text-center md:text-end p-5">
            <h1 className="text-3xl md:text-4xl font-bold p-5">
              <span className="text-[35px]">5 YEARS OF</span> <br />
              <span className="text-[#4D4D4D]">EXPERIENCE</span>
            </h1>
          </div>
          <div className="md:w-1/2 flex flex-col text-center p-5 md:text-left">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="hover:bg-[#FAFAFA] flex flex-col p-5 rounded-xl"
              >
                <h2 className="text-2xl font-semibold">{experience.title}</h2>
                <h3 className="text-xl font-medium">{experience.company}</h3>
                <p className="text-gray-600">
                  {experience.period} <br /> {experience.location}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Line />
      </div>
    </div>
  );
}
