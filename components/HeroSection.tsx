'use client';
import React, { useEffect, useState } from 'react';
import SectionContainer from './SectionContainer';
import Button from './utils/Button';
import TextShpere from './utils/TextSphere';

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

  useEffect(() => {
    const words = [`Let's build something amazing together!`, 'Put your startup ideas to reality'];
    let i = 0;
    const fadeDuration = 1000;
    const pauseDuration = 5000;

    const typewriterElement = document.getElementById('typewriter');

    function displayNextSentence() {
      if (typewriterElement !== null) {
        typewriterElement.className === 'transition-opacity ease-in-out duration-300';
        setTimeout(() => {
          typewriterElement.textContent = words[i];

          i = (i + 1) % words.length;
        }, fadeDuration);
        setTimeout(displayNextSentence, pauseDuration + fadeDuration);
      }
    }

    displayNextSentence();
  }, []);

  return (
    <SectionContainer
      id='home'
      cN='h-[calc(100dvh)]'
    >
      <div className='md:flex-1 m-0 flex justify-center items-center flex-col gap-3 md:mt-0 w-full'>
        <h1
          className={`text-green-700 font-semibold flex items-center flex-col w-full text-center justify-center text-xl opacity-${
            animationProgress >= 0 ? '100' : '0'
          }`}
        >
          <span className='animate-pulse m-0'>👋 👋 👋</span>
          <span>Alexander Micua here,</span>
          <span>you can call me Xandre</span>
        </h1>

        <h2
          className={` w-full  text-center  text-[3rem] font-extrabold uppercase  opacity-${
            animationProgress >= 3 ? '100' : '0'
          }`}
        >
          Dream. Develop. Deliver.
        </h2>
        <h3
          className='text-sm  text-center'
          id='typewriter'
          style={{ opacity: animationProgress >= 4 ? 1 : 0 }}
        ></h3>
        <hr />
        <div className=' flex gap-3'>
          <Button
            text='Browse Projects'
            cN=' text-xs h-fit !bg-gray-800 !text-white opacity-80 hover:opacity-100'
            onClick={() => {
              const element = document.getElementById('projects');
              if (element) {
                element.scrollIntoView({
                  behavior: 'smooth',
                });
              }
            }}
          />

          <a
            href='https://github.com/Alex-Xandre'
            target='_blank'
            rel='noopener noreferrer'
            className=' bg-blue-100 font-[500] hover:bg-blue-200 hover:text-slate-800 ease-in-out  transition-all opacity-90 hover:opacity-100 md:w-fit py-2 px-4 rounded text-slate-800 m-0 flex align-center justify-center text-xs '
          >
            Github
          </a>
          <a
            href='https://www.linkedin.com/in/alexander-micua-04657a217/'
            target='_blank'
            rel='noopener noreferrer'
            className=' bg-white font-[500] hover:bg-blue-200 text-blue-600 hover:text-slate-800 ease-in-out  transition-all opacity-90 hover:opacity-100 md:w-fit py-2 px-4 rounded text-slate-800 m-0 flex align-center justify-center text-xs '
          >
            Linkedin
          </a>
        </div>
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
