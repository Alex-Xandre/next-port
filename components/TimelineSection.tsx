import React from 'react';
import { timeLineData } from './json/timeLineData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { containerVariantsTop } from './json/containerVariantTops';
import SectionContainer from './SectionContainer';
import Title from './utils/Title';

const TimeLineSection = () => {
  return (
    <SectionContainer
      cN=' py-20'
      id='experience'
    >
      <Title text='Experience' />

      <div className='space-y-8  relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent mt-8 '>
        <div className='absolute top-0 left-1/2 transform -translate-x-px w-0.5 h-full bg-gradient-to-b from-transparent via-slate-300 to-transparent' />
        {timeLineData.map((item, index) => (
          <TimeLineItem
            key={index}
            index={index}
            item={item}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

const TimeLineItem = ({ index, item }: any) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px',
  });

  return (
    <motion.div
      key={index}
      className='relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active m-0 overflow-hidden px-1  '
      variants={containerVariantsTop}
      ref={ref}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay: 0.5, duration: 0.1 }}
    >
      <div className='text-sm m-0 flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-gray-50 text-slate-500 group-[.is-active]:text-emerald-50 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 '>
        {item?.ic}
      </div>

      <div className='w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow-sm m-0 dark:bg-black dark:border-gray-700'>
        <div className='flex lg:items-center lg:justify-between  mb-1 flex-col lg:flex-row '>
          <div className='font-bold text-slate-900 text-start m-0 dark:text-white'>{item.title}</div>
          <time className='font-medium text-indigo-500 text-sm text-start w-full lg:w-fit m-0 '>{item.date}</time>
        </div>
        <div className='text-slate-500 dark:text-white dark:text-opacity-80'>{item.description}</div>
      </div>
    </motion.div>
  );
};

export default TimeLineSection;
