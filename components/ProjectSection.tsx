import React, { useState } from 'react';
import SectionContainer from './SectionContainer';
import Title from './utils/Title';
import ProjectCard from './utils/ProjectCard';
import { projectData } from './json/projectData';

const ProjectSection = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number>(-1);

  const handleCardClick = (index: number) => {
    setSelectedCardIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <SectionContainer cN="py-20" id="projects">
      <Title text="Side Projects" />
      <div className="masonry sm:masonry-sm md:masonry-md  xl:max-w-3/4 mt-10">
        {projectData.map((x, index) => (
          <div key={x.title} className="m-0" onClick={() => setSelectedCardIndex(-1)}>
            <div
              className={`${
                selectedCardIndex === index && 'm-auto bg-white shadow-md rounded-xl'
              } flex flex-wrap content-start mb-4 overflow-hidden rounded-md  group`}
              onClick={(e) => e.stopPropagation()}
            >
              <ProjectCard
                data={x}
                onClick={() => handleCardClick(index)}
                selectedIndex={selectedCardIndex}
                dataIndex={index} // Pass index to ProjectCard
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
