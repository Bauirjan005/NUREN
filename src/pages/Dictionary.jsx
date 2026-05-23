import React, { useState } from 'react';
import { dictionaryWords } from '../data/dictionaryData';

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWords = dictionaryWords.filter(word => 
    word.en.toLowerCase().includes(searchTerm.toLowerCase()) || 
    word.ru.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const playAudio = (text, e) => {
    e.stopPropagation();
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex flex-col h-full space-y-6 pb-20">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-3xl font-black text-slate-800 tracking-tight">Dictionary</h1>
        <div className="bg-blue-100 text-blue-600 font-black px-4 py-2 rounded-2xl border-2 border-blue-200 border-b-4">
          📚 {dictionaryWords.length} Words
        </div>
      </div>

      {/* Gamified Search Bar */}
      <div className="relative sticky top-4 z-20">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <span className="text-2xl">🔍</span>
        </div>
        <input 
          type="text" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search words..." 
          className="w-full bg-white border-4 border-slate-200 text-slate-800 placeholder-slate-400 pl-14 pr-4 py-4 rounded-3xl outline-none focus:border-blue-400 focus:shadow-[0_8px_0_0_rgba(96,165,250,1)] transition-all font-bold text-lg shadow-[0_8px_0_0_rgba(226,232,240,1)]"
        />
      </div>

      {/* Gamified Word List */}
      <div className="space-y-4 pt-4">
        {filteredWords.length > 0 ? (
          filteredWords.map((item, idx) => (
            <div key={idx} onClick={(e) => playAudio(item.en, e)} className="bg-white rounded-3xl p-5 border-4 border-slate-200 border-b-8 shadow-sm flex items-center justify-between cursor-pointer hover:-translate-y-1 hover:border-b-[10px] hover:border-blue-300 active:border-b-0 active:translate-y-2 transition-all group">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-800 group-hover:text-blue-500 transition-colors">{item.en}</span>
                <span className="text-lg font-bold text-slate-500">{item.ru}</span>
              </div>
              
              <button 
                className="w-14 h-14 bg-slate-100 group-hover:bg-blue-100 border-2 border-slate-200 group-hover:border-blue-300 border-b-4 rounded-2xl flex items-center justify-center transition-all"
              >
                <span className="text-2xl">🔊</span>
              </button>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-3xl border-4 border-slate-200 border-dashed">
            <span className="text-6xl mb-4 block">🙈</span>
            <p className="text-xl font-black text-slate-400 uppercase tracking-widest">No words found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dictionary;
