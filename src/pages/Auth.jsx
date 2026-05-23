import React, { useState } from 'react';
import { ArrowLeft, Mail, Lock, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Auth = () => {
  const navigate = useNavigate();
  const { login } = useUser();
  const [isLogin, setIsLogin] = useState(true);
  
  // State for inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalName = isLogin ? (name || email.split('@')[0]) : name;
    login(finalName);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col justify-center items-center p-6 selection:bg-green-200 selection:text-green-900 relative">
      
      <button 
        onClick={() => navigate('/welcome')}
        className="absolute top-8 left-8 p-3 bg-white rounded-2xl shadow-sm border-b-4 border-slate-200 text-slate-500 hover:text-slate-800 hover:-translate-y-1 active:border-b-0 active:translate-y-1 transition-all z-20"
      >
        <ArrowLeft size={24} strokeWidth={3} />
      </button>

      {/* Main Gamified Card */}
      <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 border-4 border-slate-200 shadow-[0_12px_0_0_rgba(226,232,240,1)] z-10 animate-[fadeIn_0.4s_ease-out]">
        
        {/* Header Area */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="w-16 h-16 bg-blue-400 rounded-2xl flex items-center justify-center mb-4 border-b-4 border-blue-600">
            <span className="text-white font-black text-3xl">N</span>
          </div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight text-center">
            {isLogin ? 'Welcome Back!' : 'Create Profile'}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {!isLogin && (
            <div>
              <label className="block text-sm font-black text-slate-700 mb-2 uppercase tracking-wider">Your Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User size={24} className="text-slate-400" strokeWidth={2.5} />
                </div>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John" 
                  className="w-full bg-slate-50 border-2 border-slate-200 text-slate-800 placeholder-slate-400 pl-12 pr-4 py-4 rounded-2xl outline-none focus:border-blue-400 focus:bg-white transition-all font-bold text-lg"
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-black text-slate-700 mb-2 uppercase tracking-wider">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail size={24} className="text-slate-400" strokeWidth={2.5} />
              </div>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com" 
                className="w-full bg-slate-50 border-2 border-slate-200 text-slate-800 placeholder-slate-400 pl-12 pr-4 py-4 rounded-2xl outline-none focus:border-blue-400 focus:bg-white transition-all font-bold text-lg"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-black text-slate-700 uppercase tracking-wider">Password</label>
              {isLogin && <a href="#" className="text-sm font-bold text-blue-400 hover:text-blue-500 transition-colors">Forgot?</a>}
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock size={24} className="text-slate-400" strokeWidth={2.5} />
              </div>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-slate-50 border-2 border-slate-200 text-slate-800 placeholder-slate-400 pl-12 pr-4 py-4 rounded-2xl outline-none focus:border-blue-400 focus:bg-white transition-all font-bold text-lg"
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-green-400 hover:bg-green-500 text-white font-black text-xl py-4 rounded-2xl border-b-4 border-green-600 active:border-b-0 active:translate-y-1 transition-all mt-4 uppercase tracking-wider"
          >
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-slate-400 font-bold uppercase tracking-wider">Or</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button type="button" className="flex items-center justify-center w-full px-4 py-4 border-2 border-slate-200 border-b-4 rounded-2xl bg-white hover:bg-slate-50 font-black text-slate-700 active:border-b-2 active:translate-y-[2px] transition-all">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>
            <button type="button" className="flex items-center justify-center w-full px-4 py-4 border-2 border-slate-200 border-b-4 rounded-2xl bg-white hover:bg-slate-50 font-black text-slate-700 active:border-b-2 active:translate-y-[2px] transition-all">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.31-.83 3.83-.8 1.48.06 2.65.61 3.42 1.69-2.82 1.64-2.3 5.48.51 6.64-.67 1.76-1.55 3.36-2.84 4.64zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              Apple
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-slate-500 font-bold">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-blue-500 font-black hover:text-blue-600 uppercase tracking-wider transition-colors"
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
        </p>

      </div>
    </div>
  );
};

export default Auth;
