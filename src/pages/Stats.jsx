import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';

const Stats = () => {
  const [mounted, setMounted] = useState(false);
  const { completedLessons } = useUser();

  useEffect(() => {
    setMounted(true);
  }, []);

  const weeklyData = [
    { day: "Mon", progress: 40 },
    { day: "Tue", progress: 65 },
    { day: "Wed", progress: 85 },
    { day: "Thu", progress: 50 },
    { day: "Fri", progress: 100 },
    { day: "Sat", progress: 30 },
    { day: "Sun", progress: 0 },
  ];

  const hasStarted = completedLessons.length > 0;
  
  const badges = [
    { title: "Beginner", desc: "First lesson", emoji: "⚡", bg: "bg-yellow-400", border: "border-yellow-600", locked: !hasStarted },
    { title: "7 Day Streak", desc: "1 week streak", emoji: "🔥", bg: "bg-orange-400", border: "border-orange-600", locked: false },
    { title: "Word Master", desc: "50 new words", emoji: "🧠", bg: "bg-purple-400", border: "border-purple-600", locked: false },
    { title: "Champion", desc: "1 month streak", emoji: "🏆", bg: "bg-slate-300", border: "border-slate-400", locked: true },
  ];

  return (
    <div className="flex flex-col h-full space-y-8 pb-10">
      <div className="flex items-center space-x-3 mb-2">
        <h1 className="text-3xl font-black text-slate-800 tracking-tight">Statistics</h1>
      </div>

      {/* Gamified Progress Chart */}
      <div className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-[0_8px_0_0_rgba(226,232,240,1)] relative overflow-hidden">
        <h2 className="text-2xl font-black text-slate-800 mb-1 tracking-tight">Weekly Progress</h2>
        <p className="text-sm font-bold text-slate-500 mb-8">Keep up the great work!</p>
        
        <div className="flex items-end justify-between h-40 px-1 relative z-10">
          {/* Horizontal grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between z-0 pointer-events-none opacity-20 py-6 pb-8">
            <div className="w-full h-1 bg-slate-300 rounded-full"></div>
            <div className="w-full h-1 bg-slate-300 rounded-full"></div>
            <div className="w-full h-1 bg-slate-300 rounded-full"></div>
          </div>

          {weeklyData.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center group w-10 relative z-10">
              <div className="w-full bg-slate-100 border-2 border-slate-200 rounded-2xl h-32 relative flex items-end overflow-hidden p-0.5">
                <div 
                  className={`w-full rounded-xl transition-all duration-[1500ms] ease-out ${item.progress > 0 ? 'bg-green-400 border-t-4 border-green-300' : 'bg-transparent'}`}
                  style={{ height: mounted ? `${item.progress}%` : '0%' }}
                ></div>
              </div>
              <span className="text-xs font-black text-slate-400 mt-4 uppercase tracking-wider">{item.day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Earned Badges - Gamified Grid */}
      <div>
        <h2 className="text-2xl font-black text-slate-800 mb-4 tracking-tight">Achievements</h2>
        
        <div className="grid grid-cols-2 gap-4">
          {badges.map((badge, idx) => {
            const isLocked = badge.locked;
            return (
              <div 
                key={idx} 
                className={`rounded-3xl p-4 flex flex-col items-center text-center border-2 transition-all cursor-pointer ${
                  isLocked 
                    ? 'border-slate-200 border-b-4 bg-slate-50 opacity-60 grayscale' 
                    : `border-slate-200 border-b-8 shadow-[0_4px_0_0_rgba(226,232,240,1)] bg-white hover:-translate-y-1 hover:border-b-[10px] active:border-b-0 active:translate-y-2`
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 border-b-4 ${isLocked ? 'bg-slate-200 border-slate-300' : `${badge.bg} ${badge.border}`}`}>
                  <span className="text-3xl">{badge.emoji}</span>
                </div>
                <h3 className={`font-black text-lg mb-1 tracking-tight ${isLocked ? 'text-slate-500' : 'text-slate-800'}`}>{badge.title}</h3>
                <p className="text-xs text-slate-500 font-bold leading-tight px-1 uppercase tracking-wider">{badge.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
