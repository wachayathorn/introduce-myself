export default function Navbar() {
  return (
    <div className="bg-[#FAFAFA]">
      <nav className="container mx-auto max-w-7xl h-auto p-5 flex flex-col items-center md:flex-row md:justify-center">
        <ul className="flex flex-col md:flex-row">
          <li className="mx-10 text-center"><span className="cursor-pointer hover:font-extrabold">HOME</span></li>
          <li className="mx-10 text-center"><span className="cursor-pointer hover:font-extrabold">EXPERIENCE</span></li>
          <li className="mx-10 text-center"><span className="cursor-pointer hover:font-extrabold">EDUCATION</span></li>
          <li className="mx-10 text-center"><span className="cursor-pointer hover:font-extrabold">SKILL</span></li>
          <li className="mx-10 text-center"><span className="cursor-pointer hover:font-extrabold">CONTACT</span></li>
        </ul>
      </nav>
    </div>
  );
}
