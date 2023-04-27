import React, { useCallback, useEffect, useState } from 'react';
 

const ProductCard = ({ product , addToCart, removeFromCart, inCart  }) => {
  const { name, description, price, image, category } = product;
 
  const getCategoryColor = (id) => {
    switch (id) {
      case 1:
        return 'category1';
      case 2:
        return 'category2';
        case 3:
            return 'category3';
        case 4:
            return 'category4';
        case 5:
            return 'category5';
   
      default:
        return 'default';
    }
  };
 

  return (
    <div className="product-card">
      <div>
        <img src={image} alt={name} />
        <p className={`product-card-category ${getCategoryColor(product.category.id)}`}>{product.category.name}</p>
        <h6><b>{name}</b></h6>
        <p>{description}</p>
        <p>{price} RSD</p>
      </div>
      <div className="product-buttons">
        {inCart ? (
          <button className="button" onClick={removeFromCart}>
            Ukloni iz korpe
          </button>
        ) : (
          <button className="button" onClick={addToCart}>
            Dodaj u korpu
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
