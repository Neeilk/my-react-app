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
            <li className="products-menu-item">
              <a href="#products">Products</a>
              <div className="products-dropdown">
                <div className="product-section">
                  <h3>Infrastructure Lifecycle Management</h3>
                  <div className="product-grid">
                    <div className="product-item">
                      <div className="product-icon terraform"></div>
                      <div className="product-info">
                        <h4>Terraform</h4>
                        <p>Provisioning cloud infrastructure using a common workflow</p>
                      </div>
                    </div>
                    <div className="product-item">
                      <div className="product-icon packer"></div>
                      <div className="product-info">
                        <h4>Packer</h4>
                        <p>Build and manage images as code</p>
                      </div>
                    </div>
                    <div className="product-item">
                      <div className="product-icon waypoint"></div>
                      <div className="product-info">
                        <h4>Waypoint</h4>
                        <p>Internal developer platform</p>
                      </div>
                    </div>
                    <div className="product-item">
                      <div className="product-icon nomad"></div>
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
                      <div className="product-icon vault"></div>
                      <div className="product-info">
                        <h4>Vault</h4>
                        <p>Identity-based secrets management</p>
                      </div>
                    </div>
                    <div className="product-item">
                      <div className="product-icon boundary"></div>
                      <div className="product-info">
                        <h4>Boundary</h4>
                        <p>Secure remote access</p>
                      </div>
                    </div>
                    <div className="product-item">
                      <div className="product-icon consul"></div>
                      <div className="product-info">
                        <h4>Consul</h4>
                        <p>Service-based networking</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cloud-platform">
                  <div className="platform-icon"></div>
                  <div className="platform-info">
                    <h4>HashiCorp Cloud Platform</h4>
                    <p>Get started in minutes with our cloud products</p>
                  </div>
                  <a href="#signup" className="signup-link">Sign up for free ↗</a>
                </div>
              </div>
            </li>
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