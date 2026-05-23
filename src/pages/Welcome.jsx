import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col overflow-x-hidden">
      
      {/* 1. Header (Navbar) - Bouncy & Friendly */}
      <header className="fixed top-0 left-0 right-0 h-24 bg-white z-50 flex items-center justify-between px-6 lg:px-16 border-b-2 border-slate-200">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer hover:-translate-y-1 transition-transform">
          <div className="w-12 h-12 bg-green-400 rounded-2xl flex items-center justify-center border-b-4 border-green-600">
            <span className="text-white font-black text-2xl">N</span>
          </div>
          <span className="text-3xl font-black text-green-500 tracking-tight">Nur English</span>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigate('/auth')} 
            className="hidden sm:block px-6 py-3 text-slate-400 font-extrabold hover:bg-slate-100 rounded-2xl transition-colors uppercase tracking-wide"
          >
            Log In
          </button>
          <button 
            onClick={() => navigate('/auth')} 
            className="px-8 py-3 bg-green-400 hover:bg-green-500 text-white font-black rounded-2xl border-b-4 border-green-600 active:border-b-0 active:translate-y-1 transition-all uppercase tracking-wide"
          >
            Get Started
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-24">
        
        {/* 2. Hero Section */}
        <section className="pt-16 pb-32 px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto">
          
          {/* Hero Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left z-10 mt-12 lg:mt-0">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-800 leading-[1.1] tracking-tighter mb-8 drop-shadow-sm">
              Learn Smarter. <br/>
              <span className="text-green-500 drop-shadow-sm">Speak Better.</span> <br/>
              Achieve More.
            </h1>
            
            <p className="text-xl text-slate-500 font-bold mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              The free, fun, and highly effective way to learn English! Build real-world vocabulary and perfect your pronunciation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <button 
                onClick={() => navigate('/auth')} 
                className="w-full sm:w-auto px-12 py-5 bg-green-400 hover:bg-green-500 text-white font-black text-xl rounded-2xl border-b-[6px] border-green-600 active:border-b-0 active:translate-y-1.5 transition-all uppercase tracking-wide"
              >
                Start Your Journey
              </button>
              <button className="w-full sm:w-auto px-12 py-5 bg-white text-blue-400 border-2 border-slate-200 border-b-[6px] hover:bg-slate-50 font-black text-xl rounded-2xl active:border-b-2 active:translate-y-1 transition-all uppercase tracking-wide">
                I already have an account
              </button>
            </div>
          </div>

          {/* Mascot Integration */}
          <div className="lg:w-1/2 relative flex justify-center z-10">
            <img 
              src="/mascot.png" 
              alt="Nur English Mascot" 
              className="w-full max-w-md drop-shadow-2xl hover:-translate-y-4 transition-transform duration-500" 
              onError={(e) => {
                // Fallback emoji if mascot.png doesn't exist yet
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback Mascot (Only shows if image fails to load) */}
            <div className="hidden w-full max-w-sm aspect-square bg-green-100 rounded-[64px] items-center justify-center border-8 border-green-200 shadow-[0_16px_0_0_rgba(187,247,208,1)] hover:-translate-y-4 transition-transform duration-500">
               <span className="text-[160px]">🦉</span>
            </div>
          </div>
        </section>

        {/* 3. Features Section (Master 4 Key Skills) */}
        <section className="py-24 bg-slate-50 border-t-2 border-slate-200 px-6 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-800 tracking-tight mb-4 drop-shadow-sm">Master 4 Key Skills</h2>
              <p className="text-xl text-slate-500 font-bold max-w-2xl mx-auto">
                Level up your English with our fun, bite-sized lessons!
              </p>
            </div>

            {/* 4-Column Vibrant Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Reading */}
              <div className="bg-green-400 rounded-3xl p-6 border-b-8 border-green-600 hover:-translate-y-2 hover:border-b-[12px] active:border-b-0 active:translate-y-2 transition-all cursor-pointer flex flex-col items-center text-center shadow-lg">
                <div className="w-24 h-24 mb-6 flex items-center justify-center drop-shadow-md bg-white rounded-2xl border-b-4 border-slate-200">
                  <span className="text-5xl">📖</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2 tracking-wide uppercase">Reading</h3>
                <p className="text-green-50 font-bold text-lg leading-tight">
                  Understand more, read better.
                </p>
              </div>

              {/* Writing */}
              <div className="bg-amber-400 rounded-3xl p-6 border-b-8 border-amber-600 hover:-translate-y-2 hover:border-b-[12px] active:border-b-0 active:translate-y-2 transition-all cursor-pointer flex flex-col items-center text-center shadow-lg">
                <div className="w-24 h-24 mb-6 flex items-center justify-center drop-shadow-md bg-white rounded-2xl border-b-4 border-slate-200">
                  <span className="text-5xl">✍️</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2 tracking-wide uppercase">Writing</h3>
                <p className="text-amber-50 font-bold text-lg leading-tight">
                  Write clearly, express freely.
                </p>
              </div>

              {/* Speaking */}
              <div className="bg-purple-400 rounded-3xl p-6 border-b-8 border-purple-600 hover:-translate-y-2 hover:border-b-[12px] active:border-b-0 active:translate-y-2 transition-all cursor-pointer flex flex-col items-center text-center shadow-lg">
                <div className="w-24 h-24 mb-6 flex items-center justify-center drop-shadow-md bg-white rounded-2xl border-b-4 border-slate-200">
                  <span className="text-5xl">🗣️</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2 tracking-wide uppercase">Speaking</h3>
                <p className="text-purple-50 font-bold text-lg leading-tight">
                  Speak fluently with AI feedback.
                </p>
              </div>

              {/* Listening */}
              <div className="bg-blue-400 rounded-3xl p-6 border-b-8 border-blue-600 hover:-translate-y-2 hover:border-b-[12px] active:border-b-0 active:translate-y-2 transition-all cursor-pointer flex flex-col items-center text-center shadow-lg">
                <div className="w-24 h-24 mb-6 flex items-center justify-center drop-shadow-md bg-white rounded-2xl border-b-4 border-slate-200">
                  <span className="text-5xl">🎧</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2 tracking-wide uppercase">Listening</h3>
                <p className="text-blue-50 font-bold text-lg leading-tight">
                  Train your ear with native audio.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 4. Footer */}
      <footer className="bg-slate-100 py-12 px-6 lg:px-16 text-slate-400 border-t-2 border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-black text-slate-300 tracking-tight">Nur English</span>
          </div>
          <div className="flex space-x-6 text-sm font-extrabold uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-green-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-green-500 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Welcome;
