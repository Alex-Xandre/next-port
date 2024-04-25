'use client';
import React, { ReactNode } from 'react';

const MainContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <main className='flex min-h-screen flex-col items-center justify-between'>{children}</main>;
};

export default MainContainer;
