import React from 'react'

function Home() {
  return (
    <div className='max-x-[1640px] mx-auto p-4'>
       <div className='max-h-[500px] relative'>
        <div className='h-full w-full absolute justify-center flex flex-col max-h-[500px] bg-black/50 px-4'>
          <h1 className='text-4xl font-bold text-white lg:text-7xl sm:text-5xl'> The <span className=' text-orange-600'> Best</span></h1>
          <h1 className=' text-orange-600 text-4xl font-bold lg:text-7xl sm:text-5xl'> Food <span className='text-white'> Delivary</span></h1>
        </div>
        <img   className='w-full max-h-[500px] object-cover'
            src='https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
      
       </div>
    </div>
  )
}

export default Home
