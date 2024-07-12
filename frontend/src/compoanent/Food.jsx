import React, { useState } from 'react'
 import {data} from "../data/data"

function Food() {
const[food,setFood]=useState(data) ;

const filterCategory=(category)=>{

  if(category=="all"){
    setFood(data);
  }else{
    setFood(
      data.filter((item)=>{
        return item.category==category;
      })
    )
  }


}

const filterPrice=(price)=>{

  if(price==""){
    setFood(data);
  }else{
    setFood(
      data.filter((item)=>{
        return item.price==price;
      })
    )
  }



}

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-4xl font-bold text-orange-600 flex justify-center'>Top Related Menu Items</h1>

    <div className='lg:flex  justify-between'> 

        <div className='py-5'>
          <h1 className=' text-gray-900 text-xl font-bold'>Filter Type</h1>
      <div className=''>
 <button className='rounded-lg px-5 text-orange-500 border border-orange-500
    hover:bg-orange-500 hover:text-white mx-1'
    onClick={()=>{filterCategory('all')}}
    >All</button>
  <button className='rounded-lg px-5 text-orange-500 border border-orange-500
   hover:bg-orange-500 hover:text-white mx-1'
   onClick={()=>{filterCategory('burger')}}
   >Burger</button>
 <button className='rounded-lg px-5 text-orange-500 border border-orange-500
  hover:bg-orange-500 hover:text-white mx-1'
  onClick={()=>{filterCategory('pizza')}}
   >Pizza</button>
  <button className='rounded-lg px-5 text-orange-500 border
   border-orange-500 hover:bg-orange-500 hover:text-white mx-1'
   onClick={()=>{filterCategory('salad')}}
   >Salad</button>
 <button className='rounded-lg px-5 text-orange-500 border border-orange-500
  hover:bg-orange-500 hover:text-white mx-1'
  onClick={()=>{filterCategory('chicken')}}
  >Chicken</button>
          </div>
        </div>

        <div className='py-5'>
          <h1 className=' text-gray-900 text-xl font-bold'>Filter Price</h1>
      <div className=''>
 <button className='rounded-lg px-5  text-orange-500 border border-orange-500
  hover:bg-orange-500 hover:text-white mx-1'
  onClick={()=>{filterPrice("$")}}
  >$</button>
  <button className='rounded-lg px-5  text-orange-500 border
   border-orange-500 hover:bg-orange-500 hover:text-white mx-1'
   onClick={()=>{filterPrice("$$")}}
   >$$</button>
 <button className='rounded-lg px-5 text-orange-500 border
  border-orange-500 hover:bg-orange-500 hover:text-white mx-1'
  onClick={()=>{filterPrice("$$$")}}
  >$$$</button>
  <button className='rounded-lg px-5 text-orange-500 border
   border-orange-500 hover:bg-orange-500 hover:text-white mx-1'
   onClick={()=>{filterPrice("$$$$")}}
   >$$$$</button>
          </div>
        </div>
 </div>
    
     <div className='grid lg:grid-cols-4 gap-6 py-6 md:grid-cols-2'>
      { food.map((item,i)=>{
        return(
 <div className='border shadow-lg hover:scale-105 duration-300 rounded-lg' key={i}>
        <img src={item.image} alt='/' 
          className='w-full  h-[200px] object-cover rounded-t-lg '/>
         
          <div className='p-3 flex justify-between'>
        <p className=' text-gray-900  font-bold  '>{item.name}</p>
        <p className=' bg-orange-600 rounded-sm text-white p-1'>{item.price}</p>
          </div>
        
       </div>)
      })

      }
      
     </div>
   
      </div>   
  )
}

export default Food
