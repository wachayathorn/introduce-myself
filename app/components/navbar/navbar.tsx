"use client";

import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sticky top-0 w-full bg-[#FAFAFA] shadow-md">
      <nav className="container mx-auto max-w-7xl h-auto p-5 flex flex-col items-center md:flex-row md:justify-center">
        {!isHidden ? (
          <ul
            className="flex flex-col md:flex-row"
            onClick={() => setIsHidden(true)}
          >
            <li className="mx-10 text-center">
              <span className="cursor-pointer hover:font-extrabold">HOME</span>
            </li>
            <li className="mx-10 text-center">
              <span className="cursor-pointer hover:font-extrabold">
                EXPERIENCE
              </span>
            </li>
            <li className="mx-10 text-center">
              <span className="cursor-pointer hover:font-extrabold">
                EDUCATION
              </span>
            </li>
            <li className="mx-10 text-center">
              <span className="cursor-pointer hover:font-extrabold">SKILL</span>
            </li>
            <li className="mx-10 text-center">
              <span className="cursor-pointer hover:font-extrabold">
                CONTACT
              </span>
            </li>
          </ul>
        ) : (
          <RxHamburgerMenu
            className="cursor-pointer"
            onClick={() => setIsHidden(false)}
          />
        )}
      </nav>
    </div>
  );
}
