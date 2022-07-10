import React from 'react'

const CartItem = () => {
    return (
        <div className='bg-white rounded-lg overflow-hidden p-2 shadow-lg border-[1px] border-[#c8c8c8] border-solid'>
            <a href="#">
                <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-2.jpg" alt="#" 
                className='h-36 object-cover rounded-md shadow-sm w-full'/>
            </a>
            <div className='mt-1'>
                <a href="#" className='text-base font-semibold mb-0.5 text-[#666]'>James Lewis</a>
                <p className='font-medium text-sm text-[#666]'>843K Following</p>
                <button className='bg-blue-100 w-full flex font-semibold h-8 items-center justify-center mt-3 px-3 rounded-md text-blue-600 text-sm mb-1 hover:opacity-75'>Following</button>
            </div>
        </div>  
    )
}

export default CartItem