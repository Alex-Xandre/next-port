import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

interface ProjectCardProps {
  data: {
    title?: string;
    banner?: any;
    description?: string;
    hover_description?: string;
    web_link?: string;
    type?: string;
    repo?: string;
    stack?: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const handleVisitSite = () => {
    window.open(data?.web_link, "_blank");
  };
  return (
    <div className="lg:w-96 m-0 h-[400px]  lg:[300px] shadow-sm rounded-sm overflow-hidden relative group">
      <div className="md:w-96 overflow-hidden relative">
        <Image
          src={data.banner}
          alt="banner"
          layout="responsive"
          width={300}
          height={300}
          objectFit="cover"
          className="hover:scale-[1.05] ease-in-out duration-300 transition-all z-0"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-80">
        <div className="m-0 flex gap-3 h-full items-start pt-5 justify-center group">
          <Button
            text="More Details"
            cN="text-sm h-fit opacity-100 group-hover:opacity-100"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 ml-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            }
          />
          <div className="m-0">
            <Button
              text="Visit Site"
              cN="text-sm h-fit !bg-gray-800 !text-white opacity-80 hover:opacity-100"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 ml-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              }
              onClick={handleVisitSite}
              //open link here to anotehr tab onclick
            />
          </div>
        </div>
      </div>
      <div className="bg-white z-10 p-4 absolute bottom-0 w-full flex gap-3 flex-col">
        <h2 className="text-xl font-bold">{data.title}</h2>
        <p className="text-sm ">{data.description}</p>
        <p className="text-xs italic">{data.stack}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
