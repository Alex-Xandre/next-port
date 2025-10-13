'use client';
import React, { useEffect, useState } from 'react';
import SectionContainer from './SectionContainer';
import Button from './utils/Button';
import TextShpere from './utils/TextSphere';
import { projectData } from './json/projectData';
import { CgArrowTopRight } from 'react-icons/cg';
import { timeLineData } from './json/timeLineData';
import { GithubIcon, SquareArrowOutUpRight } from 'lucide-react';
import { BsLinkedin } from 'react-icons/bs';

const HeroSection = () => {
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const animationTimings = [0, 1000, 2000, 2500, 3000];
    animationTimings.forEach((timing, index) => {
      setTimeout(() => {
        setAnimationProgress(index + 1);
      }, timing);
    });
  }, []);

  // useEffect(() => {
  //   const words = [
  //     `Let's build something amazing together!`,
  //     "Put your startup ideas to reality",
  //   ];
  //   let i = 0;
  //   const fadeDuration = 1000;
  //   const pauseDuration = 5000;

  //   const typewriterElement = document.getElementById("typewriter");

  //   function displayNextSentence() {
  //     if (typewriterElement !== null) {
  //       typewriterElement.className ===
  //         "transition-opacity ease-in-out duration-300";
  //       setTimeout(() => {
  //         typewriterElement.textContent = words[i];

  //         i = (i + 1) % words.length;
  //       }, fadeDuration);
  //       setTimeout(displayNextSentence, pauseDuration + fadeDuration);
  //     }
  //   }

  //   displayNextSentence();
  // }, []);

  const redirectProject = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <SectionContainer id='home'>
      <div className='md:flex-1 m-0 flex flex-col lg:flex-row  gap-3 md:mt-0 w-full  lg:px-0  pt-3 xl:pt-20 '>
        <div className=' pb-20 flex-1 w-full'>
          <TextShpere />
          <div className=' flex gap-3 items-center justify-center flex-wrap '>
            <Button
              text='Browse Projects'
              cN=' text-sm h-fit !bg-gray-800 !text-white opacity-80 hover:opacity-100 w-[calc(50%-10px)] md:w-fit'
              onClick={redirectProject}
              icon={<SquareArrowOutUpRight className='h-3.5 ml-2' />}
            />

            <a
              href='https://github.com/Alex-Xandre'
              target='_blank'
              rel='noopener noreferrer'
              className=' bg-blue-100 font-[500] hover:bg-blue-200  hover:text-slate-800 ease-in-out  transition-all opacity-90 hover:opacity-100 md:w-fit py-3 px-4 rounded text-slate-800 m-0 flex align-center justify-center text-sm
              w-[calc(50%-10px)] 
              '
            >
              Github
              <GithubIcon className='h-3.5 ml-2' />
            </a>
            <a
              href='https://www.linkedin.com/in/alexander-micua-04657a217/'
              target='_blank'
              rel='noopener noreferrer'
              className='border bg-white font-[500] w-[calc(100%-10px)] items-center hover:bg-blue-200  hover:text-slate-800 ease-in-out  transition-all opacity-90 hover:opacity-100 md:w-fit py-3 px-4 rounded text-slate-800 m-0 flex align-center justify-center text-sm '
            >
              Linkedin
              <BsLinkedin className='h-3.5 ml-2' />
            </a>
          </div>
        </div>

        <div className='m-0 mt-5 flex-1 h-fit  '>
          <div className='text-sm font-medium flex items-center justify-between'>
            <span className='m-0'>Experience</span>
          </div>

          <div className='border mt-5 flex-grow  rounded p-2 shadow-sm py-5'>
            <div className='flex flex-col items-start px-6 h-96 justify-between'>
              {timeLineData.map((event, index) => (
                <div
                  className='relative flex items-center m-0 group w-full  '
                  key={index}
                >
                  <div
                    className={`w-3 h-3 rounded-full border-2 transition-all ease-in-out flex-shrink-0 ${
                      index === 0 ? 'bg-black border-gray-300' : 'bg-gray-300 border-gray-300'
                    } group-hover:bg-black `}
                  ></div>

                  <div
                    className={`absolute left-1.5 w-px h-12 top-6  transition-all ease-in-out
            ${index !== timeLineData.length - 1 ? 'bg-gray-300' : 'bg-transparent'}`}
                  ></div>

                  <div className='ml-6 w-full'>
                    <span className='font-bold text-sm flex justify-between items-center w-full'>
                      <span className='m-0'>{event.title}</span>
                      <span className='m-0 px-1 py-0.5 rounded-md font-normal border shadow-sm  text-xs text-gray-500 dark:text-black dark:bg-gray-200'>
                        {event.currentYear}
                      </span>
                    </span>
                    <div className='italic text-xs text-gray-600 dark:text-white dark:opacity-80'>
                      {event.companyName}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='text-sm font-medium flex items-center justify-between '>
            <span className='m-0 mt-5'>Interest and Hobbies</span>
          </div>

          <h2 className='text-sm mt-5 pb-6'>
            Cybersecurity, Korean and Japanese languages, Forensics, Blockchain technology, Web3, and day trading.
          </h2>
        </div>
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
