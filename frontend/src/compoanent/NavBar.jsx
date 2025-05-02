import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import { BsFillSaveFill } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { data } from "../data/data"; // Assuming data is imported

function NavBar() {
  const [nav, setNav] = useState(false);
  const [searchTxt, setSearchTxt] = useState("");
  const [food, setFood] = useState(data); // Assuming food data comes from `data`

  const onSearch = (txt) => {
    setFood(
      data.filter((item) => item.name.toLowerCase().includes(txt.toLowerCase())) // Filtering based on name
    );
  };

  const handleSearchChange = (e) => {
    const txt = e.target.value;
    setSearchTxt(txt); // Update the search text state
    onSearch(txt); // Trigger search filtering
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between w-full z-50 fixed top-0 h-[70px] text-white bg-gradient-to-r from-orange-600 to-orange-800 p-3 shadow-lg">
        <div className="flex items-center">
          <AiOutlineMenu size={30} className="text-white cursor-pointer" onClick={() => { setNav(true) }} />
          <a href='/' className='px-2 '>
          <h1 className="lg:text-2xl mx-2 font-bold hidden sm:flex text-white">Onlay Food</h1>
            </a>
       
        </div>
        
        <div className="flex items-center rounded-lg bg-white p-2 shadow-md w-[300px] sm:w-[400px]">
          <IoSearchSharp size={25} className="text-gray-500" />
          <input
            type="text"
            value={searchTxt}
            onChange={handleSearchChange} // Update state on input change
            placeholder="Search for food"
            className="bg-transparent focus:outline-none p-1 w-full text-lg text-gray-800"
          />
        </div>

        <a href="/cart" className="relative">
          <BsFillCartFill size={30} className="text-white mx-4 cursor-pointer" />
          {/* Optional Badge for Cart */}
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs px-2 py-1 rounded-full">3</span>
        </a>
      </div>

      {/* Overlay when navigation menu is active */}
      {nav && <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setNav(false)}></div>}

      {/* Side Menu */}
      {nav && (
        <div className="h-screen w-[250px] bg-white fixed top-0 left-0 z-50 duration-300 shadow-lg">
          <div className="flex justify-between items-center bg-orange-600 h-[70px] px-3">
            <h1 className="text-2xl text-white">
              Onlay <span className="font-bold">Food</span>
            </h1>
            <AiOutlineClose size={25} className="text-white cursor-pointer" onClick={() => setNav(false)} />
          </div>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex items-center hover:bg-gray-200 rounded-lg transition-all">
              <TbTruckDelivery size={30} className="text-orange-600 mr-3" />
              Delivery
            </li>
            <li className="text-xl py-4 flex items-center hover:bg-gray-200 rounded-lg transition-all">
              <MdFavorite size={30} className="text-orange-600 mr-3" />
              Favorites
            </li>
            <li className="text-xl py-4 flex items-center hover:bg-gray-200 rounded-lg transition-all">
              <FaWallet size={30} className="text-orange-600 mr-3" />
              Wallet
            </li>
            <li className="text-xl py-4 flex items-center hover:bg-gray-200 rounded-lg transition-all">
              <MdHelp size={30} className="text-orange-600 mr-3" />
              Help
            </li>
            <li className="text-xl py-4 flex items-center hover:bg-gray-200 rounded-lg transition-all">
              <AiFillTag size={30} className="text-orange-600 mr-3" />
              Promotions
            </li>
            <li className="text-xl py-4 flex items-center hover:bg-gray-200 rounded-lg transition-all">
              <BsFillSaveFill size={30} className="text-orange-600 mr-3" />
              Best One
            </li>
            <li className="text-xl py-4 flex items-center hover:bg-gray-200 rounded-lg transition-all">
              <FaUserFriends size={30} className="text-orange-600 mr-3" />
              Invite Friends
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
