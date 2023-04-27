import React, { useState } from 'react';
import './ProductGrid.css';
import ProductCard from './ProductCard';
import { FaShoppingCart } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';
import Cart from './Cart';
const ProductGrid = ({ products }) => {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
  };
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
  const [cartOpen, setCartOpen] = useState(false);

  const handleCartOpen = () => {
    setCartOpen(true);
  };

  const handleCartClose = () => {
    setCartOpen(false);
    setShow(false);

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
      <button className="cart-button" onClick={handleCartOpen}>
          <FaShoppingCart />
        </button>
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} 
           addToCart={() => addToCart(product)}
          removeFromCart={() => removeFromCart(product)}
          inCart={cart.some((item) => item.id === product.id)}/>
        ))}
      </div>
      {
            cartOpen?
            <> <Cart cartItems={cart} removeItem={removeFromCart} show={true} setShow={handleCartClose}></Cart></>
            :
            <></>


      }
    </div>
  );
};

export default ProductGrid;
