import React from 'react';
import { useUser } from '../../context/UserContext';

const TopAppBar = () => {
  const { xp, level, userName } = useUser();

  return (
    <div className="fixed top-0 left-0 right-0 h-20 bg-white border-b-2 border-slate-200 z-50 flex items-center justify-between px-4 lg:px-8">
      {/* Greeting */}
      <div className="flex flex-col justify-center">
        <p className="text-lg font-black text-slate-800">Hi, {userName || 'Learner'}! 👋</p>
      </div>

      {/* Right side icons - Gamified Pills */}
      <div className="flex items-center space-x-3">
        {/* XP & Level */}
        <div className="hidden sm:flex items-center space-x-2 bg-white text-slate-700 px-4 py-2 rounded-2xl font-black border-2 border-slate-200 border-b-4 hover:-translate-y-1 transition-transform cursor-default">
          <span className="text-xl">🌟</span>
          <span>{xp} XP <span className="text-slate-300 mx-1">|</span> Lvl {level}</span>
        </div>

        {/* Daily Streak */}
        <div className="flex items-center space-x-2 bg-white text-orange-500 px-4 py-2 rounded-2xl font-black border-2 border-slate-200 border-b-4 hover:-translate-y-1 transition-transform cursor-default">
          <span className="text-xl">🔥</span>
          <span>5</span>
        </div>

        {/* User Avatar */}
        <div className="w-12 h-12 rounded-2xl bg-blue-400 text-white border-2 border-white border-b-4 overflow-hidden cursor-pointer flex items-center justify-center shadow-sm hover:-translate-y-1 active:border-b-2 active:translate-y-[2px] transition-all">
          <span className="font-black text-2xl">{userName ? userName.charAt(0).toUpperCase() : '👤'}</span>
        </div>
      </div>
    </div>
  );
};

export default TopAppBar;
