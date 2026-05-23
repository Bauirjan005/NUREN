import React from 'react';

const Premium = () => {
  const features = [
    { text: "Ad-free learning", emoji: "🚫" },
    { text: "Unlimited access to all lessons", emoji: "♾️" },
    { text: "Personal progress analytics", emoji: "📈" },
    { text: "Offline learning mode", emoji: "✈️" },
  ];

  return (
    <div className="flex flex-col h-full space-y-6 pb-10">
      <div className="flex flex-col items-center justify-center pt-4 pb-2 text-center">
        <div className="w-20 h-20 bg-amber-400 rounded-[32px] flex items-center justify-center mb-4 border-b-8 border-amber-600 drop-shadow-md animate-bounce">
          <span className="text-5xl">⭐</span>
        </div>
        <h1 className="text-4xl font-black text-amber-500 tracking-tight mb-2 drop-shadow-sm">
          Nur Premium
        </h1>
        <p className="text-slate-500 font-bold px-4 text-lg">
          Learn English unlimitedly and efficiently!
        </p>
      </div>

      {/* Gamified Pricing Card */}
      <div className="bg-amber-400 rounded-3xl p-8 border-b-8 border-amber-600 shadow-xl relative overflow-hidden flex flex-col items-center">
        
        {/* Glow effects - comic style */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600/30 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3"></div>

        <div className="relative z-10 flex flex-col items-center w-full">
          <span className="bg-white text-amber-500 font-black px-4 py-2 rounded-2xl border-b-4 border-slate-200 uppercase tracking-widest mb-6">
            Most popular
          </span>
          
          <div className="flex items-end justify-center space-x-1 mb-8 bg-white/20 py-4 px-8 rounded-3xl border-2 border-white/40">
            <span className="text-6xl font-black text-white drop-shadow-md">$4.99</span>
            <span className="text-xl font-black text-amber-100 mb-2 uppercase">/ mo</span>
          </div>

          <div className="w-full space-y-4 mb-8 bg-white rounded-3xl p-6 border-4 border-amber-200">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-4 text-left">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-amber-100 border-2 border-amber-200 border-b-4 flex items-center justify-center">
                  <span className="text-2xl">{feature.emoji}</span>
                </div>
                <span className="text-slate-800 font-black text-lg">{feature.text}</span>
              </div>
            ))}
          </div>

          <button className="w-full bg-white hover:bg-slate-50 text-amber-500 font-black text-2xl py-5 rounded-3xl border-b-[8px] border-slate-200 active:border-b-0 active:translate-y-2 transition-all uppercase tracking-wider shadow-lg">
            Subscribe Now
          </button>
          
          <p className="text-amber-100 text-sm mt-6 font-bold uppercase tracking-wider">
            Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default Premium;
