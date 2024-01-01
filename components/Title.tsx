import React from "react";
interface TitleProps {
  text: string;
  cN?: string;
}

const Title = ({ text, cN }: TitleProps) => {
  return (
    <h1 className={`w-full text-3xl font-semibold text-center ${cN}`}>
      {text}
    </h1>
  );
};

export default Title;
