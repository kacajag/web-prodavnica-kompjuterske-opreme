import React from 'react';
 

const ProductCard = ({ product }) => {
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
    <div className={`product-card ${getCategoryColor(category.id)}`}>
      <img src={image} alt={name} />
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{price} RSD</p>
      </div>
    </div>
  );
};

export default ProductCard;
