import { FC, MouseEvent, CSSProperties } from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  icon?: JSX.Element;
  cN?: string;
  style?: CSSProperties;
}

const Button: FC<ButtonProps> = ({ text, onClick, icon, cN, style }) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={` ${cN} bg-[#00ffffff] font-[500] hover:bg-blue-600 hover:text-white ease-in-out  transition-all opacity-90 hover:opacity-100 md:w-fit py-2 px-4 rounded text-gray-800 m-0 flex align-center justify-center text-sm `}
      onClick={handleClick}
      style={style}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
