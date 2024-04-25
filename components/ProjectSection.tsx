'use client';
import React, { useState } from 'react';
import SectionContainer from './SectionContainer';
import Title from './utils/Title';
import ProjectCard from './utils/ProjectCard';
import { projectData } from './json/projectData';

const ProjectSection = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);

  const handleCardClick = (index: number) => {
    setSelectedCardIndex(index);
  };
  return (
    <SectionContainer
      cN='py-20'
      id='projects'
    >
      <Title text='Side Projects' />
      <div
        className={`flex flex-wrap justify-center gap-8 mt-10 relative ${
          selectedCardIndex !== -1 && 'h-[calc(100dvh)] overflow-hidden'
        }`}
      >
        {projectData.map((x, index) => (
          <div
            key={x.title}
            style={{
              zIndex: selectedCardIndex === index ? 1 : 0,
            }}
            className={`${
              selectedCardIndex === index ? 'absolute w-full h-full flex backdrop-blur-sm' : 'relative'
            } m-0`}
            onClick={() => setSelectedCardIndex(-1)}
          >
            <div
              className={`${
                selectedCardIndex === index && 'md:w-3/5 m-auto bg-white shadow-md rounded-xl'
              } flex flex-wrap content-start m-0 group`}
              onClick={(e) => e.stopPropagation()}
            >
              <ProjectCard
                data={x}
                onClick={() => handleCardClick(index)}
                selectedIndex={selectedCardIndex}
                onMouseLeave={() => setSelectedCardIndex(-1)}
                handleBack={() => setSelectedCardIndex(-1)}
              />
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default ProjectSection;
