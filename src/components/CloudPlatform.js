import React from 'react';
import './CloudPlatform.css';

function CloudPlatform() {
  return (
    <div className="cloud-platform">
      <div className="platform-info">
        <span className="platform-icon"></span>
        <h3>HashiCorp Cloud Platform</h3>
        <p>Get started in minutes with our cloud products</p>
      </div>
      <a href="#" className="sign-up-link">Sign up for free</a>
    </div>
  );
}

export default CloudPlatform;