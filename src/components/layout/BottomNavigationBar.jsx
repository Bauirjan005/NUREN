import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, BarChart2, Star, User } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/dictionary', label: 'Dictionary', icon: BookOpen },
  { path: '/stats', label: 'Stats', icon: BarChart2 },
  { path: '/premium', label: 'Premium', icon: Star },
  { path: '/profile', label: 'Profile', icon: User },
];

const BottomNavigationBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-[88px] bg-white/90 backdrop-blur-xl shadow-[0_-8px_30px_-15px_rgba(0,0,0,0.12)] border-t border-slate-100 z-50 flex items-center justify-around px-2 lg:px-8 pb-6 pt-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => clsx(
              "flex flex-col items-center justify-center w-16 h-14 rounded-2xl transition-all duration-300",
              isActive 
                ? "text-primary scale-110" 
                : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
            )}
          >
            {({ isActive }) => (
              <>
                <div className={clsx(
                  "p-1.5 rounded-xl mb-1 transition-colors duration-300",
                  isActive ? "bg-blue-50 text-primary" : "bg-transparent"
                )}>
                  <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className={clsx(
                  "text-[10px] font-bold transition-all duration-300",
                  isActive ? "opacity-100" : "opacity-80 font-semibold"
                )}>
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        );
      })}
    </div>
  );
};

export default BottomNavigationBar;
