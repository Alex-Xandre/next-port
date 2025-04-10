'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import MainContainer from '@/components/MainContainer';
import AboutSection from '@/components/AboutSection';
import ProjectSection from '@/components/ProjectSection';
import TimeLineSection from '@/components/TimelineSection';
import FooteSection from '@/components/FooteSection';

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
