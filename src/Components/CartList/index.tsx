import React from 'react'
import CartItem from './CartItem'

const CardList = () => {
  return (
    <div className='flex flex-col'>
        <div className='grid a_md:grid-cols-4 grid-cols-2 mt-4 gap-3 rounded-lg'>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </div>
        <button className='block mx-auto px-6 py-2 rounded-[30px] drop-shadow-lg bg-white font-semibold hover:text-blue-600 mt-7 mb-3'>Load more ..</button>
    </div>

  )
}

export default CardList