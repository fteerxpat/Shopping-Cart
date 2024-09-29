import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Coupon from './components/Coupon';
import './index.css'; 
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [appliedCoupon, setAppliedCoupon] = useState('');

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex(item => item.id === product.id);
      if (itemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += 1;
        return updatedItems;
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems((prevItems) => prevItems.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const applyCoupon = (coupon) => {
    setAppliedCoupon(coupon);
    if (coupon === 'csmju') {
      alert('คูปอง csmju ใช้ได้: จัดส่งฟรี!');
    } else if (coupon === 'jarnjosmart') {
      alert('คูปอง jarnjosmart ใช้แล้ว: ส่วนลด 50%!');
    }
  };

  return (
    <div className="App container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 flex flex-col items-center justify-center">ITCOOL SHOP</h1>
      <ProductList addToCart={addToCart} />
      <ShoppingCart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        appliedCoupon={appliedCoupon} 
      />
      <Coupon applyCoupon={applyCoupon} />
    </div>
  );
}

export default App;