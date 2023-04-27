import React, { useCallback, useEffect, useState } from 'react';
import './ProductGrid.css';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
 

    
      
  return (
    <div>
             
            <div className="product-grid">
         {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}

            </div>
        </div>
  );
};

export default ProductGrid;
