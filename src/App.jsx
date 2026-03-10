import React from 'react';
import './App.css';
import CursorGlow from './components/CursorGlow';
import ProgressBar from './components/ProgressBar';
import Terminal from './components/Terminal';
import SplitLayout from './components/SplitLayout';

function App() {
  return (
    <div className="app">
      <CursorGlow />
      <ProgressBar />
      <Terminal />
      <SplitLayout />
    </div>
  );
}

export default App;
