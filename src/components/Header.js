import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const [showDevelopersMenu, setShowDevelopersMenu] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">HashiCorp</div>
        <nav className="menu">
          <ul>
            <li><a href="#platform">Platform</a></li>
            <li 
              className="products-menu-item"
              onMouseEnter={() => setShowProductsMenu(true)}
              onMouseLeave={() => setShowProductsMenu(false)}
            >
              <a href="#products">Products</a>
              <div className={`products-dropdown ${showProductsMenu ? 'show' : ''}`}>
                <div className="product-section">
                  <h3>Infrastructure Lifecycle Management</h3>
                  <div className="product-grid">
                    <div className="product-item">
                      <div className="product-icon terraform">Tf</div>
                      <div className="product-info">
                        <h4>Terraform</h4>
                        <p>Infrastructure as Code</p>
                      </div>
                    </div>
                    <div className="product-item">
                      <div className="product-icon packer">P</div>
                      <div className="product-info">
                        <h4>Packer</h4>
                        <p>Machine Image Automation</p>
                      </div>
                    </div>
                    <div className="product-item">
                      <div className="product-icon consul">C</div>
                      <div className="product-info">
                        <h4>Consul</h4>
                        <p>Service Networking</p>
                      </div>
                    </div>
                    <div className="product-item">
                      <div className="product-icon nomad">N</div>
                      <div className="product-info">
                        <h4>Nomad</h4>
                        <p>Workload Orchestration</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-section">
                  <h3>Application Lifecycle Management</h3>
                  <div className="product-grid">
                    <div className="product-item">
                      <div className="product-icon vault">V</div>
                      <div className="product-info">
                        <h4>Vault</h4>
                        <p>Secrets Management</p>
                      </div>
                    </div>
                    <div className="product-item">
                      <div className="product-icon boundary">B</div>
                      <div className="product-info">
                        <h4>Boundary</h4>
                        <p>Secure Remote Access</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cloud-platform">
                  <div className="platform-icon">HCP</div>
                  <div className="platform-info">
                    <h4>HashiCorp Cloud Platform</h4>
                    <p>Get started in minutes with our cloud products</p>
                  </div>
                  <a href="#signup" className="signup-link">Sign up for free ↗</a>
                </div>
              </div>
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
                    <li><a href="#documentation"><i className="icon-doc"></i> Documentation</a></li>
                    <li><a href="#certifications"><i className="icon-cert"></i> Certifications</a></li>
                    <li><a href="#integrations"><i className="icon-integrate"></i> Integrations</a></li>
                    <li><a href="#webinars"><i className="icon-webinar"></i> Webinars</a></li>
                    <li><a href="#tutorials"><i className="icon-tutorial"></i> Tutorials</a></li>
                    <li><a href="#community"><i className="icon-community"></i> Community</a></li>
                    <li><a href="#service-status"><i className="icon-status"></i> Service status</a></li>
                  </ul>
                </div>
              )}
            </li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#company">Company</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;