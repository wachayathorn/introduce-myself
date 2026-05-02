import { FaGithub, FaLinkedin } from "react-icons/fa";
import Line from "../ui/line";

export default function Welcome() {
  return (
    <div
      id="home"
      className="premium-surface relative flex min-h-screen snap-start grow items-center justify-center overflow-hidden"
    >
      {/* Floating Decorative Elements */}
      <div className="absolute top-24 left-10 w-28 h-28 bg-gradient-to-br from-black/5 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-24 right-10 w-36 h-36 bg-gradient-to-br from-gray-medium/10 to-transparent rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto max-w-6xl h-auto p-6 flex flex-col text-center items-center relative z-10">
        <span className="animate-reveal-up inline-flex items-center rounded-full border border-gray-light bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gray-muted shadow-sm">
          Backend-focused Software Engineer
        </span>
        {/* Name with Animated Gradient */}
        <h1 className="mt-8 font-bold text-4xl sm:text-6xl md:text-8xl leading-none tracking-[-0.06em] animate-fade-in-up animation-delay-200">
          <span className="inline-block bg-gradient-to-r from-black via-gray-medium to-black bg-size-[200%_100%] animate-gradient-text bg-clip-text text-transparent">
            WACHAYATHORN
          </span>
          <span className="text-gray-muted">
            {" "}
            SINGSENA
          </span>
        </h1>

        {/* Job Title */}
        <h2 className="text-xl font-semibold pt-6 animate-fade-in-up animation-delay-300 text-black">
          Software Engineer
        </h2>

        {/* Description */}
        <p className="text-gray-muted font-medium pt-4 max-w-3xl animate-fade-in-up animation-delay-400 leading-8">
          With 5+ years of experience, specializing in building scalable
          microservices and high-performance APIs. <br />
          Skilled in concurrency, distributed systems, and optimizing backend
          architectures for reliability. <br />
          Experienced in API design, database design, message queues, and
          cloud-native infrastructure.
        </p>

        {/* Social Buttons with Enhanced Hover */}
        <div className="flex flex-col-2 md:flex md:flex-row pt-10 gap-3 animate-fade-in-up animation-delay-500">
          <a
            href="https://github.com/wachayathorn"
            target="_blank"
            className="group bg-black flex flex-row h-auto w-auto gap-2 px-6 py-3 rounded-full items-center text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black-dark hover:shadow-xl"
          >
            <FaGithub className="transition-transform duration-300 group-hover:rotate-12" />
            Github
          </a>
          <a
            href="https://linkedin.com/in/wachayathorn"
            target="_blank"
            className="group flex flex-row h-auto gap-2 px-6 py-3 rounded-full items-center border border-gray-light bg-white/70 text-black transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-xl"
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
