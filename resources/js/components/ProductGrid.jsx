import React, { useState } from 'react';
import './ProductGrid.css';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(product => {
    // Filtriranje na osnovu kategorije proizvoda
    if (filter !== '' && product.category.id !== parseInt(filter)) {
      return false;
    }

    // Pretraga po nazivu proizvoda
    if (search !== '' && !product.name.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }

    return true;
  });

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const handleSearchChange = event => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <div className="filters">
        <select value={filter} onChange={handleFilterChange}>
          <option value="">Sve kategorije</option>
          <option value="1">Desktop računari</option>
          <option value="2">Laptop računari</option>
          <option value="3">Monitori</option>
          <option value="4">Periferija</option>
          <option value="5">Mrežna oprema</option>
        </select>
        <input type="text" value={search} onChange={handleSearchChange} placeholder="Pretraga proizvoda" />
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
