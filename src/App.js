import React, { useState } from 'react';
import Header from './components/Header';
import ChatBox from './components/ChatBox';
import './App.css';

function App() {
  const [showChatBox, setShowChatBox] = useState(false);

  const toggleChatBox = () => {
    setShowChatBox(!showChatBox);
  };
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
        <div className="chat-container">
        <button onClick={toggleChatBox} className="chat-toggle">
          {showChatBox ? '×' : 'Chat'}
        </button>
        {showChatBox && <ChatBox onClose={() => setShowChatBox(false)} />}
      </div>
      </main>
    </div>
  );
}

export default App;
