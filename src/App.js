import React from 'react';
import Header from './components/Header';
import ProductSection from './components/ProductSection';
import CloudPlatform from './components/CloudPlatform';
import './App.css';

const infrastructureProducts = [
  { name: 'Terraform', description: 'Provisioning cloud infrastructure using a common workflow', icon: 'terraform-icon' },
  { name: 'Packer', description: 'Build and manage images as code', icon: 'packer-icon' },
  { name: 'Waypoint', description: 'Internal developer platform', icon: 'waypoint-icon' },
  { name: 'Nomad', description: 'Workload scheduling and orchestration', icon: 'nomad-icon' },
];

const securityProducts = [
  { name: 'Vault', description: 'Identity-based secrets management', icon: 'vault-icon' },
  { name: 'Boundary', description: 'Secure remote access', icon: 'boundary-icon' },
  { name: 'Consul', description: 'Service-based networking', icon: 'consul-icon' },
];

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="product-dropdown">
          <ProductSection title="Infrastructure Lifecycle Management" products={infrastructureProducts} />
          <ProductSection title="Security Lifecycle Management" products={securityProducts} />
          <CloudPlatform />
        </div>
      </main>
    </div>
  );
}

export default App;
