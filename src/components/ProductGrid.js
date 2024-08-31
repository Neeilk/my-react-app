import React from 'react';
import './ProductGrid.css';

function ProductGrid() {
  const products = [
    { name: 'Terraform', description: 'Provisioning cloud infrastructure using a common workflow', color: 'purple' },
    { name: 'Packer', description: 'Build and manage images as code', color: 'blue' },
    { name: 'Waypoint', description: 'Internal developer platform', color: 'teal' },
    { name: 'Nomad', description: 'Workload scheduling and orchestration', color: 'green' },
  ];

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <div key={index} className={`product-card ${product.color}`}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
