'use client';
import React, { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import MainContainer from '@/components/MainContainer';
import AboutSection from '@/components/AboutSection';
import ProjectSection from '@/components/ProjectSection';
import TimeLineSection from '@/components/TimelineSection';
import FooteSection from '@/components/FooteSection';

const Wrapper = () => {
  return (
    <MainContainer>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      {/* <TimeLineSection /> */}
      <FooteSection />
    </MainContainer>
  );
};

export default Wrapper;
