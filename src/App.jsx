import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider, useUser } from './context/UserContext';
import GlobalLayout from './components/layout/GlobalLayout';
import Welcome from './pages/Welcome';
import Auth from './pages/Auth'; 
import Home from './pages/Home';
import Dictionary from './pages/Dictionary';
import Stats from './pages/Stats';
import Premium from './pages/Premium';
import Profile from './pages/Profile';

// Core Skill Pages
import Reading from './pages/Reading';
import Writing from './pages/Writing';
import Speaking from './pages/Speaking';
import Listening from './pages/Listening';
import LessonView from './pages/LessonView'; // New interactive viewer

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useUser();
  if (!isLoggedIn) {
    return <Navigate to="/welcome" replace />;
  }
  return children;
};

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          {/* Onboarding & Auth */}
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/auth" element={<Auth />} />
          
          {/* Main App Layout (Protected) */}
          <Route path="/" element={
            <ProtectedRoute>
              <GlobalLayout />
            </ProtectedRoute>
          }>
            {/* Bottom Nav Pages */}
            <Route index element={<Home />} />
            <Route path="dictionary" element={<Dictionary />} />
            <Route path="stats" element={<Stats />} />
            <Route path="premium" element={<Premium />} />
            <Route path="profile" element={<Profile />} />
            
            {/* Core Skills Paths (Maps) */}
            <Route path="reading" element={<Reading />} />
            <Route path="writing" element={<Writing />} />
            <Route path="speaking" element={<Speaking />} />
            <Route path="listening" element={<Listening />} />
            
            {/* Active Lesson Viewer */}
            <Route path="lesson/:skill/:id" element={<LessonView />} />
          </Route>
          
          {/* Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/welcome" replace />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
