import React from 'react';

function ProductSection({ title, products }) {
  return (
    <section className="product-section">
      <h2>{title}</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.name} className="product-card">
            <div className={`product-icon ${product.icon}`}></div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
