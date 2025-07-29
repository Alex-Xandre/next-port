'use client';
import React, { ReactNode } from 'react';

const MainContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <main className='flex  flex-col items-center justify-between overflow-x-hidden overflow-y-hidden'>{children}</main>;
};

export default MainContainer;
