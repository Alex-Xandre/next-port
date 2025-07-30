import Image from 'next/image';
import Button from './Button';
import { motion } from 'framer-motion';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { ArrowUpRight, GithubIcon } from 'lucide-react';
import Carousel from '../ProjectCarousel';

interface ProjectCardProps {
  data: {
    title?: string;
    banner: string[];
    description?: string;
    hover_description?: string;
    web_link?: string;
    type?: string;
    repo?: string;
    stack?: string[];
    testAccount?: string[];
    features?: string[];
    github?: string;
  };
  onClick: () => void;
  onMouseLeave: () => void;
  handleBack: () => void;
  selectedIndex: number;
  dataIndex: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data, onClick, selectedIndex, handleBack, dataIndex }) => {
  const handleVisitSite = (e: any) => window.open(data?.web_link, '_blank');
  const handleVisitSource = (e: any) => window.open(data?.github, '_blank');

  const handleMoreDetails = () => onClick();
  const handleLessDetails = () => handleBack();

  const showFront = selectedIndex !== dataIndex;

  return (
    <motion.div
      className={`break-inside m-0  w-full group bg-gray-50  ${
        selectedIndex !== -1 && 'opacity-80 group-hover:opacity-100'
      }
      ${selectedIndex === dataIndex && '!opacity-100 '}
      `}
      layout
      tabIndex={0}
    >
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 0 }}
        exit={{ rotateY: 180 }}
        transition={{ duration: 0.1 }}
        // className="box"
      >
        <div className='w-full'>
          <Carousel images={data.banner} />

          <div className='bg-white z-10 p-4 w-full flex flex-col gap-5'>
            <div className='flex flex-wrap gap-2 mt-5'>
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

            <div className='m-0 flex gap-3 h-full items-center justify-between'>
              <div className='m-0 flex gap-2 items-center'>
                <Button
                  text='Visit Site'
                  cN='text-xs h-fit !bg-gray-800 !text-white opacity-80 hover:opacity-100'
                  onClick={handleVisitSite as any}
                  icon={<ArrowUpRight className='h-4 w-4 ml-2' />}
                />

                {data?.github && (
                  <Button
                    text='Source'
                    cN='text-xs h-fit !bg-white  border shadow-sm hover:border-gray-500 opacity-80 hover:opacity-100'
                    onClick={handleVisitSource as any}
                    icon={<GithubIcon className='h-4 w-4 ml-2' />}
                  />
                )}
              </div>
              {data?.features?.length && data?.features?.length > 0 ? (
                <span className='  !bg-gray-800 !text-white opacity-80 hover:opacity-100 p-1 rounded-sm m-0 cursor-pointer'>
                  {showFront ? (
                    <BiChevronDown
                      className='m-0 '
                      onClick={handleMoreDetails}
                    />
                  ) : (
                    <BiChevronUp
                      onClick={handleLessDetails}
                      className='m-0'
                    />
                  )}
                </span>
              ) : null}
            </div>

            {!showFront && (
              <>
                <div className='m-0  overflow-hidden relative bg-re'>
                  {data.testAccount && (
                    <div className='m-3 text-xs flex flex-col items-start gap-1 text-slate-500'>
                      <h1 className='font-semibold underline mb-3 text-sm text-black'>Test Account</h1>
                      <h2>Email/Username: {data.testAccount[0]}</h2>
                      <h2>Password: {data.testAccount[1]}</h2>
                    </div>
                  )}
                </div>
                <div className='m-0  px-3'>
                  <h2 className='text-base font-bold'>{data.title}</h2>
                  <p className='text-sm mt-1 flex gap-2 items-start'>
                    <span className='m-0'> 📖 </span>
                    <span className='m-0 text-slate-500'>{data.description}</span>
                  </p>
                  <p className='text-sm font-bold mt-5'>Key Features</p>
                  {data?.features?.map((x, index) => (
                    <p
                      key={index}
                      className='flex text-sm gap-2 mt-1'
                    >
                      <span className='text-xs m-0 '>💼 </span>
                      <span className='m-0 text-slate-500'>{x}</span>
                    </p>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
