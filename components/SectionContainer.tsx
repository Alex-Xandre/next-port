import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { motion, Variants } from "framer-motion";

interface SectionContainerProps {
  children: ReactNode;
  cN?: String;
  id?: String;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  cN,
  id,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false, 
    rootMargin: "0px 0px",
  });
  return ( 
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      id={`${id}`}
      transition={{ delay: 0.5, duration: 0.25 }}
      className={`flex w-full  flex-wrap px-4 lg:px-12 2xl:px-44 ${cN}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionContainer;
