"use client";

import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function isMobileWidth(width: number) {
  return width < 768;
}

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    function handleResize() {
      const newWidth = window.innerWidth;
      if (isMobileWidth(newWidth)) {
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
          <ul className="flex flex-col md:flex-row">
            <li className="mx-10 text-center">
              <a href="#home" className="cursor-pointer hover:font-extrabold">
                HOME
              </a>
            </li>
            <li className="mx-10 text-center">
              <a
                href="#experience"
                className="cursor-pointer hover:font-extrabold"
              >
                EXPERIENCE
              </a>
            </li>
            <li className="mx-10 text-center">
              <a href="#stack" className="cursor-pointer hover:font-extrabold">
                STACK
              </a>
            </li>
            <li className="mx-10 text-center">
              <a
                href="#education"
                className="cursor-pointer hover:font-extrabold"
              >
                EDUCATION
              </a>
            </li>
            <li className="mx-10 text-center">
              <a
                href="#contact"
                className="cursor-pointer hover:font-extrabold"
              >
                CONTACT
              </a>
            </li>
            {!isHidden && (
              <li className="mx-10 text-center md:hidden">
                <a
                  className="cursor-pointer hover:font-extrabold"
                  onClick={() => setIsHidden(true)}
                >
                  ...
                </a>
              </li>
            )}
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
