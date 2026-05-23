import React from 'react';
import { ChevronLeft, Lock, Star, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Writing = () => {
  const navigate = useNavigate();
  const { isLessonUnlocked, completedLessons } = useUser();

  const lessons = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `Lesson ${i + 1}`,
  }));

  const getMargin = (index) => {
    const pattern = [0, -4, -8, -4, 0, 4, 8, 4];
    const offset = pattern[index % pattern.length];
    return `${offset}rem`;
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 min-h-screen overflow-x-hidden">
      
      <div className="bg-white border-b-2 border-slate-200 p-4 sticky top-0 z-50 flex items-center space-x-4 shadow-sm">
        <button onClick={() => navigate('/')} className="p-2 bg-white rounded-2xl border-2 border-slate-200 border-b-4 hover:-translate-y-1 active:border-b-0 active:translate-y-1 transition-all">
          <ChevronLeft size={24} className="text-slate-600 font-black" strokeWidth={3} />
        </button>
        <div>
          <h1 className="text-2xl font-black text-amber-500 uppercase tracking-tight">Writing Path</h1>
          <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Section 1</p>
        </div>
      </div>

      <div className="flex-1 py-12 flex flex-col items-center relative overflow-hidden">
        
        <div className="absolute top-0 bottom-0 w-4 bg-slate-200 z-0"></div>

        {lessons.map((lesson, index) => {
          const unlocked = isLessonUnlocked('writing', lesson.id);
          const completed = completedLessons.includes(`writing-${lesson.id}`);
          const margin = getMargin(index);
          
          let bgColor = 'bg-slate-200';
          let borderColor = 'border-slate-300';
          let textColor = 'text-slate-400';
          let icon = <Lock size={32} strokeWidth={3} />;

          if (completed) {
            bgColor = 'bg-yellow-400';
            borderColor = 'border-yellow-600';
            textColor = 'text-white';
            icon = <Check size={40} strokeWidth={4} />;
          } else if (unlocked) {
            bgColor = 'bg-amber-400';
            borderColor = 'border-amber-600';
            textColor = 'text-white';
            icon = <Star size={36} className="fill-white" />;
          }

          return (
            <div 
              key={lesson.id} 
              onClick={() => unlocked ? navigate(`/lesson/writing/${lesson.id}`) : null}
              className="relative z-10 flex flex-col items-center mb-8 group"
              style={{ marginLeft: margin }}
            >
              {!completed && unlocked && (
                <div className="absolute -top-12 bg-white px-4 py-2 rounded-2xl border-2 border-slate-200 shadow-sm animate-bounce z-20 whitespace-nowrap">
                  <span className="font-black text-amber-500 uppercase tracking-wider text-sm">Start</span>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b-2 border-r-2 border-slate-200 rotate-45"></div>
                </div>
              )}

              <div className={`w-24 h-24 rounded-full flex items-center justify-center border-b-8 shadow-lg transition-all ${bgColor} ${borderColor} ${textColor} ${unlocked ? 'cursor-pointer hover:scale-105 active:border-b-0 active:translate-y-2' : 'cursor-not-allowed opacity-80'}`}>
                {icon}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Writing;
