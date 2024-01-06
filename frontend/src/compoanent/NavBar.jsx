import React, { useState } from 'react'
import {AiOutlineMenu ,AiOutlineSearch ,AiOutlineClose,AiFillTag} from 'react-icons/ai'
import {BsFillCartFill } from "react-icons/bs"
import {TbTruckDelivery} from "react-icons/tb"
import{MdFavorite ,MdHelp} from "react-icons/md"
import {FaWallet ,FaUserFriends } from "react-icons/fa"
import { BsFillSaveFill} from "react-icons/bs"

function NavBar() {
  const[nav,setNav]=useState(false) ;

  return (
    <div>
      <div className='flex items-center justify-between py-2'>
        <div className='flex items-center'>
            <AiOutlineMenu size={30} className=''  onClick={()=>{setNav(true)}}/>
          <h1 className=' lg:text-2xl mx-2 font-bold'>Onlay Food</h1>
          <div className=' bg-gray-100 rounded-lg flex items-center px-4 py-1 hidden lg:flex '>
             <p className=' rounded-s-full bg-black text-white px-2'>Delivery</p>
             <p className='px-1'>Pickup</p>
          </div>
         
        </div>
        <div className='rounded-lg bg-gray-100 flex items-center'>
          <AiOutlineSearch size={25} className='mx-1'/> 
          <input type='text' placeholder='search for food'
                 className='bg-transparent focus:outline-none p-2'/>
        </div>
        <BsFillCartFill size={25} className='mx-4'/>
      </div>
      { nav ?    <div  className='fixed h-screen w-full z-10 bg-black/80 top-O left-0'>
      </div>:""

      }
  
{
  nav ?
    <div className='h-screen w-[250px] bg-white fixed top-0 left-0 z-10 duration-300'>
        <div className='flex justify-between '>
         <h1 className='text-2xl p-4'>Onlay
       <span className=' font-bold'>Food</span>
         </h1>
           <AiOutlineClose size={25} className='my-4 mx-1' onClick={()=>{setNav(false)}}/>
         </div>
        <ul className=' flex flex-col p-1 text-gray-800'>
            <li className=' text-xl py-4 flex hover:bg-gray-100 rounded-lg'><TbTruckDelivery size={30} className='mx-1'/> Delivery</li>
       <li className=' text-xl py-4 flex hover:bg-gray-100 rounded-lg'><MdFavorite size={30} className='mx-1'/> Favorites</li>
       <li className=' text-xl py-4 flex hover:bg-gray-100 rounded-lg'><FaWallet size={30} className='mx-1'/> Walet</li>
       <li className=' text-xl py-4 flex hover:bg-gray-100 rounded-lg'><MdHelp size={30} className='mx-1'/> Help</li>
       <li className=' text-xl py-4 flex hover:bg-gray-100 rounded-lg'><AiFillTag size={30} className='mx-1'/> Promotions</li>
       <li className=' text-xl py-4 flex hover:bg-gray-100 rounded-lg'><BsFillSaveFill size={30} className='mx-1'/> Best One</li>
       <li className=' text-xl py-4 flex hover:bg-gray-100 rounded-lg'><FaUserFriends size={30} className='mx-1'/> Invite Friends</li>
    
        </ul>
      </div>
   :""
}
    
    </div>
  )
}

export default NavBar
