import React from 'react';
import { Outlet } from 'react-router-dom';
import TopAppBar from './TopAppBar';
import BottomNavigationBar from './BottomNavigationBar';

const GlobalLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans relative">
      {/* Top App Bar */}
      <TopAppBar />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-5xl mx-auto pt-20 pb-28 px-4 lg:px-8">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <BottomNavigationBar />
    </div>
  );
};

export default GlobalLayout;
