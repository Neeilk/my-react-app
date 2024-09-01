import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showDevelopersMenu, setShowDevelopersMenu] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">PlatformX</div>
        <nav className="menu">
          <ul>
            <li><a href="#platform">Platform</a></li>
            <li 
              className="products-menu-item"
              onMouseEnter={() => setShowProductsDropdown(true)}
              onMouseLeave={() => setShowProductsDropdown(false)}
            >
              <a href="#products">Products</a>
              {showProductsDropdown && (
                <div className="products-dropdown">
                  <div className="product-section">
                    <h3>Infrastructure Lifecycle Management</h3>
                    <div className="product-grid">
                      <div className="product-item">
                        <div className="product-icon terraform">Tf</div>
                        <div className="product-info">
                          <h4>Terraform</h4>
                          <p>Provisioning cloud infrastructure</p>
                        </div>
                      </div>
                      <div className="product-item">
                        <div className="product-icon packer">P</div>
                        <div className="product-info">
                          <h4>Packer</h4>
                          <p>Build and manage images as code</p>
                        </div>
                      </div>
                      <div className="product-item">
                        <div className="product-icon waypoint">W</div>
                        <div className="product-info">
                          <h4>Waypoint</h4>
                          <p>Internal developer platform</p>
                        </div>
                      </div>
                      <div className="product-item">
                        <div className="product-icon nomad">N</div>
                        <div className="product-info">
                          <h4>Nomad</h4>
                          <p>Workload scheduling and orchestration</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-section">
                    <h3>Security Lifecycle Management</h3>
                    <div className="product-grid">
                      <div className="product-item">
                        <div className="product-icon vault">V</div>
                        <div className="product-info">
                          <h4>Vault</h4>
                          <p>Identity-based secrets management</p>
                        </div>
                      </div>
                      <div className="product-item">
                        <div className="product-icon boundary">B</div>
                        <div className="product-info">
                          <h4>Boundary</h4>
                          <p>Secure remote access</p>
                        </div>
                      </div>
                      <div className="product-item">
                        <div className="product-icon consul">C</div>
                        <div className="product-info">
                          <h4>Consul</h4>
                          <p>Service-based networking</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li 
              className="developers-menu-item"
              onMouseEnter={() => setShowDevelopersMenu(true)}
              onMouseLeave={() => setShowDevelopersMenu(false)}
            >
              <a href="#developers">Developers</a>
              {showDevelopersMenu && (
                <div className="developers-dropdown">
                  <ul>
                    <li><a href="#docs"><span className="icon-doc">📄</span>Documentation</a></li>
                    <li><a href="#certification"><span className="icon-cert">🏅</span>Certification</a></li>
                    <li><a href="#integrations"><span className="icon-integrate">🔗</span>Integrations</a></li>
                    <li><a href="#webinars"><span className="icon-webinar">🎥</span>Webinars</a></li>
                    <li><a href="#tutorials"><span className="icon-tutorial">📚</span>Tutorials</a></li>
                    <li><a href="#community"><span className="icon-community">👥</span>Community</a></li>
                  </ul>
                </div>
              )}
            </li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#department">Department</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;