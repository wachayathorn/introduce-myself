import { FaGithub, FaLinkedin } from "react-icons/fa";
import Line from "../line/line";

export default function Welcome() {
  return (
    <div
      id="home"
      className="relative flex min-h-screen snap-start grow items-center justify-center overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-white via-[#FAFAFA] to-gray-100 animate-gradient-shift" />

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-linear-to-br from-black/5 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-linear-to-br from-gray-400/10 to-transparent rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto max-w-7xl h-auto p-5 flex flex-col text-center items-center relative z-10">
        {/* Name with Animated Gradient */}
        <h1 className="font-bold text-2xl sm:text-4xl md:text-7xl animate-fade-in-up">
          <span className="inline-block bg-linear-to-r from-black via-gray-800 to-black bg-size-[200%_100%] animate-gradient-text bg-clip-text text-transparent">
            WACHAYATHORN
          </span>
          <span className="text-[#4D4D4D] animate-fade-in-up animation-delay-200">
            {" "}
            SINGSENA
          </span>
        </h1>

        {/* Job Title */}
        <h2 className="text-xl font-semibold pt-5 animate-fade-in-up animation-delay-300">
          Software Engineer
        </h2>

        {/* Description */}
        <p className="text-[#4D4D4D] font-medium pt-2.5 max-w-3xl animate-fade-in-up animation-delay-400">
          With 5+ years of experience, specializing in building scalable
          microservices and high-performance APIs. <br />
          Skilled in concurrency, distributed systems, and optimizing backend
          architectures for reliability. <br />
          Experienced in API design, database design, message queues, and
          cloud-native infrastructure.
        </p>

        {/* Social Buttons with Enhanced Hover */}
        <div className="flex flex-col-2 md:flex md:flex-row pt-10 gap-2.5 animate-fade-in-up animation-delay-500">
          <a
            href="https://github.com/wachayathorn"
            target="_blank"
            className="group bg-black flex flex-row h-auto w-auto gap-2 px-4 py-2 rounded-xl items-center text-white transition-all duration-300 hover:bg-[#FAFAFA] hover:text-black hover:scale-105 hover:shadow-2xl"
          >
            <FaGithub className="transition-transform duration-300 group-hover:rotate-12" />
            Github
          </a>
          <a
            href="https://linkedin.com/in/wachayathorn"
            target="_blank"
            className="group bg-black flex flex-row h-auto gap-2 px-4 py-2 rounded-xl items-center text-white transition-all duration-300 hover:bg-[#FAFAFA] hover:text-black hover:scale-105 hover:shadow-2xl"
          >
            <FaLinkedin className="transition-transform duration-300 group-hover:rotate-12" />
            LinkedIn
          </a>
        </div>

        <div className="animate-fade-in-up animation-delay-600">
          <Line />
        </div>
      </div>
    </div>
  );
}
