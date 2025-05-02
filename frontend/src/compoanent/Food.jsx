import React, { useState } from 'react';
import { data } from "../data/data";
import { FaWhatsapp } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Food() {
  const [food, setFood] = useState(data);
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();

  const toastOptions = {
    position: "bottom-right",
    autoClose: 500,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  const filterCategory = (category) => {
    if (category === "all") {
      setFood(data);
    } else {
      setFood(data.filter((item) => item.category === category));
    }
  };

  const filterPrice = (type) => {
    if (type === "") {
      setFood(data);
    } else {
      setFood(data.filter((item) => item.price === type));
    }
  };

  const handleQuantityChange = (id, delta) => {
    setQuantities(prevQuantities => {
      const newQuantities = { ...prevQuantities };
      newQuantities[id] = (newQuantities[id] || 1) + delta;
      if (newQuantities[id] < 1) newQuantities[id] = 1;
      return newQuantities;
    });
  };

  const OnAddToCart = (item) => {
    if (item) {
      const itemsInCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartItems(itemsInCart);

      setCartItems(prevCartItems => {
        const updatedCartItems = [...prevCartItems, { ...item, quantity: quantities[item.id] || 1 }];
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
        return updatedCartItems;
      });

      toast.success("Added successfully!", toastOptions);
    }
  };

  const onSendWhatsapp = (product, q) => {
    if (!product || !q || q <= 0) {
      alert("Please provide valid product details and quantity.");
      return;
    }

    const message = `I'm interested in this product:
Product Name: ${encodeURIComponent(product.name)}
Product Price: ${encodeURIComponent(product.price)}DH
Quantity: ${encodeURIComponent(q)}
Total: ${(product.price * q).toFixed(2)}DH`;

    const whatsappUrl = `https://wa.me/212617314324?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

  return (
    <div className='max-w-[1640px] mx-auto px-6 py-12 text-xl'>
      <h1 className='text-4xl font-extrabold text-orange-600 text-center mb-8'>Top Related Menu Items</h1>

      <div className='lg:flex justify-between mb-8'>
        <div className='py-5'>
          <h1 className='text-gray-900 text-xl font-semibold'>Filter Type</h1>
          <div className='flex space-x-3'>
            {['all', 'burger', 'pizza', 'salad', 'chicken'].map((category) => (
              <button
                key={category}
                className='px-6 py-3 rounded-lg text-lg font-medium text-orange-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition duration-300'
                onClick={() => filterCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className='py-5'>
          <h1 className='text-gray-900 text-xl font-semibold'>Filter Price</h1>
          <div className='flex space-x-3'>
            <button className='px-6 py-3 rounded-lg text-lg font-medium text-orange-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition duration-300' onClick={() => filterPrice("lowest")}>Lowest</button>
            <button className='px-6 py-3 rounded-lg text-lg font-medium text-orange-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition duration-300' onClick={() => filterPrice("highest")}>Highest</button>
          </div>
        </div>
      </div>

      <div className='grid lg:grid-cols-4 gap-8 md:grid-cols-2'>
        {food.map((item) => (
          <div className='border shadow-lg rounded-xl overflow-hidden hover:scale-105 transform transition duration-300' key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-48 object-cover rounded-t-lg'
            />
            <div className='p-5'>
              <p className='text-gray-800 text-2xl font-semibold'>{item.name}</p>
              <div className='flex justify-between items-center'>
                <p className='text-3xl font-bold text-orange-600'>{item.price}DH</p>
                <div className='flex items-center space-x-4'>
                  <button
                    className='text-3xl font-bold text-orange-600'
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    +
                  </button>
                  <span className='text-2xl font-semibold text-orange-600'>
                    {quantities[item.id] || 1}
                  </span>
                  <button
                    className='text-3xl font-bold text-orange-600'
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    −
                  </button>
                </div>
              </div>
            </div>

            <div className='flex justify-between items-center p-5'>
              <button
                className='flex items-center space-x-2 px-5 py-3 rounded-full text-white bg-green-600 hover:bg-green-500 transition duration-300'
                onClick={() => onSendWhatsapp(item, quantities[item.id] || 1)}
              >
                <FaWhatsapp size={25} />
                <span>Buy On</span>
              </button>
              <button
                className='flex items-center space-x-2 px-5 py-3 rounded-full text-white bg-orange-500 hover:bg-orange-400 transition duration-300'
                onClick={() => OnAddToCart(item)}
              >
                <BsFillCartFill size={25} />
                <span className='font-semibold'>+ Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
}

export default Food;
