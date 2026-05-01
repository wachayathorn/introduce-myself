import { experiences } from "@/lib/data";
import Line from "../ui/line";

export default function Experience() {
  return (
    <div id="experience" className="flex min-h-screen snap-start grow items-center bg-white">
      <div className="container flex flex-col mx-auto max-w-7xl">
        <div className="gap-10 flex flex-col md:flex md:flex-row">
          <div className="md:w-1/2 flex flex-col text-center md:text-end p-5">
            <h1 className="text-3xl md:text-4xl font-bold p-5">
              <span className="text-[35px]">5 YEARS OF</span> <br />
              <span className="text-gray-muted">EXPERIENCE</span>
            </h1>
          </div>
          <div className="md:w-1/2 flex flex-col text-center p-5 md:text-left">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="hover:bg-white-off hover:z-50 hover:shadow-lg flex flex-col p-6 rounded-xl border border-gray-light transition-all duration-300 mb-8"
              >
                <h2 className="text-2xl font-semibold text-black">{experience.title}</h2>
                <h3 className="text-xl font-medium text-black">{experience.company}</h3>
                <p className="text-gray-muted mt-2">
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
