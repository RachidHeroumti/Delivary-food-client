import React, { useState  } from 'react';
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
      setFood(
        data.filter((item) => item.category === category)
      );
    }
  };

  const filterPrice = (type) => {
    if (type === "") {
      setFood(data);
    } else {
      setFood(
        data.filter((item) => item.price === price)
      );
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
        
      toast.success("Added succcessfuly !",toastOptions);
    
    }
  };

  const onSendWhatsapp = (product, q) => {
    console.log(product, q);
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
    <div className='max-w-[1640px] m-auto px-4 py-12 text-xl'>
      <h1 className='text-4xl font-bold text-orange-600 flex justify-center'>Top Related Menu Items</h1>

      <div className='lg:flex justify-between'>
        <div className='py-5'>
          <h1 className='text-gray-900 text-xl font-bold'>Filter Type</h1>
          <div className=''>
            <button className='rounded-lg px-5 text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white mx-1' onClick={() => { filterCategory('all') }}>All</button>
            <button className='rounded-lg px-5 text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white mx-1' onClick={() => { filterCategory('burger') }}>Burger</button>
            <button className='rounded-lg px-5 text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white mx-1' onClick={() => { filterCategory('pizza') }}>Pizza</button>
            <button className='rounded-lg px-5 text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white mx-1' onClick={() => { filterCategory('salad') }}>Salad</button>
            <button className='rounded-lg px-5 text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white mx-1' onClick={() => { filterCategory('chicken') }}>Chicken</button>
          </div>
        </div>

        <div className='py-5'>
          <h1 className='text-gray-900 text-xl font-bold'>Filter Price</h1>
          <div className=''>
            <button className='rounded-lg px-5 text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white mx-1' onClick={() => { filterPrice("lowest") }}>Lowest</button>
            <button className='rounded-lg px-5 text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white mx-1' onClick={() => { filterPrice("highest") }}>Highest</button>
          </div>
        </div>
      </div>

      <div className='grid lg:grid-cols-4 gap-6 py-6 md:grid-cols-2'>
        {food.map((item, i) => (
          <div className='border shadow-lg hover:scale-105 duration-300 rounded-lg' key={i}>
            <img src={item.image} alt='/' className='w-full h-[200px] object-cover rounded-t-lg' />
            <div className='p-3'>
              <p className='text-gray-900 font-bold'>{item.name}</p>
              <div className='flex justify-between'>
                <p className='text-2xl font-bold rounded-sm text-orange-600 p-1'>{item.price}DH</p>
                <div className='flex space-x-3 font-bold items-center'>
                  <button className='rounded-full text-orange-600' onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                  <span className='rounded-full text-orange-600'>{quantities[item.id]  || 1}</span>
                  <button className='rounded-full text-orange-600' onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                </div>
              </div>
            </div>
            <div className='flex p-5 space-x-5 text-white text-xl'>
              <button
               className='rounded-full hover:bg-gray-100 text-orange-500 border
                border-orange-600 px-2 p-1 flex justify-center items-center space-x-2'
                onClick={()=>{onSendWhatsapp(item ,quantities[item.id]||1 )}}>
                <span>Buy On</span>  <FaWhatsapp size={25} className='text-green-600' />
              </button>
              <button className='bg-gry-50 rounded-full hover:bg-orange-600 space-x-2 border
               bg-orange-500 px-2 p-1 flex justify-center items-center' onClick={() => { OnAddToCart(item) }}>
                <span className='font-semibold'>+ Cart</span>    <BsFillCartFill size={25} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Food;

