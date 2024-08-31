import React from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="cloud-assessment">
          <span className="badge">Cloud assessment</span>
          <p>How mature is your cloud program? Take this quiz to find out — and get to the next level.</p>
          <button className="start-btn">Start →</button>
        </div>
        <div className="centered-content">
          <h1>Do cloud right</h1>
          <p className="subtitle">Take a unified approach to Infrastructure and Application Lifecycle Management.</p>
          <div className="cta-buttons">
            <button className="primary-btn">Meet The Infrastructure Cloud</button>
            <button className="secondary-btn">Contact sales →</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
