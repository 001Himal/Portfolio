import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CursorGlow from './components/CursorGlow';
import ProgressBar from './components/ProgressBar';
import Terminal from './components/Terminal';
import SplitLayout from './components/SplitLayout';
import Admin from './pages/Admin';
import { AdminProvider } from './AdminContext';

function Portfolio() {
  return (
    <div className="app">
      <CursorGlow />
      <ProgressBar />
      <Terminal />
      <SplitLayout />
    </div>
  );
}

function App() {
  return (
    <AdminProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </HashRouter>
    </AdminProvider>
  );
}

export default App;
