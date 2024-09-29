import React from 'react';
import { products } from '../data/products';

const ProductList = ({ addToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <h2 className="text-xl font-bold mt-2">{product.name}</h2>
          <p>ราคา: {product.price} บาท</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white mt-2 px-4 py-2 rounded"
          >
            เพิ่มลงในรถเข็น
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
