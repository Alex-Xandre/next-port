import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { containerVariantsTop } from '@/app/page';
interface TitleProps {
  text: string;
  cN?: string;
}

const Title = ({ text, cN }: TitleProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px',
  });

  return (
    <motion.h1
      variants={containerVariantsTop}
      ref={ref}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay: 0.5, duration: 0.1 }}
      className={`w-full text-3xl font-bold text-center ${cN}`}
    >
      {text}
    </motion.h1>
  );
};

export default Title;
