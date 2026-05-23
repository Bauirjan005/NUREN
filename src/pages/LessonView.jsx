import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, CheckCircle2, Pause, Volume2, Mic, Star, Loader2, Play, Activity } from 'lucide-react';
import { useUser } from '../context/UserContext';

// Dynamic Lesson Data
const readingData = {
  1: { text: "Hello! My name is Alex. I live in a big city.", question: "Where does Alex live?", correct: "In a big city", wrong: "In a small village", hint: "Read the second sentence carefully!" },
  2: { text: "Apples are my favorite fruit. I eat one every day.", question: "What is the favorite fruit?", correct: "Apples", wrong: "Bananas", hint: "The text mentions a red or green fruit that keeps the doctor away." },
  3: { text: "The weather today is very sunny and warm. It is perfect for a walk.", question: "How is the weather?", correct: "Sunny and warm", wrong: "Cold and raining", hint: "Look for the words describing the sun and temperature." },
  4: { text: "Technology has completely changed how we live. We have information at our fingertips.", question: "What changed our lives?", correct: "Technology", wrong: "Animals", hint: "The first word of the story is the answer." },
  5: { text: "Space exploration helps us understand the universe and our place in it.", question: "What helps us understand the universe?", correct: "Space exploration", wrong: "Deep sea diving", hint: "The text talks about looking up at the stars." }
};
const defaultReading = { text: "Learning new languages opens up new worlds and opportunities.", question: "What does learning languages do?", correct: "Opens new worlds", wrong: "Closes doors", hint: "The text says it 'opens up new worlds'." };

const writingData = {
  1: { pre: ["The", "cat"], gap: "sat", post: ["on", "the", "mat."], wrong: "sleeps", hint: "\"Sleeps\" usually requires the preposition \"in\" (e.g., in the bed). Try a word that means taking a seat!" },
  2: { pre: ["I", "like", "to"], gap: "drink", post: ["water", "every", "morning."], wrong: "eat", hint: "You can't 'eat' liquids like water! Try a verb for liquids." },
  3: { pre: ["She", "is"], gap: "reading", post: ["a", "very", "interesting", "book."], wrong: "running", hint: "You can't 'run' a book! Think about what you do with words on a page." },
  4: { pre: ["The", "sun", "is", "very"], gap: "hot", post: ["today!"], wrong: "cold", hint: "The sun is a giant star made of fire. It's definitely not freezing!" },
  5: { pre: ["We", "are"], gap: "going", post: ["to", "the", "park", "later."], wrong: "doing", hint: "When traveling to a destination, we use the verb 'go'." }
};
const defaultWriting = { pre: ["They", "are"], gap: "learning", post: ["English", "right", "now!"], wrong: "swimming", hint: "You don't swim in English! What do you do when you study?" };

const speakingData = {
  1: "Hello, how are you?",
  2: "I like learning English!",
  3: "Where is the nearest hospital?",
  4: "Can I have a cup of coffee, please?",
  5: "It is a beautiful day outside."
};
const defaultSpeaking = "I am practicing my speaking skills.";

const listeningData = {
  1: { section: "Greetings", text: "Good morning! How are you doing today?" },
  2: { section: "Daily Life", text: "I usually wake up at seven and have breakfast." },
  3: { section: "Travel", text: "The train to London departs at nine thirty." },
  4: { section: "Food", text: "I would like to order a large pizza and a cola." },
  5: { section: "Weather", text: "It looks like it's going to rain this afternoon." }
};
const defaultListening = { section: "General", text: "Listening to native speakers improves your comprehension." };

const LessonView = () => {
  const { skill, id } = useParams();
  const navigate = useNavigate();
  const { completeLesson } = useUser();
  
  const [success, setSuccess] = useState(false);
  
  // Shared interactive states
  const [isPlaying, setIsPlaying] = useState(false);
  const [quizStatus, setQuizStatus] = useState(null);
  const [selectedWord, setSelectedWord] = useState(null);
  const [micStatus, setMicStatus] = useState('idle');

  // Reset states when ID changes
  useEffect(() => {
    setSelectedWord(null);
    setQuizStatus(null);
    setMicStatus('idle');
    setSuccess(false);
  }, [id, skill]);

  useEffect(() => {
    return () => window.speechSynthesis.cancel();
  }, []);

  const finishLesson = () => {
    completeLesson(skill, parseInt(id));
    setSuccess(true);
  };

  const playAudio = (text) => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      utterance.onend = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  const handleMicClick = () => {
    if (micStatus !== 'idle') return;
    setMicStatus('recording');
    setTimeout(() => {
      setMicStatus('processing');
      setTimeout(() => {
        setMicStatus('done');
        setTimeout(finishLesson, 1000); 
      }, 1500);
    }, 3000);
  };

  if (success) {
    return (
      <div className="flex flex-col h-full items-center justify-center space-y-8 bg-white rounded-3xl p-8 border-4 border-slate-200 border-b-8 text-center shadow-sm">
        <div className="w-32 h-32 bg-yellow-400 rounded-3xl flex items-center justify-center animate-bounce border-b-8 border-yellow-600">
          <span className="text-6xl">⭐</span>
        </div>
        <div>
          <h1 className="text-4xl font-black text-slate-800 mb-2 uppercase tracking-tight">Lesson Complete!</h1>
          <div className="inline-block px-6 py-3 rounded-2xl border-4 border-green-200 bg-green-100">
            <p className="text-2xl font-black text-green-600 tracking-wider">+50 XP EARNED</p>
          </div>
        </div>
        <button 
          onClick={() => navigate(-1)}
          className="w-full bg-green-400 hover:bg-green-500 text-white font-black py-5 text-xl rounded-2xl border-b-8 border-green-600 active:border-b-0 active:translate-y-2 transition-all uppercase tracking-widest mt-8"
        >
          Continue
        </button>
      </div>
    );
  }

  const renderReading = () => {
    const data = readingData[id] || defaultReading;

    return (
      <div className="flex flex-col h-full space-y-6 pb-20">
        <div className="bg-white rounded-3xl p-6 border-4 border-slate-200 shadow-sm relative">
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-400 text-white rounded-2xl border-b-4 border-green-600 flex items-center justify-center font-black text-xl rotate-[-10deg]">
            {id}
          </div>
          
          <h2 className="text-2xl font-black text-slate-800 mb-4 ml-6 uppercase tracking-tight">Read the story</h2>
          <div className="text-xl leading-relaxed text-slate-700 font-bold mb-6 bg-slate-50 p-6 rounded-3xl border-2 border-slate-200 border-dashed">
            {data.text}
          </div>
          
          <button onClick={() => playAudio(data.text)} className={`w-full flex items-center justify-center space-x-2 px-4 py-4 rounded-2xl font-black transition-all text-lg uppercase tracking-wider ${isPlaying ? 'bg-green-200 border-2 border-green-300 text-green-700' : 'bg-green-100 border-2 border-green-200 border-b-4 text-green-600 active:border-b-0 active:translate-y-1'}`}>
            <span className="text-2xl">{isPlaying ? '⏹️' : '🔊'}</span>
            <span>{isPlaying ? 'Stop Audio' : 'Listen'}</span>
          </button>
        </div>
        
        <div className="bg-white rounded-3xl p-6 border-4 border-slate-200 shadow-sm flex-1">
          <h3 className="font-black text-slate-800 text-xl mb-4">{data.question}</h3>
          <div className="space-y-4">
            <button 
              onClick={() => setQuizStatus('incorrect')} 
              className={`w-full text-left p-5 rounded-2xl border-4 font-black transition-all flex justify-between items-center text-lg ${quizStatus === 'incorrect' ? 'border-red-400 bg-red-100 text-red-600' : 'border-slate-200 border-b-[6px] hover:-translate-y-1 hover:border-b-[8px] active:border-b-0 active:translate-y-1 bg-white text-slate-700'}`}
            >
              {data.wrong}
            </button>
            
            {quizStatus === 'incorrect' && (
              <div className="bg-orange-100 border-2 border-orange-200 rounded-2xl p-4 flex items-start space-x-3 animate-[fadeIn_0.3s_ease-out]">
                <span className="text-2xl mt-0.5">💡</span>
                <div>
                  <h4 className="font-black text-orange-600 uppercase tracking-wider text-sm mb-1">Hint</h4>
                  <p className="font-bold text-orange-700 text-sm">{data.hint}</p>
                </div>
              </div>
            )}

            <button 
              onClick={() => finishLesson()} 
              className="w-full text-left p-5 rounded-2xl border-4 border-slate-200 border-b-[6px] hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-50 active:border-b-0 active:translate-y-1 text-slate-700 font-black transition-all flex justify-between items-center text-lg"
            >
              {data.correct}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderWriting = () => {
    const data = writingData[id] || defaultWriting;
    const isCorrect = selectedWord === data.gap;
    
    return (
      <div className="bg-white rounded-3xl p-6 border-4 border-slate-200 shadow-sm flex flex-col h-full pb-10">
        <h2 className="text-2xl font-black text-slate-800 mb-6 text-center uppercase tracking-tight">Complete the sentence (Level {id})</h2>
        
        <div className={`p-8 rounded-[32px] border-4 mb-8 flex flex-wrap items-center justify-center gap-4 min-h-[160px] transition-all ${isCorrect ? 'bg-amber-100 border-amber-300' : 'bg-slate-50 border-slate-200 border-dashed'}`}>
          {data.pre.map((w, i) => (
            <span key={`pre-${i}`} className="px-5 py-3 bg-white rounded-2xl border-2 border-slate-200 border-b-4 font-black text-slate-700 text-xl">{w}</span>
          ))}
          
          {selectedWord ? (
            <span className={`px-5 py-3 rounded-2xl border-b-4 font-black text-xl text-white transition-all ${isCorrect ? 'bg-amber-500 border-amber-600' : 'bg-red-500 border-red-600'}`}>
              {selectedWord}
            </span>
          ) : (
            <div className="w-24 h-14 bg-slate-200 border-4 border-dashed border-slate-300 rounded-2xl flex items-center justify-center"></div>
          )}

          {data.post.map((w, i) => (
            <span key={`post-${i}`} className="px-5 py-3 bg-white rounded-2xl border-2 border-slate-200 border-b-4 font-black text-slate-700 text-xl">{w}</span>
          ))}
        </div>

        <div className="mt-auto">
          {isCorrect ? (
            <div className="flex flex-col items-center justify-center text-amber-500 animate-[fadeIn_0.3s_ease-out]">
              <div className="text-6xl mb-4 animate-bounce">🎉</div>
              <button onClick={finishLesson} className="px-8 py-5 bg-green-400 hover:bg-green-500 text-white font-black text-xl rounded-2xl border-b-[8px] border-green-600 active:border-b-0 active:translate-y-2 w-full uppercase tracking-wider transition-all">Continue</button>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-4">
              {selectedWord === data.wrong && (
                <div className="w-full bg-orange-100 border-2 border-orange-200 rounded-2xl p-4 flex items-start space-x-3 animate-[fadeIn_0.3s_ease-out]">
                  <span className="text-2xl mt-0.5">💡</span>
                  <div className="text-left">
                    <h4 className="font-black text-orange-600 uppercase tracking-wider text-sm mb-1">Hint</h4>
                    <p className="font-bold text-orange-700 text-sm">{data.hint}</p>
                  </div>
                </div>
              )}
              <div className="flex justify-center gap-4 flex-wrap w-full">
                <button onClick={() => setSelectedWord(data.wrong)} className={`px-8 py-4 bg-white border-2 border-slate-200 border-b-[6px] active:border-b-0 active:translate-y-1 font-black rounded-2xl text-xl transition-all flex-1 ${selectedWord === data.wrong ? 'bg-red-100 border-red-300 text-red-600' : 'hover:border-amber-400 hover:bg-amber-50 text-slate-700'}`}>{data.wrong}</button>
                <button onClick={() => setSelectedWord(data.gap)} className="px-8 py-4 bg-white border-2 border-slate-200 border-b-[6px] hover:border-amber-400 hover:bg-amber-50 active:border-b-0 active:translate-y-1 text-slate-700 font-black rounded-2xl text-xl transition-all flex-1">{data.gap}</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderSpeaking = () => {
    const data = speakingData[id] || defaultSpeaking;
    
    return (
      <div className="bg-white rounded-3xl p-6 border-4 border-slate-200 shadow-sm flex-1 flex flex-col items-center justify-center relative overflow-hidden pb-10">
        <div className="text-center mb-12 z-10 w-full">
          <p className="text-sm font-black text-purple-500 mb-4 uppercase tracking-widest bg-purple-50 inline-block px-4 py-2 rounded-2xl border-2 border-purple-200">Level {id}</p>
          <div className="relative">
            <h2 className="text-3xl font-black text-slate-800 px-10 leading-tight border-4 border-dashed border-slate-200 bg-slate-50 py-10 rounded-[40px]">
              "{data}"
            </h2>
            <button 
              onClick={() => playAudio(data)}
              className="absolute -top-4 -right-4 w-16 h-16 bg-blue-400 text-white rounded-full border-4 border-white border-b-8 shadow-lg flex items-center justify-center hover:scale-110 active:border-b-4 active:translate-y-1 transition-all"
            >
              <span className="text-3xl ml-1">🔊</span>
            </button>
          </div>
          <p className="text-slate-500 font-bold mt-6 text-sm uppercase tracking-widest">Listen, then speak into the mic</p>
        </div>
        
        <div className={`absolute top-6 right-6 bg-green-100 border-4 border-green-300 px-4 py-2 rounded-2xl flex items-center space-x-2 transition-all duration-500 z-20 ${micStatus === 'done' ? 'opacity-100 translate-y-0 scale-110' : 'opacity-0 -translate-y-4'}`}>
          <span className="text-2xl">⭐</span>
          <span className="font-black text-green-600 text-lg uppercase tracking-wider">Perfect!</span>
        </div>

        <div className="relative mt-4">
          {micStatus === 'recording' && <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-60"></div>}
          <button 
            onClick={handleMicClick} 
            className={`relative w-32 h-32 rounded-full flex items-center justify-center transition-all z-10 border-4 border-white ${
              micStatus === 'recording' ? 'bg-red-500 text-white scale-110 shadow-[0_0_40px_rgba(239,68,68,0.8)]' 
              : micStatus === 'processing' ? 'bg-blue-400 text-white scale-95 border-b-0' 
              : 'bg-purple-400 text-white border-b-[12px] border-purple-600 active:border-b-0 active:translate-y-3 hover:scale-105 shadow-xl'
            }`}
          >
            {micStatus === 'processing' ? <span className="text-6xl animate-spin">⏳</span> : <span className="text-6xl">🎙️</span>}
          </button>
        </div>
      </div>
    );
  };

  const renderListening = () => {
    const data = listeningData[id] || defaultListening;
    
    return (
      <div className="flex flex-col h-full space-y-6 pb-10">
        <div className="bg-blue-400 border-4 border-blue-500 rounded-3xl p-8 shadow-sm text-white relative overflow-hidden transition-all flex-1 flex flex-col justify-center items-center">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-2 uppercase tracking-widest drop-shadow-md">Listen Carefully</h2>
            <div className="bg-blue-500 border-2 border-blue-300 px-4 py-2 rounded-2xl inline-block">
              <span className="font-bold text-blue-100">Level {id} • {data.section}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-2 h-24 mb-12 w-full max-w-sm">
            {[...Array(12)].map((_, i) => {
              const h = 20 + Math.random() * 80;
              return <div key={i} className={`w-3 bg-white rounded-full transition-all duration-300 ${isPlaying ? '' : 'h-4 opacity-50'}`} style={isPlaying ? { height: `${h}%`, animation: `pulse ${1 + Math.random()}s infinite alternate` } : {}}></div>;
            })}
          </div>
          
          <button 
            onClick={() => playAudio(data.text)} 
            className="w-32 h-32 bg-white text-blue-600 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all border-b-[12px] border-slate-200 active:border-b-0 active:translate-y-3 shadow-2xl z-10"
          >
            {isPlaying ? <span className="text-6xl">⏹️</span> : <span className="text-6xl ml-2">▶️</span>}
          </button>
          
          <button onClick={finishLesson} className="mt-16 w-full bg-blue-500 hover:bg-blue-600 text-white font-black text-xl py-5 rounded-2xl border-b-8 border-blue-700 active:border-b-0 active:translate-y-2 uppercase tracking-widest transition-all z-10">
            I Finished Listening
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full space-y-4">
      <div className="flex items-center space-x-3 mb-2">
        <button onClick={() => { window.speechSynthesis.cancel(); navigate(-1); }} className="p-3 bg-white rounded-2xl border-2 border-slate-200 border-b-4 hover:-translate-y-1 active:border-b-0 active:translate-y-1 transition-all">
          <ChevronLeft size={28} className="text-slate-600 font-black" strokeWidth={3} />
        </button>
        <div className="w-full bg-slate-200 h-6 rounded-full border-2 border-slate-300 overflow-hidden relative">
           <div className="h-full bg-green-400 rounded-full" style={{ width: `${Math.min(100, (id / 15) * 100)}%` }}></div>
           <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-xs font-black text-slate-500 uppercase tracking-widest mix-blend-difference">Level {id}/15</div>
        </div>
      </div>
      {skill === 'reading' && renderReading()}
      {skill === 'writing' && renderWriting()}
      {skill === 'speaking' && renderSpeaking()}
      {skill === 'listening' && renderListening()}
    </div>
  );
};

export default LessonView;
