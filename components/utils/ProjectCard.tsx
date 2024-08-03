
import Image from 'next/image';
import Button from './Button';
import { useEffect, useRef, useState } from 'react'; // Import useRef
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { containerVariantsTop } from '../json/containerVariantTops';
import { ArrowUp, BackIcon } from './Icon';

interface ProjectCardProps {
  data: {
    title?: string;
    banner?: any;
    description?: string;
    hover_description?: string;
    web_link?: string;
    type?: string;
    repo?: string;
    stack?: string[];
    testAccount?: string[];
    features?: string[];
  };
  onClick: () => void;
  onMouseLeave: () => void;

  handleBack: () => void;
  selectedIndex: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data, onClick, selectedIndex, onMouseLeave, handleBack }) => {
  const [showFront, setShowFront] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null); // Create a ref for the card element

  const handleVisitSite = () => {
    (e: any) => e.stopPropagation();
    window.open(data?.web_link, '_blank');
  };

  useEffect(() => {
    if (selectedIndex === -1) {
      setShowFront(true);
      cardRef.current?.focus();
    }
  }, [selectedIndex]);

  const handleMoreDetails = () => {
    setShowFront(false);
    onClick();
  };

  const handleLessDetails = () => {
    (e: any) => e.stopPropagation();
    setShowFront(true);
    handleBack();
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px',
  });

  return (
    <motion.div
      className={`${
        !showFront ? 'lg:w-full' : 'lg:w-96'
      } m-0 shadow-sm overflow-hidden relative  rounded-md bg-white group  ${
        selectedIndex !== -1 && 'opacity-60 group-hover:opacity-100 '
      }`}
      layout
      tabIndex={0} // Add tabIndex to make the div focusable
      variants={containerVariantsTop}
      ref={ref}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      // transition={{ delay: 0.5, duration: 0.1 }}
    >
      {showFront ? (
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: 180 }}
          transition={{ duration: 0.1 }}
          className='box'
        >
          <div>
            <div className='md:w-96 overflow-hidden relative'>
              <Image
                src={data.banner}
                alt='banner'
                width={300}
                height={100}
                className='group-hover:scale-110 ease-in-out duration-500 transition-all z-0 h-44 object-cover'
              />
            </div>

            <div className='bg-white z-10 p-4 w-full flex flex-col gap-5'>
              <div className='flex flex-wrap gap-2'>
                {data.stack?.map((x, index) => (
                  <div
                    className='text-[10px] m-0 rounded-md bg-blue-100 py-1 px-2 flex items-center gap-2'
                    key={index}
                  >
                    <p className='h-2 w-2 bg-green-500 rounded-full'></p> {x}
                  </div>
                ))}
              </div>
              <h2 className='text-sm font-bold'>{data.title}</h2>
              <p className='text-sm text-slate-500'>{data.description}</p>

              <div className='m-0 flex gap-3 h-full items-start'>
                <Button
                  text='More Details'
                  cN='text-xs h-fit'
                  onClick={handleMoreDetails}
                />
                <div className='m-0'>
                  <Button
                    text='Visit Site'
                    cN='text-xs h-fit !bg-gray-800 !text-white opacity-80 hover:opacity-100'
                    onClick={handleVisitSite}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ rotateY: 180 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: -180 }}
          className='flex flex-1 flex-col md:flex-row  mt-6 mb-3 md:mt-0 '
          transition={{ duration: 0.1 }} // Set transition duration to 2 seconds
        >
          <div className='md:w-1/2 m-0 px-2 overflow-hidden relative h-full'>
            <p
              className='w-full flex items-center md:py-4 ml-2'
              onClick={handleLessDetails}
            >
              <BackIcon /> <span className='text-xs m-0 ml-3'>Back to Projects</span>
            </p>
            <Image
              src={data.banner}
              alt='banner'
              width={300}
              height={300}
              className='ease-in-out duration-500 transition-all z-0 h-1/2 w-fit object-contain'
            />
            {data.testAccount && (
              <div className='m-3 text-xs flex flex-col items-start gap-1 text-slate-500'>
                <h1 className='font-semibold underline mb-3 text-sm text-black'>Test Account</h1>
                <h2>Email/Username : {data.testAccount[0]}</h2>
                <h2>Password : {data.testAccount[1]}</h2>

                <Button
                  text='Visit Site '
                  icon={<ArrowUp />}
                  cN='text-xs h-fit !bg-gray-800 !text-white opacity-80 hover:opacity-100 mt-2'
                  onClick={handleVisitSite}
                />
              </div>
            )}
          </div>
          <div className='md:w-1/2 m-0 p-4 px-6'>
            <h2 className='text-base font-bold'>{data.title}</h2>
            <p className='text-sm mt-1 flex gap-2 items-start'>
              <span className='m-0'> 📖 </span>
              <span className='m-0 text-slate-500'> {data.description}</span>
            </p>
            <p className='text-sm font-bold mt-5'>Key Features </p>
            {data?.features?.map((x, index: number) => (
              <p
                key={index}
                className='flex text-sm gap-2 mt-1'
              >
                <span className='text-xs m-0 '>💼 </span>
                <span className='m-0 text-slate-500'>{x}</span>
              </p>
            ))}

            <div className='flex flex-wrap gap-2'>
              <p className='text-sm font-bold mt-5 w-full'>Tech Stack </p>
              {data.stack?.map((x, index) => (
                <span
                  className='text-[10px] m-0 rounded-md bg-blue-100 py-1 px-2 flex items-center gap-2'
                  key={index}
                >
                  <span className='h-2 w-2 animate-pulse bg-green-500 rounded-full'></span> {x}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
