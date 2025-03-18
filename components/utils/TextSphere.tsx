'use client';
import React, { useEffect } from 'react';

import '../../styles/TextSphere.css';

import TagCloud from 'TagCloud';

const TextShpere = () => {
  useEffect(() => {
    const container: any = '.tagcloud';
    const texts = [
      'HTML',
      'CSS',
      'SASS',
      'JavaScript',
      'React',
      'Next',
      'PHP',
      'NodeJS',
      'Express',
      'Jquery',
      'ES6',
      'GIT',
      'GITHUB',
      'C#',
      'Python',
      'MongoDB',
      'DBMS',
      'Tailwind CSS',
      "Docker",
      "Postgress"
    ];
  
    const options: any = {
      radius: 300,
      maxSpeed: 'normal',
      initSpeed: 'fast',
      keep: true,
    };
  
    // Clear any existing content in the container before initializing TagCloud
    const tagCloudContainer = document.querySelector(container);
    if (tagCloudContainer) {
      tagCloudContainer.innerHTML = ''; 
    }
  
    TagCloud(container, texts, options);
  }, []);
  

  return (
    <>
      <div className='text-shpere w-full overflow-hidden text-xs'>
        <span className='tagcloud'></span>
      </div>
    </>
  );
};

export default TextShpere;
