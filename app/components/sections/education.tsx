import { education } from "@/lib/data";
import Line from "../ui/line";

export default function Education() {
  return (
    <div
      id="education"
      className="flex min-h-screen snap-start grow items-center bg-white"
    >
      <div className="container mx-auto max-w-7xl h-auto flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold p-5 text-center text-black">
          Education
        </h1>
        <a href="https://www.rmutt.ac.th/" target="_blank">
          <img src="/rmutt.png" width={100} height={120} />
        </a>
        <div className="hover:bg-white-off hover:shadow-lg flex flex-col p-6 rounded-xl items-center border border-gray-light transition-all duration-300">
          <h2 className="text-2xl font-semibold text-center text-black">
            {education.degree}
          </h2>
          <h3 className="text-xl font-medium text-center text-black">
            {education.institution}
          </h3>
          <p className="text-gray-muted text-center mt-2">
            {education.period} <br /> {education.location}
          </p>
        </div>
        <Line />
      </div>
    </div>
  );
}
