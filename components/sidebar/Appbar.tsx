"use client";

import { CloseIcon, MenuIcon } from "../utils/Icon";
import { useEffect, useState } from "react";
import { useSidebar } from "./sidebar-context.";
import {
  CalendarCheck,
  ChevronsLeftRight,
  FolderOpen,
  HomeIcon,
} from "lucide-react";

const Menu = [
  {
    name: "Home",
    url: "home",
    icon: <HomeIcon className="h-4 m-0" />,
  },
  {
    name: "About",
    url: "about",
    icon: <ChevronsLeftRight className="h-4 m-0" />,
  },
  {
    name: "Projects",
    url: "projects",
    icon: <FolderOpen className="h-4 m-0" />,
  },
  {
    name: "Experience",
    url: "experience",
    icon: <CalendarCheck className="h-4 m-0" />,
  },
];
const Appbar = () => {
  const { isSidebarOpen, toggleSidebarOpen } = useSidebar();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = Menu.map((item) => document.getElementById(item.url));
      const active = sections.find((section) => {
        if (section) {
          const { top, height } = section.getBoundingClientRect();
          return top <= 20 && top + height > 0;
        }
        return false;
      });
      setActiveId(active ? active.id : "home");
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenu = () => {
    toggleSidebarOpen();
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
    <div
      className={`sticky top-0 z-20 bg-gray-50 border-b pb-1
     ${hasScrolled ? "border-b border-gray-200" : ""}
    `}
    >
      <nav className="h-16  border-gray-200 w-full text-gray-600 p-4 md:p-0  md:bg-transparent">
        <div
          className="m-0 w-fit cursor-pointer md:hidden"
          onClick={handleMenu}
        >
          <MenuIcon />
        </div>
        <div
          className={`ease-in-out transition-all absolute h-screen  top-0 left-0 w-6/12 p-4 flex flex-col ${
            !isSidebarOpen ? "-ml-[100%]" : "ml-0"
          } md:relative md:!ml-0 md:h-fit md:w-full md:flex md:flex-row md:justify-between md:shadow-none lg:px-12 2xl:px-44  z-10 bg-white md:bg-transparent`}
        >
          <header className="w-full m-0 flex justify-between md:w-fit items-center gap-x-2 ">
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

          <ul className="m-0 mt-5 md:mt-0  md:gap-4  px-0 md:px-10  md:hidden ">
            {Menu?.map((x, index) => {
              const isActive = x.url === activeId;

              return (
                <li
                  key={index}
                  className={`py-1 cursor-pointer m-0 text-sm  flex items-center text-gray-500 ${
                    isActive ? " border-b-2 border-black" : ""
                  }`}
                  onClick={() => {
                    scrollToElement(x.url);
                    toggleSidebarOpen();
                  }}
                >
                  {x.icon}
                  {x.name}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <ul className="m-0 mt-5 md:mt-0  md:gap-4  px-0 md:px-10  hidden lg:flex 2xl:px-44">
        {Menu?.map((x, index) => {
          const isActive = x.url === activeId;

          return (
            <li
              key={index}
              className={`py-1 cursor-pointer m-0 text-sm  flex items-center text-gray-500 ${
                isActive ? " border-b-2 border-black" : ""
              }`}
              onClick={() => {
                scrollToElement(x.url);
                toggleSidebarOpen();
              }}
            >
              {x.icon}
              {x.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Appbar;
