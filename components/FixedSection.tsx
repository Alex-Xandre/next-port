'use client';
import React, { useState } from 'react';
import Button from './utils/Button';
import { projectData } from './json/projectData';
import { CgArrowTopRight } from 'react-icons/cg';
import { ChevronDown, Folder, Tv } from 'lucide-react';
import Image from 'next/image';

const FixedSection = () => {
  const [open, setOpen] = useState(true);

  const redirectProject = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  const toggleOpen = () => setOpen((prev) => !prev);
  return (
    <div
      className={`m-0 mt-5 flex-1 w-54 lg:fixed left-0 top-7 z-50 bg-white border rounded-md lg:rounded-none lg:border-t-0 lg:!border-r p-4 lg:w-72 w-full dark:bg-black/80 transition-all duration-500 ease-in-out overflow-hidden ${
        open ? 'h-screen' : 'max-h-[60px] !rounded-r-lg'
      }`}
    >
      <div
        className='text-sm font-medium flex items-center justify-between dark:text-white cursor-pointer select-none'
        onClick={toggleOpen}
      >
        <span className='m-0'>Recent Projects</span>
        <ChevronDown
          size={18}
          className={`m-0 transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>

      <div
        className={`transition-all duration-500 ease-in-out transform ${
          open ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0 pointer-events-none'
        }`}
      >
        <div className='rounded flex-grow mt-2 space-y-1'>
          {projectData.map((item, index) => (
            <ProjectCard
              data={item}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ data }: any) => {
  const [active, setActive] = useState(false);

  const handleVisitSite = () => window.open(data?.web_link, '_blank');
  const toggleActive = () => setActive((prev) => !prev);

  return (
    <div className='w-full'>
      <div
        className='text-sm lowercase hover:underline group flex items-center gap-1 text-start !font-normal cursor-pointer mt-2 *:m-0 transition-all duration-300 ease-in-out dark:text-white'
        onClick={toggleActive}
      >
        <Image
          src='https://res.cloudinary.com/dfhhkd04c/image/upload/v1753756678/519598439_1493608591625050_6725044023529033978_n_cdcy56.jpg'
          alt='banner 2'
          width={12}
          height={12}
          className='rounded-full'
        />
        <span>Xandre/</span>
        <span>{data.title}</span>
        <span
          className={`transform transition-transform duration-300 group-hover:opacity-100 opacity-0 ${
            active ? 'rotate-180 !opacity-100' : 'rotate-0'
          }`}
        >
          <ChevronDown size={14} />
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all border-b border-gray-100 dark:border-gray-50 duration-300 ease-in-out ${
          active ? 'max-h-44 opacity-100 translate-y-0 pb-2 ' : 'max-h-0 opacity-0 -translate-y-2'
        }`}
      >
        <h2
          className='opacity-60 text-sm italic inline-flex group items-center hover:underline dark:opacity-80 cursor-pointer gap-1 dark:text-white/80 '
          onClick={handleVisitSite}
        >
          {data?.web_link}
          <CgArrowTopRight className='group-hover:translate-x-1 transition-transform duration-200 opacity-0 group-hover:opacity-100' />
        </h2>
        <div className='flex flex-wrap gap-2 mt-1'>
          {data.stack?.map(
            (
              x:
                | string
                | number
                | bigint
                | boolean
                | React.ReactElement<any, string | React.JSXElementConstructor<any>>
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | Promise<React.AwaitedReactNode>
                | null
                | undefined,
              index: React.Key | null | undefined
            ) => (
              <div
                className='text-[11px] m-0 rounded-md bg-blue-100 py-0.5 px-1 flex items-center gap-2 dark:text-black'
                key={index}
              >
                <p className='h-2 w-2 bg-green-500 rounded-full'></p> {x}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default FixedSection;
