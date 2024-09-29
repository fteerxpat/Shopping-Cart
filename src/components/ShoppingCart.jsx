import React from 'react';

const ShoppingCart = ({ cartItems, removeFromCart, updateQuantity, appliedCoupon }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const discount =
    appliedCoupon === 'jarnjosmart' ? 0.5 * totalPrice : 0;
  const shippingFee = appliedCoupon === 'csmju' ? 0 : 100;
  const finalPrice = totalPrice - discount + shippingFee;

  const handleCheckout = () => {
    alert(`ยอดชำระทั้งหมด: ${finalPrice} บาท`);
  };

  return (
    <div className="p-4 border mt-4 rounded">
      <h2 className="text-2xl font-bold">รถเข็น</h2>
      {cartItems.length === 0 ? (
        <p>รถเข็นของคุณว่างเปล่า</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <div>
                <h3>{item.name}</h3>
                <p>ราคา: {item.price} บาท</p>
                <p>ปริมาณ:
                <button
                  className="bg-blue-500 text-white mt-2 px-4 py-2 rounded"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  className="bg-blue-500 text-white mt-2 px-4 py-2 rounded"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200 bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 px-4 py-2"
              >
                ลบ
              </button>
            </div>
          ))}
          <div className="mt-4">
            <h3>ราคารวม: {totalPrice} บาท</h3>
            {discount > 0 && <h3>ลดราคา: {discount} บาท</h3>}
            <h3>ค่าจัดส่ง: {shippingFee} บาท</h3>
            <h3>ยอดชำระทั้งหมด: {finalPrice} บาท</h3>
          </div>
          <button
            onClick={handleCheckout}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
          >
            ชำระเงิน
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;