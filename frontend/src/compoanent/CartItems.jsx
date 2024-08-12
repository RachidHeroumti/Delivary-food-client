import React, { useState ,useEffect } from 'react'

function CartItems() {
    const [cartList, setCartList] = useState([]);

    useEffect(() => {
        const t = state.count * data[0].price;
        setTotal(t);
      }, [state.count])
    
      
      const increment = () => {
        dispatch({ type: 'increment' });
      };
    
    
      const decrement = () => {
        dispatch({ type: 'decrement' });
      };


    useEffect(() => {
       
        const cartLs = JSON.parse(localStorage.getItem('cart')) || [];
        if (cartLs.length > 0) {
            setCartList(cartLs);
        }
    }, []);

    const removeFromCart = (id) => {
        const updatedCartList = cartList.filter(item => item.id !== id);
        setCartList(updatedCartList);
        localStorage.setItem('cart', JSON.stringify(updatedCartList));
    };



  return (
    <div >
        <div className=' grid grid-cols-1 gap-5 p-5'>
            {
               cartList&& cartList.map((item,i)=>{
                    return(
                        <div className=' flex  flex-col sm:flex-row  items-center  sm:p-5 bg-gray-50'>
                        <img src={item.image} className='w-[100px] h-[120px]' alt='' />
                        <div className=' sm:px-5 p-1 '>
                          <h1 className=' sm:text-3xl text-2xl font-bold '>{item.name}</h1>
                          <h1 className=' text-orange-700 text-xl font-bold'>{item.price} $$</h1>


                          <div className=' space-x-1 '>
                            <span className='border text-xl font-bold px-2 cursor-pointer bg-gray-100'
                              onClick={() => decrement()}>-</span>
                            <span className='border  text-xl font-bold px-2 bg-gray-100'>1</span>
                            <span className='border  text-xl font-bold px-2 cursor-pointer bg-gray-100'
                              onClick={() => increment()}>+</span>
                          </div>
                       
                        </div>
                      </div>
                    )
                })
                
            }
        </div>
        <div className=' text-xl space-x-2 p-2 text-gray-900 '>
              <span className=''>Total :</span> <span>{total}$</span>
        </div>
    </div>
  )
}

export default CartItems
