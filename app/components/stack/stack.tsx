import { stacks } from "@/app/data/stack";

export default function Stack() {
  return (
    <div id="stack" className="flex min-h-screen snap-start grow items-center">
      <div className="container mx-auto max-w-7xl h-auto p-5 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold p-5 text-center">
          Technologies I Work With <br /> 
          <span className="text-[#4D4D4D] font-light text-xs md:text-xl">
            Tech stack I have experience in
          </span>
        </h1>
        <div className="flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-row md:justify-between">
          {stacks.map((stackCategory) => (
            <div
              key={stackCategory.title}
              className="flex flex-col items-center shadow-2xl md:mx-2 my-2 rounded-3xl p-5"
            >
              <div className="font-bold text-xl md:text-2xl p-5">
                {stackCategory.title}
              </div>
              <ul className=" grid grid-cols-2 gap-4 justify-center">
                {stackCategory.icons.map((icon, index) => (
                  <li
                    key={index}
                    className="p-2 rounded-3xl hover:bg-[#d6d0d0] hover:scale-105 hover:z-50 hover:shadow-2xl transition-transform flex flex-col items-center"
                  >
                    <img src={icon} className="w-10 h-10 md:w-15 md:h-15 m-2" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
