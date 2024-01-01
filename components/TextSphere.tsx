import React, { useEffect } from "react";

import "../styles/TextSphere.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextShpere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container: any = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "Next",
        "PHP",
        "NodeJS",
        "Express",
        "Jquery",
        "ES6",
        "GIT",
        "GITHUB",
        "C#",
        "Python",
        "MongoDB",
        "DBMS",
        "Tailwind CSS",
      ];

      const options: any = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "fast",
        keep: true,
      };

      TagCloud(container, texts, options); 
    };
  }, []);

  return (
    <>
      <div className="text-shpere w-full overflow-hidden">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextShpere;
