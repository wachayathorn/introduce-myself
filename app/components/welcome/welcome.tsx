import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Welcome() {
  return (
    <div className="container mx-auto max-w-7xl h-auto p-5 flex flex-col md:py-35 md:px-55 justify-start">
      <h1 className="text-5xl font-bold">HI, I'M WACHAYATHORN SINGSENA</h1>
      <h2 className="text-xl font-semibold pt-5">Software Engineer</h2>
      <p className="text-[#4D4D4D] font-medium pt-2.5">
        With 5+ years of experience, specializing in building scalable
        microservices and <br />
        high-performance APIs. Skilled in concurrency, distributed systems, and
        optimizing backend architectures for reliability. Experienced in API
        design, database design, message queues, and cloud-native
        infrastructure.
      </p>
      <div className="flex flex-col-2 md:flex md:flex-row pt-5 gap-2.5">
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
    </div>
  );
}
