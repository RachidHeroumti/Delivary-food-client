import React, { useState, useEffect } from 'react';

function CartItems() {
  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState(0);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const cartLs = JSON.parse(localStorage.getItem('cart')) || [];
    if (cartLs.length > 0) {
      setCartList(cartLs);
      calculateTotal(cartLs);
    }
  }, []);

  // Calculate the total price of items in the cart
  const calculateTotal = (cartItems) => {
    const totalAmount = cartItems.reduce((acc, item) => {
      return acc + item.price * (item.quantity || 1);
    }, 0);
    setTotal(totalAmount);
  };

  // Increment item quantity
  const increment = (id) => {
    const updatedCartList = cartList.map((item) => {
      if (item.id === id) {
        item.quantity = (item.quantity || 1) + 1;
      }
      return item;
    });
    setCartList(updatedCartList);
    localStorage.setItem('cart', JSON.stringify(updatedCartList));
    calculateTotal(updatedCartList);
  };

  // Decrement item quantity
  const decrement = (id) => {
    const updatedCartList = cartList.map((item) => {
      if (item.id === id && item.quantity > 1) {
        item.quantity -= 1;
      }
      return item;
    });
    setCartList(updatedCartList);
    localStorage.setItem('cart', JSON.stringify(updatedCartList));
    calculateTotal(updatedCartList);
  };

  // Remove an item from the cart
  const removeFromCart = (id) => {
    const updatedCartList = cartList.filter((item) => item.id !== id);
    setCartList(updatedCartList);
    localStorage.setItem('cart', JSON.stringify(updatedCartList));
    calculateTotal(updatedCartList);
  };

  return (
    <div className='pt-10'>
      <div className='grid grid-cols-1 gap-5 p-5'>
        {cartList && cartList.map((item, i) => (
          <div key={i} className='flex flex-col sm:flex-row items-center sm:p-5 bg-gray-50'>
            <img src={item.image} className='w-[100px] h-[120px]' alt={item.name} />
            <div className='sm:px-5 p-1'>
              <h1 className='sm:text-3xl text-2xl font-bold'>{item.name}</h1>
              <h1 className='text-orange-700 text-xl font-bold'>{item.price} $$</h1>

              <div className='space-x-1'>
                <span className='border text-xl font-bold px-2 cursor-pointer bg-gray-100' onClick={() => decrement(item.id)}>-</span>
                <span className='border text-xl font-bold px-2 bg-gray-100'>{item.quantity || 1}</span>
                <span className='border text-xl font-bold px-2 cursor-pointer bg-gray-100' onClick={() => increment(item.id)}>+</span>
              </div>
            </div>
            <button className='ml-auto p-2 text-red-600' onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className='text-2xl font-bold space-x-2 p-2 text-orange-600 flex justify-end  '>
        <span>Total:</span> <span>{total.toFixed(2)}$</span>
      </div>
    </div>
  );
}

export default CartItems;
