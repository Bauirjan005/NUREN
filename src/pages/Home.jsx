import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full space-y-8 pb-10">
      {/* Daily Goal Gamified Card */}
      <div className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-[0_8px_0_0_rgba(226,232,240,1)]">
        <div className="flex justify-between items-end mb-4">
          <div>
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">Daily Goal</h2>
            <p className="text-slate-500 font-bold mt-1">15/20 mins completed</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-3xl">🎯</span>
            <span className="text-sm font-black text-green-500 uppercase tracking-widest">Great!</span>
          </div>
        </div>
        
        {/* Chunky Progress Bar */}
        <div className="w-full bg-slate-100 rounded-full h-6 border-2 border-slate-200 overflow-hidden relative">
          <div className="bg-green-400 h-full rounded-full relative overflow-hidden" style={{ width: '75%' }}>
            {/* Glossy shine effect */}
            <div className="absolute top-1 left-2 right-2 h-1.5 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <h2 className="text-3xl font-black text-slate-800 mb-6 tracking-tight">Up Next</h2>
        
        {/* 2x2 Vibrant Gamified Grid for 4 Core Skills */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          
          {/* Reading */}
          <div 
            onClick={() => navigate('/reading')}
            className="group bg-green-400 border-b-8 border-green-600 hover:-translate-y-1 hover:border-b-[10px] active:border-b-0 active:translate-y-2 transition-all cursor-pointer rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-lg"
          >
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 border-b-4 border-slate-200 drop-shadow-md">
              <span className="text-4xl">📖</span>
            </div>
            <h3 className="font-black text-white text-2xl mb-1 uppercase tracking-wider drop-shadow-sm">Reading</h3>
          </div>

          {/* Writing */}
          <div 
            onClick={() => navigate('/writing')}
            className="group bg-amber-400 border-b-8 border-amber-600 hover:-translate-y-1 hover:border-b-[10px] active:border-b-0 active:translate-y-2 transition-all cursor-pointer rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-lg"
          >
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 border-b-4 border-slate-200 drop-shadow-md">
              <span className="text-4xl">✍️</span>
            </div>
            <h3 className="font-black text-white text-2xl mb-1 uppercase tracking-wider drop-shadow-sm">Writing</h3>
          </div>

          {/* Speaking */}
          <div 
            onClick={() => navigate('/speaking')}
            className="group bg-purple-400 border-b-8 border-purple-600 hover:-translate-y-1 hover:border-b-[10px] active:border-b-0 active:translate-y-2 transition-all cursor-pointer rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-lg"
          >
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 border-b-4 border-slate-200 drop-shadow-md">
              <span className="text-4xl">🗣️</span>
            </div>
            <h3 className="font-black text-white text-2xl mb-1 uppercase tracking-wider drop-shadow-sm">Speaking</h3>
          </div>

          {/* Listening */}
          <div 
            onClick={() => navigate('/listening')}
            className="group bg-blue-400 border-b-8 border-blue-600 hover:-translate-y-1 hover:border-b-[10px] active:border-b-0 active:translate-y-2 transition-all cursor-pointer rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-lg"
          >
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 border-b-4 border-slate-200 drop-shadow-md">
              <span className="text-4xl">🎧</span>
            </div>
            <h3 className="font-black text-white text-2xl mb-1 uppercase tracking-wider drop-shadow-sm">Listening</h3>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
