'use client';

import { CloseIcon, MenuIcon } from '../utils/Icon';
import { useEffect, useMemo, useState } from 'react';
import { useSidebar } from './sidebar-context.';
import { CalendarCheck, FolderOpen, GithubIcon, Info, LayoutDashboardIcon, MoonIcon, SunIcon } from 'lucide-react';
import { BsLinkedin } from 'react-icons/bs';

const Menu = [
  {
    name: 'Home',
    url: 'home',
    icon: (
      <LayoutDashboardIcon
        size={14}
        strokeWidth={1.5}
      />
    ),
  },
  {
    name: 'About',
    url: 'about',
    icon: (
      <Info
        size={14}
        strokeWidth={1.5}
      />
    ),
  },
  {
    name: 'Projects',
    url: 'projects',
    icon: (
      <FolderOpen
        size={14}
        strokeWidth={1.5}
      />
    ),
  },
  // {
  //   name: 'Experience',
  //   url: 'experience',
  //   icon: (
  //     <CalendarCheck
  //       size={14}
  //       strokeWidth={1.5}
  //     />
  //   ),
  // },
];
const Appbar = () => {
  const { isSidebarOpen, toggleSidebarOpen } = useSidebar();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeId, setActiveId] = useState('home');

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
      setActiveId(active ? active.id : 'home');
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenu = () => {
    toggleSidebarOpen();
  };

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const getText = useMemo(() => {
    const labelMap: Record<string, string> = {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
    };
    return (text: string) => labelMap[text] || text;
  }, []);

  //theming
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      const defaultTheme = prefersDark ? 'dark' : 'light';
      setTheme(defaultTheme);
      document.documentElement.classList.toggle('dark', defaultTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div
      className={`sticky top-0 z-20 bg-gray-50  border-b dark:border-gray-700  pb-1 dark:text-white dark:bg-black
     ${hasScrolled ? 'border-b border-gray-200' : ''}
    `}
    >
      <div className='m-0   md:gap-4 pt-1  px-0 md:px-3 flex justify-between  '>
        <ul className='flex m-0 gap-3'>
          {Menu?.map((x, index) => {
            const isActive = x.url === activeId;

            return (
              <li
                key={index}
                className={` gap-2 cursor-pointer m-0 text-sm  flex items-center text-gray-500 hover:bg-gray-100  dark:text-white relative px-4 hover:dark:bg-slate-800 rounded-md ${
                  isActive
                    ? ' text-black after:content-[""] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-[1px] after:bg-black bg-gray-100 dark:bg-slate-800'
                    : ''
                }`}
                onClick={() => {
                  scrollToElement(x.url);
                  toggleSidebarOpen();
                }}
              >
                <span>{x.icon}</span>
                <span className='hidden md:block'> {x.name}</span>
              </li>
            );
          })}
        </ul>
        <div className='m-0 flex items-center gap-2 p-1'>
          <a
            href='https://github.com/Alex-Xandre'
            target='_blank'
            rel='noopener noreferrer'
            className=' bg-blue-100 font-[500] hover:bg-blue-200 hover:text-slate-800 ease-in-out  transition-all opacity-90 hover:opacity-100 md:w-fit p-2 rounded text-slate-800 m-0 flex align-center justify-center text-xs
              w-[calc(50%-10px)] 
              '
          >
            <GithubIcon
              size={14}
              strokeWidth={1.5}
            />
          </a>
          <a
            href='https://www.linkedin.com/in/alexander-micua-04657a217/'
            target='_blank'
            rel='noopener noreferrer'
            className=' bg-white font-[500] p-2 items-center hover:bg-blue-200  hover:text-slate-800 ease-in-out  transition-all opacity-90 hover:opacity-100 md:w-fit  rounded text-slate-800 m-0 flex align-center justify-center text-xs '
          >
            <BsLinkedin size={14} />
          </a>
          <button
            onClick={toggleTheme}
            className='m-0 p-2 rounded -md shadow-sm  z-50 transition-colors duration-300 bg-gray-200 dark:bg-black text-black dark:text-white flex text-xs items-center gap-3'
          >
            {theme === 'dark' ? (
              <SunIcon
                size={14}
                strokeWidth={1.5}
              />
            ) : (
              <MoonIcon
                size={14}
                strokeWidth={1.5}
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
