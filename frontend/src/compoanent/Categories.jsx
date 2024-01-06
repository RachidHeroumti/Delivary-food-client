import React, { useState } from 'react'
import { categories } from "../data/data"


function Categories() {

  const [ctgs, setCategories] = useState(categories);

  return (
    <div className='max-w-[1640] px-4 py-12'>
      <h1 className='text-center text-orange-600 lg:text-4xl font-bold'>Top Menu items</h1>

      <div className='grid lg:grid-cols-4 gap-6 p-6 sm:grid-cols-2'>
        {ctgs.map((item, i) => {
          return (
            <div key={i} className=' bg-gray-300 flex justify-between rounded-lg p-4 items-center'>
              <p className='text-gray-900 font-bold px-3'>{item.name}</p>
              <img src={item.image} alt='/'
                className='rounded-lg bg-transparent' />
            </div>
          )
        })

        }


      </div>
    </div>
  )
}

export default Categories
