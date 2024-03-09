import React from 'react'

function HeadLineCard() {
  return (
    <div className='max-w-[1540] mx-auto p-4 py-12 grid md:grid-cols-3  gap-6'>

      <div className=' relative rounded-lg'>
        {/**Cards */}
        <div className='w-full h-full absolute bg-black/50 rounded-xl text-white'>
          <h1 className=' font-bold text-3xl pt-5'>Sun's Out, BOGO's Out</h1>
          <p className=''>Through 8/26</p>
          <button className='  text-orange-600 bg-gray-50 absolute bottom-0 my-5 rounded-full p-2 px-3 font-bold mx-2'>Order Now</button>
        </div>
        <img src='https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'
          className='rounded-lg object-cover max-h-[200px] max-w-[500px] w-full h-full' />

      </div>

      <div className=' relative rounded-lg'>
        {/**Cards */}
        <div className='w-full h-full absolute bg-black/50 rounded-xl text-white'>
          <h1 className=' font-bold text-3xl pt-5'>New restaurants</h1>
          <p className=''>Through 8/26</p>
          <button className='  text-orange-600 bg-gray-50 absolute bottom-0 my-5 rounded-full p-2 px-3 font-bold mx-2'>Order Now</button>
        </div>
        <img src='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=300' alt='/'
          className='rounded-lg object-cover max-h-[200px] max-w-[500px] w-full h-full' />

      </div>

      <div className=' relative rounded-lg'>
        {/**Cards */}
        <div className='w-full h-full absolute bg-black/50 rounded-xl text-white'>
          <h1 className=' font-bold text-3xl pt-5'>Sun's Out, BOGO's Out</h1>
          <p className=''>Through 8/26</p>
          <button className='  text-orange-600 bg-gray-50 absolute bottom-0 my-5 rounded-full p-2 px-3 font-bold mx-2'>Order Now</button>
        </div>
        <img src='https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&w=300' alt='/'
          className='rounded-lg object-cover max-h-[200px] max-w-[500px] w-full h-full' />

      </div>

      <div className=' relative rounded-lg'>
        {/**Cards */}
        <div className='w-full h-full absolute bg-black/50 rounded-xl text-white'>
          <h1 className=' font-bold text-3xl pt-5'>Sun's Out, BOGO's Out</h1>
          <p className=''>Through 8/26</p>
          <button className='  text-orange-600 bg-gray-50 absolute bottom-0 my-5 rounded-full p-2 px-3 font-bold mx-2'>Order Now</button>
        </div>
        <img src='https://images.pexels.com/photos/3758133/pexels-photo-3758133.jpeg?auto=compress&cs=tinysrgb&w=300' alt='/'
          className='rounded-lg object-cover max-h-[200px] max-w-[500px] w-full h-full' />

      </div>

    </div>
  )
}

export default HeadLineCard
