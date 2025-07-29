'use client';
import React from 'react';
import SectionContainer from './SectionContainer';
import Image from 'next/image';
import Title from './utils/Title';
import { motion } from 'framer-motion';
import { containerVariantsTop } from './json/containerVariantTops';
import { useInView } from 'react-intersection-observer';
import { locations } from './json/locationData';
import { techImage } from './json/technologiesData';
import { socialData } from './json/socialData';
import { ArrowUp } from './utils/Icon';

const containerVariantsLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const containerVariantsRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const AboutSection = () => {

  const [refTop, inViewTop] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0,
  });

  const [refLeft, inViewLeft] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0,
  });

  const [refRight, inViewRight] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0,
  });

  return (
    <SectionContainer
      cN='bg-gray-50 py-20 px-3 lg:px-0'
      id='about'
    >
      <Title
        text='Who is Xandre?'
        cN='mb-10'
      />
      <div className='w-full lg:flex-1 m-0 flex justify-center items-center flex-col gap-5 text-sm'>
        <motion.div
          className='w-full md:w-96 flex -mt-10'
          variants={containerVariantsTop}
          ref={refTop}
          initial='hidden'
          animate={inViewTop ? 'visible' : 'hidden'}
          transition={{ delay: 0.5, duration: 0.1 }}
        >
          <Image
            src='https://res.cloudinary.com/dfhhkd04c/image/upload/v1753756678/519598439_1493608591625050_6725044023529033978_n_cdcy56.jpg'
            alt='banner 2'
            width={300}
            height={300}
            className='rounded-b-xl mt-3'
          />
        </motion.div>
      </div>
      <motion.div
        className='lg:w-1/2 m-0 flex items-start flex-col gap-6 mt-20 lg:mt-0'
        variants={containerVariantsTop}
        ref={refTop}
        initial='hidden'
        animate={inViewTop ? 'visible' : 'hidden'}
        transition={{ delay: 0.5, duration: 0.1 }}
      >
        <h2 className='flex items-start gap-1'>
          <span className='text-lg m-0 -ml-1'>🎓 </span> Graduated Last July 2022, worked on multiple projects for
          clients locally and internationally, helping them grow their startups and collaborating on future business
          ventures. With over 3 years of work experience and close training with a senior developer.
        </h2>

        <h2 className='flex items-start gap-1'>
          <span> 💼</span> Currently working as a FrontEnd Developer in a company in Belgium, Europe.
        </h2>

        <h2 className='text-sm font-semibold'>✔️ Successfully delivered 15+ international projects.</h2>
        <h2 className='text-sm font-semibold'>✔️ Brought and assisted 5 startup ideas to life.</h2>
        <h2 className='text-sm font-semibold'>✔️ Completed 35+ Philippine-based systems.</h2>

        <div className='w-full flex flex-wrap'>
          <p className='m-0 text-sm font-semibold w-full mb-3'>Social Links</p>
          {socialData.map((x, index: number) => (
            <p
              key={index}
              className={`text-sm flex items-center group `}
            >
              <span className='h-1 rounded-full w-1 bg-green-500'></span>
              &nbsp;
              <a
                href={x.url}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                {x.name}
              </a>
              <span className='hidden group-hover:block'>
                <ArrowUp />
              </span>{' '}
              &nbsp; &nbsp;
            </p>
          ))}
        </div>
      </motion.div>

      <motion.div
        className='w-full lg:w-1/2 m-0 mt-24 border border-gray-50 p-4 rounded-xl'
        variants={containerVariantsLeft}
        ref={refLeft}
        initial='hidden'
        animate={inViewLeft ? 'visible' : 'hidden'}
        transition={{ delay: 0.5, duration: 0.1 }}
      >
        <Title
          text='Technologies I work with'
          cN='mb-5 text-base'
        />

        <div className='flex flex-wrap gap-3 items-center justify-center'>
          {techImage.map((techs, index: number) => {
            return (
              <div
                key={index}
                className='group bg-white h-fit p-3 rounded-md hover:scale-105 ease-in-out duration-200 relative m-0 hover:bg-gray-50 box'
              >
                <Image
                  src={techs.url}
                  alt={techs.alt}
                  width={120}
                  height={100}
                  className='w-8 h-8 object-contain'
                />
                <p className='hidden group-hover:block absolute -bottom-2 font-medium text-primary text-xs -right-2 bg-white'>
                  {techs.alt}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        className='w-full lg:w-1/2 m-0 mt-24 border border-gray-50 p-4 rounded-xl'
        variants={containerVariantsRight}
        ref={refRight}
        initial='hidden'
        animate={inViewRight ? 'visible' : 'hidden'}
        transition={{ delay: 0.5, duration: 0.1 }}
      >
        <Title
          text='Clients I work with'
          cN='mb-5 text-base'
        />
        <div className='w-fit flex m-auto relative'>
          <Image
            src='https://res.cloudinary.com/dgb3br9x6/image/upload/v1713776463/worldmap_nhvikp.png'
            width={300}
            height={300}
            className='w-96 h-auto'
            alt=''
          />
          {locations.map((location, index) => (
            <div
              key={index}
              className={`text-sm absolute 
          ${location.left} ${location.top} ${location.right} ${location.bottom}
            } flex flex-wrap items-center gap-1 group `}
            >
              <div className='w-1 h-1 rounded-full bg-green-600 animate-pulse'></div>
              <p className='bg-white rounded-xl px-1 text-[9px]'>{location.name}</p>

              <p className='opacity-0 group-hover:opacity-100 w-24 px-2 text-[9px] transition-opacity ease-in-out right-0 absolute flex flex-shrink-0 bg-white rounded-xl'>
                ✔️ {location.totalProjects} Projects
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  );
};

export default AboutSection;
