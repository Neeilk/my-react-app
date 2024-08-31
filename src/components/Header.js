import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">HashiCorp</div>
        <nav className="menu">
          <ul>
            <li><a href="#platform">Platform</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#developers">Developers</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#company">Company</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;