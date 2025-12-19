import { education } from "@/app/data/education";
import Line from "../line/line";

export default function Education() {
  return (
    <div
      id="education"
      className="flex min-h-screen snap-start grow items-center"
    >
      <div className="container mx-auto max-w-7xl h-auto flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold p-5 text-center">
          Education
        </h1>
        <a href="https://www.rmutt.ac.th/" target="_blank">
          <img src="/rmutt.png" width={100} height={120} />
        </a>
        <div className="hover:bg-[#FAFAFA] hover:z-50 hover:shadow-2xl flex flex-col p-5 rounded-xl items-center">
          <h2 className="text-2xl font-semibold text-center">
            {education.degree}
          </h2>
          <h3 className="text-xl font-medium text-center">
            {education.institution}
          </h3>
          <p className="text-gray-600 text-center">
            {education.period} <br /> {education.location}
          </p>
        </div>
        <Line />
      </div>
    </div>
  );
}
