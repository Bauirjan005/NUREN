import React from 'react';
import { User, Bookmark, Star, Shield, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Profile = () => {
  const navigate = useNavigate();
  const { userName, logout, xp, level } = useUser();

  const handleLogout = () => {
    logout();
    navigate('/welcome');
  };

  return (
    <div className="flex flex-col h-full space-y-6 pb-10">
      <div className="flex items-center space-x-3 mb-2">
        <h1 className="text-3xl font-black text-slate-800 tracking-tight">Profile</h1>
      </div>

      {/* Gamified User Info Card */}
      <div className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-[0_8px_0_0_rgba(226,232,240,1)] flex flex-col items-center">
        {/* Gamified Avatar (No photo) */}
        <div className="w-28 h-28 bg-blue-400 rounded-full flex items-center justify-center mb-4 border-4 border-white border-b-8 shadow-md relative z-10 transform hover:-translate-y-2 transition-transform cursor-default">
          <span className="text-6xl text-white font-black">{userName ? userName.charAt(0).toUpperCase() : '👤'}</span>
        </div>
        
        <h2 className="text-2xl font-black text-slate-800 z-10">{userName || "Student Name"}</h2>
        <p className="text-slate-500 font-bold mt-1 z-10">student@nurenglish.com</p>
        
        {/* Gamified Stats Blocks */}
        <div className="mt-8 w-full grid grid-cols-2 gap-4 z-10">
          <div className="bg-yellow-100 border-2 border-yellow-200 border-b-4 rounded-2xl p-4 text-center">
            <p className="text-4xl font-black text-yellow-600 drop-shadow-sm">{level}</p>
            <p className="text-xs text-yellow-700 font-black uppercase tracking-widest mt-1">Level</p>
          </div>
          <div className="bg-blue-100 border-2 border-blue-200 border-b-4 rounded-2xl p-4 text-center">
            <p className="text-4xl font-black text-blue-600 drop-shadow-sm">{xp}</p>
            <p className="text-xs text-blue-700 font-black uppercase tracking-widest mt-1">Total XP</p>
          </div>
        </div>
      </div>

      {/* Gamified Menu List */}
      <div className="space-y-4 flex-1">
        
        {/* Saved Words Block */}
        <div className="bg-white border-2 border-slate-200 border-b-4 rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:-translate-y-1 hover:border-b-[6px] active:border-b-0 active:translate-y-2 transition-all">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-indigo-100 border-2 border-indigo-200 border-b-4 rounded-2xl flex items-center justify-center">
              <span className="text-2xl">🔖</span>
            </div>
            <span className="font-black text-slate-700 text-xl tracking-tight">Saved Words</span>
          </div>
        </div>

        {/* Premium Features Block */}
        <div 
          onClick={() => navigate('/premium')}
          className="bg-white border-2 border-slate-200 border-b-4 rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:-translate-y-1 hover:border-b-[6px] active:border-b-0 active:translate-y-2 transition-all"
        >
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-amber-100 border-2 border-amber-200 border-b-4 rounded-2xl flex items-center justify-center">
              <span className="text-2xl">⭐</span>
            </div>
            <span className="font-black text-slate-700 text-xl tracking-tight">Premium Features</span>
          </div>
        </div>

        {/* Privacy Block */}
        <div className="bg-white border-2 border-slate-200 border-b-4 rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:-translate-y-1 hover:border-b-[6px] active:border-b-0 active:translate-y-2 transition-all">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-emerald-100 border-2 border-emerald-200 border-b-4 rounded-2xl flex items-center justify-center">
              <span className="text-2xl">🛡️</span>
            </div>
            <span className="font-black text-slate-700 text-xl tracking-tight">Privacy & Settings</span>
          </div>
        </div>

      </div>
      
      {/* Massive Log Out Button */}
      <button 
        onClick={handleLogout} 
        className="w-full bg-red-400 hover:bg-red-500 text-white font-black text-xl py-5 rounded-3xl border-b-[6px] border-red-600 active:border-b-0 active:translate-y-2 transition-all flex items-center justify-center space-x-2 uppercase tracking-wide mt-4"
      >
        <span>Log Out</span>
      </button>

    </div>
  );
};

export default Profile;
