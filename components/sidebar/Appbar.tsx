'use client';

import { CloseIcon, MenuIcon } from '../utils/Icon';
import { useEffect, useMemo, useState } from 'react';
import { useSidebar } from './sidebar-context.';
import { CalendarCheck, ChevronsLeftRight, FolderOpen, GithubIcon, HomeIcon, MoonIcon, SunIcon } from 'lucide-react';
import { BsLinkedin } from 'react-icons/bs';

const Menu = [
  {
    name: 'Home',
    url: 'home',
    icon: <HomeIcon className='h-4 m-0' />,
  },
  {
    name: 'About',
    url: 'about',
    icon: <ChevronsLeftRight className='h-4 m-0' />,
  },
  {
    name: 'Projects',
    url: 'projects',
    icon: <FolderOpen className='h-4 m-0' />,
  },
  {
    name: 'Experience',
    url: 'experience',
    icon: <CalendarCheck className='h-4 m-0' />,
  },
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
      <nav className='h-16  border-gray-200 w-full text-gray-600 p-4 md:p-0  md:bg-transparent'>
        <div
          className='m-0 w-fit cursor-pointer md:hidden'
          onClick={handleMenu}
        >
          <MenuIcon />
        </div>
        <div
          className={`ease-in-out transition-all absolute h-screen  top-0 left-0 w-6/12 p-4 flex flex-col ${
            !isSidebarOpen ? '-ml-[100%]' : 'ml-0'
          } md:relative md:!ml-0 md:h-fit md:w-full md:flex md:flex-row md:justify-between md:shadow-none lg:px-12 2xl:px-44  z-10 bg-white md:bg-transparent dark:bg-black  dark:text-white
          h-full border-r md:border-r-0
          `}
        >
          <header className='w-full m-0 flex justify-between md:w-fit items-center gap-x-2 '>
            <h1
              className='text-xl font-semibold text-gray-700 dark:text-white'
              onClick={() => scrollToElement('home')}
            >
              Xandre
            </h1>

            <div
              className='m-0 h-fit cursor-pointer md:hidden'
              onClick={handleMenu}
            >
              <CloseIcon />
            </div>
          </header>

          {/* mobile */}
          <ul className='m-0 mt-5 md:mt-0  md:gap-4  px-0 md:px-10  md:hidden  space-y-2 h-full bg-white dark:bg-black '>
            {Menu?.map((x, index) => {
              const isActive = x.url === activeId;

              return (
                <li
                  key={index}
                  className={`py-1 cursor-pointer m-0 text-sm  flex items-center text-gray-500 dark:text-white ${
                    isActive ? ' border-b-2 border-black' : ''
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

            <div className='m-0 flex items-center gap-2 absolute bottom-0 md:hidden p-3 border-t w-full -ml-4'>
              <a
                href='https://github.com/Alex-Xandre'
                target='_blank'
                rel='noopener noreferrer'
                className=' bg-blue-100 font-[500] hover:bg-blue-200 hover:text-slate-800 ease-in-out  transition-all opacity-90 hover:opacity-100 md:w-fit p-2 rounded text-slate-800 m-0 flex align-center justify-center text-xs
            
              '
              >
                <GithubIcon className='h-4 w-4' />
              </a>
              <a
                href='https://www.linkedin.com/in/alexander-micua-04657a217/'
                target='_blank'
                rel='noopener noreferrer'
                className='border bg-white font-[500] p-2 items-center hover:bg-blue-200  hover:text-slate-800 ease-in-out  transition-all opacity-90 hover:opacity-100 md:w-fit  rounded text-slate-800 m-0 flex align-center justify-center text-xs '
              >
                <BsLinkedin className='h-4 w-4' />
              </a>
              <button
                onClick={toggleTheme}
                className='m-0 p-2 rounded -md shadow-sm  z-50 transition-colors duration-300 bg-gray-200 dark:bg-gray-500 text-black dark:text-white flex text-xs items-center gap-3'
              >
                {theme === 'dark' ? <SunIcon className='h-4 w-4' /> : <MoonIcon className='h-4 w-4' />}
              </button>
            </div>
          </ul>
        </div>
        <span className='absolute right-5 top-5 lg:hidden'>{getText(activeId)}</span>
      </nav>

      {/* desktop */}
      <div className='m-0 mt-5 md:mt-0  md:gap-4  px-0 md:px-3  hidden md:flex 2xl:px-44 bg-red justify-between '>
        <ul className='flex m-0 gap-3'>
          {Menu?.map((x, index) => {
            const isActive = x.url === activeId;

            return (
              <li
                key={index}
                className={`py-1 cursor-pointer m-0 text-sm  flex items-center text-gray-500 -mb-1.5 dark:text-white ${
                  isActive ? ' border-b-2 border-black dark:border-gray-200' : ''
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
        <div className='m-0 flex items-center gap-2 p-1'>
          <a
            href='https://github.com/Alex-Xandre'
            target='_blank'
            rel='noopener noreferrer'
            className=' bg-blue-100 font-[500] hover:bg-blue-200 hover:text-slate-800 ease-in-out  transition-all opacity-90 hover:opacity-100 md:w-fit p-2 rounded text-slate-800 m-0 flex align-center justify-center text-xs
              w-[calc(50%-10px)] 
              '
          >
            <GithubIcon className='h-4 w-4' />
          </a>
          <a
            href='https://www.linkedin.com/in/alexander-micua-04657a217/'
            target='_blank'
            rel='noopener noreferrer'
            className='border bg-white font-[500] p-2 items-center hover:bg-blue-200  hover:text-slate-800 ease-in-out  transition-all opacity-90 hover:opacity-100 md:w-fit  rounded text-slate-800 m-0 flex align-center justify-center text-xs '
          >
            <BsLinkedin className='h-4 w-4' />
          </a>
          <button
            onClick={toggleTheme}
            className='m-0 px-4 py-2 rounded -md shadow-sm  z-50 transition-colors duration-300 bg-gray-200 dark:bg-black text-black dark:text-white flex text-xs items-center gap-3'
          >
            {theme === 'dark' ? 'Light theme' : 'Dark theme'}
            {theme === 'dark' ? <SunIcon className='h-4 w-4' /> : <MoonIcon className='h-4 w-4' />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
