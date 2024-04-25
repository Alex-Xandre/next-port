import React, { useEffect } from 'react';

import '../../styles/TextSphere.css';

import TagCloud from 'TagCloud';

const TextShpere = () => {
  useEffect(() => {
    return () => {
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
      ];

      const options: any = {
        radius: 300,
        maxSpeed: 'normal',
        initSpeed: 'fast',
        keep: true,
      };

      TagCloud(container, texts, options);
    };
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
