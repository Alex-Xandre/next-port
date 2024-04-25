'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import MainContainer from '@/components/MainContainer';
import AboutSection from '@/components/AboutSection';
import ProjectSection from '@/components/ProjectSection';
import TimeLineSection from '@/components/TimelineSection';
import FooteSection from '@/components/FooteSection';

export const containerVariantsTop = {
  hidden: { opacity: 0, y: 200 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <MainContainer>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <TimeLineSection />
      <FooteSection />
    </MainContainer>
  );
}
