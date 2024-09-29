import React, { useState } from 'react';

const Coupon = ({ applyCoupon }) => {
  const [couponCode, setCouponCode] = useState('');

  const handleApplyCoupon = () => {
    if (couponCode === 'csmju' || couponCode === 'jarnjosmart') {
      applyCoupon(couponCode);
    } else {
      alert('รหัสคูปองไม่ถูกต้อง!');
    }
  };

  return (
    <div className="mt-4 p-4 border rounded">
      <h2 className="text-xl font-bold mb-2">คูปองส่วนลด</h2>
      <input
        type="text"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        placeholder="ใส่รหัสคูปอง csmju ค่าจัดส่งฟรี หรือ jarnjosmart ลด 50% (ใส่ได้แค่ 1 คูปองเท่านั้น)"
        className="border p-2 rounded w-full"
      />
      <button
        onClick={handleApplyCoupon}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
      >
        ตกลง
      </button>
    </div>
  );
};

export default Coupon;
