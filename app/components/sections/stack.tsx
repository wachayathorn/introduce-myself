import { stacks } from "@/lib/data";
import Line from "../ui/line";

export default function Stack() {
  return (
    <div id="stack" className="flex min-h-screen snap-start grow items-center bg-white-off">
      <div className="container mx-auto max-w-7xl h-auto p-5 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold p-5 text-center text-black">
          Technologies I Work With <br />
          <span className="text-gray-muted font-light text-xs md:text-xl">
            Tech stack I have experience in
          </span>
        </h1>
        <div className="flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-row md:justify-between">
          {stacks.map((stackCategory) => (
            <div
              key={stackCategory.title}
              className="flex flex-col items-center bg-white border border-gray-light shadow-sm md:mx-2 my-2 rounded-2xl p-6 transition-all duration-300 hover:shadow-md"
            >
              <div className="font-bold text-xl md:text-2xl p-5 text-black">
                {stackCategory.title}
              </div>
              <ul className="grid grid-cols-2 gap-4 justify-center">
                {stackCategory.icons.map((icon, index) => (
                  <li
                    key={index}
                    className="p-3 rounded-xl hover:bg-white-off hover:scale-105 transition-all duration-300 flex flex-col items-center"
                  >
                    <img src={icon} className="w-10 h-10 md:w-14 md:h-14 m-2" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Line />
      </div>
    </div>
  );
}
