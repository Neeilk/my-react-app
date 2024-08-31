import React from 'react';
import './ChatBox.css';

function ChatBox({ onClose }) {
  return (
    <div className="chat-box">
      <div className="chat-header">
        <h2>Welcome to HashiCorp</h2>
        <p>How can we help you today?</p>
        <button onClick={onClose} className="close-button">×</button>
      </div>
      <div className="chat-options">
        <button>Chat with sales</button>
        <button>Try HashiCorp Cloud Platform free</button>
        <button>Learn about The Infrastructure Cloud</button>
        <button>Get support</button>
      </div>
      <p className="chat-footer">This chat may be recorded as described in our Privacy Policy.</p>
    </div>
  );
}

export default ChatBox;
