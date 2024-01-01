"use client";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import SectionContainer from "@/components/SectionContainer";
import TextShpere from "@/components/TextSphere";
import Title from "@/components/Title";
import { projectData } from "@/components/json/projectData";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <SectionContainer id="home" cN="h-screen">
        <div className="lg:flex-1 m-0 flex items-start justify-center flex-col gap-5">
          <h1 className="text-green-700 font-semibold">Alexander Micua</h1>
          <h2 className="text-3xl font-extrabold uppercase">
            Software Engineer Based on Philippines
          </h2>
          <h3 className="-mt-5">
            Let&rsquo;s build something amazing together!{" "}
          </h3>
          <Button text="Browse Projects" />
        </div>
        <div className="lg:flex-1 m-0  flex items-center justify-center overflow-hidden md:overflow-auto">
          {" "}
          <div className="md:w-96">
            <TextShpere />
          </div>
        </div>
      </SectionContainer>

      <SectionContainer cN="bg-gray-50 py-20 " id="about">
        <Title text="About" cN="mb-20" />
        <div className="w-full lg:flex-1 m-0 flex md:items-center  flex-col gap-5">
          <div className="w-full md:w-96 flex -mt-10">
            <Image
              src="https://res.cloudinary.com/dfhhkd04c/image/upload/v1703333902/20220802_150717-removebg-preview_hsnqqk.png"
              alt="banner 2"
              width={300}
              height={300}
              className="rounded-b-xl"
            />
          </div>
        </div>
        <div className="lg:flex-1 m-0 flex items-start  flex-col gap-5 mt-20 lg:mt-0">
          <h1>
            A 23 year old programmer that worked on projects including creation
            of websites majority using MERN Stack, android applications,
            full-stack software development; and collaborating with other
            developer.
          </h1>
          <h2>
            Graduated Last July 2022, I worked on multiple projects and client
            locally and internationally. With a work experience and a close
            training with a senior developer for a year.
          </h2>
          <Button text="Read More" />
        </div>
      </SectionContainer>

      <SectionContainer cN="py-20  " id="projects">
        <Title text="Recent Projects" />
        <div className="flex  flex-wrap  justify-center gap-5 mt-10">
          {projectData.slice(0, 5).map((x) => (
            <ProjectCard key={x.title} data={x} />
          ))}
        </div>
      </SectionContainer>
    </main>
  );
}
