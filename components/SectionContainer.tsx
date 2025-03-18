import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, Variants } from 'framer-motion';

interface SectionContainerProps {
  children: ReactNode;
  cN?: String;
  id?: String;
  style?: any;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SectionContainer: React.FC<SectionContainerProps> = ({ children, cN, id, style }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '0px 0px',
  });
  return (
    <motion.div
      style={style}
      ref={ref}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      id={`${id}`}
      transition={{ delay: 0.5, duration: 0.25 }}
      className={`flex w-full relative flex-wrap  overflow-hidden lg:px-10 2xl:px-44 ${cN}`}
    >
      {children}
    </motion.div>
  );
};

export default SectionContainer;
