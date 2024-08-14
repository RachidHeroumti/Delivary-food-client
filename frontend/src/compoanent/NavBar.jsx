import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai'
import { BsFillCartFill } from "react-icons/bs"
import { TbTruckDelivery } from "react-icons/tb"
import { MdFavorite, MdHelp } from "react-icons/md"
import { FaWallet, FaUserFriends } from "react-icons/fa"
import { BsFillSaveFill } from "react-icons/bs"
import { IoSearchSharp } from "react-icons/io5";

function NavBar() {
  const [nav, setNav] = useState(false);
 const [searchTxt,setSearchTxt]=useState("");
  const onSearch=(txt)=>{
    setFood(
      data.filter((item)=>{
        return item.startsWith(txt) ;
      })
    )
  }

  return (
    <div>
      <div className='flex items-center justify-between w-full z-50 fixed top-0 
         h-[60px] text-gray-50 bg-orange-700 p-1 sm:p-5 '>
        <div className='flex items-center'>
          <AiOutlineMenu size={30} className='' onClick={() => { setNav(true) }} />
          <h1 className=' lg:text-2xl mx-2 font-bold hidden sm:flex '>Onlay Food</h1>
          {/* <div className='  rounded-lg flex items-center px-4 py-1  lg:flex  hidden'>
            <p className=' rounded-s-full bg-white text-orange-700 px-2'>Delivery</p>
            <p className='px-1'>Pickup</p>
          </div> */}

        </div>
        <div className='rounded-lg bg-gray-100 flex items-center'>
          <IoSearchSharp size={25} className='mx-1 text-gray-500' />
          <input type='text' placeholder='search for food' 
            className='bg-transparent focus:outline-none p-1 text-xl px-2 text-gray-800' />
        </div>
        <a href='/cart'>
        <BsFillCartFill size={25} className='mx-4' />
        </a>
        
      </div>
      {nav ? <div className='fixed h-screen w-full z-10 bg-black/80 top-O left-0'>
      </div> : ""

      }
      {
        nav ?
          <div className='h-screen w-[250px] bg-white fixed top-0 left-0 z-50 duration-300'>
            <div className='flex justify-between items-center bg-orange-600 h-[60px] px-3'>
              <h1 className='text-2xl  text-white'>Onlay
                <span className=' font-bold'>Food</span>
              </h1>
              <AiOutlineClose size={25} className='my-4 mx-1 text-orange-50' onClick={() => { setNav(false) }} />
            </div>
            <ul className=' flex flex-col p-1 text-gray-800'>
              <li className=' text-xl py-4 flex hover:bg-gray-100 rounded-lg'><TbTruckDelivery size={30} className='me-2 text-orange-600' /> Delivery</li>
              <li className=' text-xl py-4 flex hover:bg-gray-100 rounded-lg'><MdFavorite size={30} className='me-2 text-orange-600' /> Favorites</li>
              <li className=' text-xl py-4 flex hover:bg-gray-100 rounded-lg'><FaWallet size={30} className='me-2 text-orange-600' /> Walet</li>
              <li className=' text-xl py-4 flex hover:bg-gray-100 rounded-lg'><MdHelp size={30} className='me-2 text-orange-600' /> Help</li>
              <li className=' text-xl py-4 flex hover:bg-gray-100 rounded-lg'><AiFillTag size={30} className='me-2 text-orange-600' /> Promotions</li>
              <li className=' text-xl py-4 flex hover:bg-gray-100 rounded-lg'><BsFillSaveFill size={30} className='me-2 text-orange-600' /> Best One</li>
              <li className=' text-xl py-4 flex hover:bg-gray-100 rounded-lg'><FaUserFriends size={30} className='me-2 text-orange-600' /> Invite Friends</li>

            </ul>
          </div>
          : ""
      }

    </div>
  )
}

export default NavBar
