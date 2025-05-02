import React, { useState, useEffect } from 'react';
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

function CartItems() {
  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cartLs = JSON.parse(localStorage.getItem('cart')) || [];
    setCartList(cartLs);
    calculateTotal(cartLs);
    setIsLoading(false);
  }, []);

  const calculateTotal = (cartItems) => {
    const totalAmount = cartItems.reduce((acc, item) => {
      return acc + item.price * (item.quantity || 1);
    }, 0);
    setTotal(totalAmount);
  };

  const updateCart = (updatedCart) => {
    setCartList(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const increment = (id) => {
    const updatedCartList = cartList.map(item => 
      item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    updateCart(updatedCartList);
  };

  const decrement = (id) => {
    const updatedCartList = cartList.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    updateCart(updatedCartList);
  };

  const removeFromCart = (id) => {
    const updatedCartList = cartList.filter(item => item.id !== id);
    updateCart(updatedCartList);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (cartList.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center py-20"
      >
        <div className="text-4xl mb-4">🛒</div>
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
        <p className="text-gray-500">Add some delicious items to get started!</p>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Cart</h1>
      
      <div className="space-y-4 mb-8">
        <AnimatePresence>
          {cartList.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col sm:flex-row items-center bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-full sm:w-32 h-32 relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 p-4 sm:p-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <FiTrash2 size={20} />
                  </button>
                </div>
                
                <p className="text-orange-600 font-bold text-lg mt-1">${item.price}</p>
                
                <div className="flex items-center mt-4">
                  <button 
                    onClick={() => decrement(item.id)}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                  >
                    <FiMinus size={16} />
                  </button>
                  <span className="mx-4 text-lg font-medium w-8 text-center">
                    {item.quantity || 1}
                  </span>
                  <button 
                    onClick={() => increment(item.id)}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                  >
                    <FiPlus size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      <div className="border-t border-gray-200 pt-6">
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold text-gray-700">Total:</span>
          <span className="text-2xl font-bold text-orange-600">${total}</span>
        </div>
        
        <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-md hover:shadow-lg">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItems;