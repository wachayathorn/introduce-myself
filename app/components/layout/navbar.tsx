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
    <div className="sticky top-0 z-50 w-full border-b border-gray-light bg-white-off/85 backdrop-blur-xl">
      <nav className="container mx-auto max-w-6xl h-auto px-6 py-5 flex flex-col items-center md:flex-row md:justify-center">
        {!isHidden ? (
          <ul className="flex flex-col gap-4 md:flex-row md:gap-10">
            <li className="text-center">
              <a
                href="#home"
                className="group relative cursor-pointer text-xs font-semibold tracking-[0.18em] text-black transition-colors duration-200 hover:text-gray-muted"
              >
                HOME
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
            <li className="text-center">
              <a
                href="#experience"
                className="group relative cursor-pointer text-xs font-semibold tracking-[0.18em] text-black transition-colors duration-200 hover:text-gray-muted"
              >
                EXPERIENCE
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
            <li className="text-center">
              <a
                href="#stack"
                className="group relative cursor-pointer text-xs font-semibold tracking-[0.18em] text-black transition-colors duration-200 hover:text-gray-muted"
              >
                STACK
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
            <li className="text-center">
              <a
                href="#education"
                className="group relative cursor-pointer text-xs font-semibold tracking-[0.18em] text-black transition-colors duration-200 hover:text-gray-muted"
              >
                EDUCATION
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
            <li className="text-center">
              <a
                href="#contact"
                className="group relative cursor-pointer text-xs font-semibold tracking-[0.18em] text-black transition-colors duration-200 hover:text-gray-muted"
              >
                CONTACT
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
            {!isHidden && (
              <li className="text-center md:hidden">
                <a
                  className="cursor-pointer text-xs font-semibold tracking-[0.18em] text-black hover:text-gray-muted transition-colors duration-200"
                  onClick={() => setIsHidden(true)}
                >
                  ...
                </a>
              </li>
            )}
          </ul>
        ) : (
          <RxHamburgerMenu
            className="cursor-pointer text-black"
            onClick={() => setIsHidden(false)}
          />
        )}
      </nav>
    </div>
  );
}
