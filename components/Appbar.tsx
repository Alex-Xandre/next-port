"use client";

import { CloseIcon, MenuIcon } from "./Icon";
import { useState } from "react";

const Menu = [
  {
    name: "About",
    url: "about",
  },
  {
    name: "Projects",
    url: "projects",
  },
  {
    name: "Experience",
    url: "experience",
  },
  {
    name: "Contact",
    url: "contact",
  },
];
const Appbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <nav className="h-16 border-b border-gray-200 w-full text-gray-600 p-4 md:p-0 sticky top-0 z-20 bg-white">
      <div className="m-0 w-fit cursor-pointer md:hidden" onClick={handleMenu}>
        <MenuIcon />
      </div>
      <div
        className={`ease-in transition-all absolute h-screen bg-white shadow-lg top-0 left-0 w-6/12 p-4 flex flex-col ${
          !showMenu ? "-ml-[100%]" : "ml-0"
        } md:relative md:!ml-0 md:h-fit md:w-full md:flex md:flex-row md:justify-between md:shadow-none lg:px-12 2xl:px-44 md:border-b md:border-gray-200`}
      >
        <header className="w-full m-0 flex justify-between md:w-fit ">
          <h1
            className="text-xl font-semibold text-gray-700"
            onClick={() => scrollToElement("home")}
          >
            Xandre
          </h1>
          <div
            className="m-0 h-fit cursor-pointer md:hidden"
            onClick={handleMenu}
          >
            <CloseIcon />
          </div>
        </header>
        <ul className="m-0 mt-5 md:mt-0 md:flex md:gap-4">
          {Menu?.map((x, index) => {
            return (
              <li
                key={index}
                className="py-1 cursor-pointer md:m-0"
                onClick={() => scrollToElement(x.url)}
              >
                {x.name}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Appbar;
