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
      <div className='md:flex-1 m-0 flex justify-center flex-col gap-5 mt-5 md:mt-0 w-full'>
        <h1 className={`text-green-700 font-semibold text-sm opacity-${animationProgress >= 0 ? '100' : '0'}`}>
          <span className='animate-pulse'>👋</span> Alexander Micua Here
        </h1>

        <h2 className={`text-green-700 font-semibold -mt-3 text-sm opacity-${animationProgress >= 2 ? '100' : '0'}`}>
          <span className='animate-pulse'> 👉</span> You can call me Xandre
        </h2>

        <h2 className={`text-3xl font-extrabold uppercase text-start opacity-${animationProgress >= 3 ? '100' : '0'}`}>
          Dream. Develop. Deliver.
        </h2>
        <h3
          className='text-sm'
          id='typewriter'
          style={{ opacity: animationProgress >= 4 ? 1 : 0 }}
        ></h3>

        <Button
          text='Browse Projects'
          cN=' text-xs h-fit !bg-gray-800 !text-white opacity-80 hover:opacity-100'
          style={{ opacity: animationProgress >= 5 ? 1 : 0 }}
        />
      </div>
      <div className='md:flex-1 m-0 h-full   flex items-center justify-center overflow-hidden md:overflow-auto -mt-20 md:mt-0 '>
        <TextShpere />
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
