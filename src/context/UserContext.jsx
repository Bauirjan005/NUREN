import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  // Auth State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  // Gamification State
  const [xp, setXp] = useState(150);
  const [level, setLevel] = useState(3);
  
  // Track completed lessons by string key, e.g., "reading-1", "writing-2"
  const [completedLessons, setCompletedLessons] = useState(['reading-1', 'listening-1']);

  const login = (name) => {
    setUserName(name || 'Student');
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };

  const addXp = (amount) => {
    setXp((prev) => {
      const newXp = prev + amount;
      if (newXp >= level * 100) {
        setLevel(l => l + 1);
      }
      return newXp;
    });
  };

  const completeLesson = (skill, lessonId) => {
    const key = `${skill}-${lessonId}`;
    if (!completedLessons.includes(key)) {
      setCompletedLessons(prev => [...prev, key]);
      addXp(50); // Give 50 XP for new lesson
    }
  };

  const isLessonUnlocked = (skill, lessonId) => {
    if (lessonId === 1) return true; // first lesson always unlocked
    return completedLessons.includes(`${skill}-${lessonId - 1}`);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, userName, login, logout, xp, level, completedLessons, addXp, completeLesson, isLessonUnlocked }}>
      {children}
    </UserContext.Provider>
  );
};
