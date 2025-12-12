import { FaGithub, FaLinkedin } from "react-icons/fa";
import Line from "../line/line";

export default function Welcome() {
  return (
    <div className="container mx-auto max-w-7xl h-auto p-5 flex flex-col md:pt-25 text-center items-center">
      <h1 className="text-7xl font-bold">
        <span className="text-black">WACHAYATHORN </span>
        <span className="text-[#4D4D4D]">SINGSENA</span>
      </h1>
      <h2 className="text-xl font-semibold pt-5">Software Engineer</h2>
      <p className="text-[#4D4D4D] font-medium pt-2.5">
        With 5+ years of experience, specializing in building scalable
        microservices and high-performance APIs. <br />
        Skilled in concurrency, distributed systems, and optimizing backend
        architectures for reliability. <br />
        Experienced in API design, database design, message queues, and
        cloud-native infrastructure.
      </p>
      <div className="flex flex-col-2 md:flex md:flex-row py-10 gap-2.5">
        <a
          href="https://github.com/wachayathorn"
          target="_blank"
          className="bg-black flex flex-row h-auto w-auto gap-2 p-2 rounded-xl items-center text-white hover:bg-[#FAFAFA] hover:text-black"
        >
          <FaGithub />
          Github
        </a>
        <a
          href="https://linkedin.com/in/wachayathorn"
          target="_blank"
          className="bg-black flex flex-row h-auto gap-2 p-2 rounded-xl items-center text-white hover:bg-[#FAFAFA] hover:text-black"
        >
          <FaLinkedin />
          LinkedIn
        </a>
      </div>
      <Line />
    </div>
  );
}
