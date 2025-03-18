'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarContextProps {
  isSidebarOpen: boolean;
  toggleSidebarOpen: () => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

interface SidebarProviderProps {
  children: ReactNode;
}
export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebarOpen = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebarOpen }}>
      <React.Fragment>{children}</React.Fragment>
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('wrap');
  }
  return context;
};
