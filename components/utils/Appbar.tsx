'use client';

import { CloseIcon, MenuIcon } from './Icon';
import { useEffect, useState } from 'react';

const Menu = [
  {
    name: 'Home',
    url: 'home',
  },
  {
    name: 'About',
    url: 'about',
  },
  {
    name: 'Projects',
    url: 'projects',
  },
  {
    name: 'Experience',
    url: 'experience',
  },
];
const Appbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeId, setActiveId] = useState('');

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
      setActiveId(active ? active.id : '');
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
    setShowMenu(!showMenu);
  };

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  return (
    <nav className='h-16  border-gray-200 w-full text-gray-600 p-4 md:p-0 sticky top-0 z-20 bg-white md:bg-transparent'>
      <div
        className='m-0 w-fit cursor-pointer md:hidden'
        onClick={handleMenu}
      >
        <MenuIcon />
      </div>
      <div
        className={`ease-in-out transition-all absolute h-screen shadow-lg top-0 left-0 w-6/12 p-4 flex flex-col ${
          !showMenu ? '-ml-[100%]' : 'ml-0'
        } ${
          hasScrolled ? 'border-b border-gray-200 backdrop-blur-xl shadow-lg' : ''
        } md:relative md:!ml-0 md:h-fit md:w-full md:flex md:flex-row md:justify-between md:shadow-none lg:px-12 2xl:px-44 hover:bg-white z-10 bg-white md:bg-transparent`}
      >
        <header className='w-full m-0 flex justify-between md:w-fit '>
          <h1
            className='text-xl font-semibold text-gray-700'
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
        <ul className='m-0 mt-5 md:mt-0 md:flex md:gap-4'>
          {Menu?.map((x, index) => {
            const isActive = x.url === activeId;
            console.log(isActive);
            return (
              <li
                key={index}
                className={`py-1 cursor-pointer md:m-0 text-sm  wavy-effect ${isActive ? 'wavy-effect-active' : ''}`}
                onClick={() => {
                  scrollToElement(x.url);
                  setShowMenu(false);
                }}
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
