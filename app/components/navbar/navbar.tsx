export default function Navbar() {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="container mx-auto max-w-7xl h-auto p-5 flex flex-col items-center md:flex-row md:justify-center">
        <ul className="flex flex-col md:flex-row">
          <li className="mx-10 text-center"><span className="cursor-pointer">Home</span></li>
          <li className="mx-10 text-center"><span className="cursor-pointer">Experience</span></li>
          <li className="mx-10 text-center"><span className="cursor-pointer">Education</span></li>
          <li className="mx-10 text-center"><span className="cursor-pointer">Skill</span></li>
          <li className="mx-10 text-center"><span className="cursor-pointer">Contact</span></li>
        </ul>
      </div>
    </div>
  );
}
