import React from 'react'

const FriendUser = () => {
  return (
    <div className='w-full lg:mx-[10px] rounded-lg bg-white shadow-lg border-[1px] border-[#ccc] border-solid p-5 mb-5'>
        <div className='flex items-center justify-between'>
            <div>
                <h4 className='text-lg font-semibold'>Friend</h4>
                <span className='text-sm'>3,410 friends</span>
            </div>
            <a href="#" className='block'>See all</a>
        </div>
        <div className='grid grid-cols-3 mt-4 gap-3'>
            <a href="#">
                <div className='w-full h-24 relative'>
                    <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-lg-2.jpg" className='rounded-lg w-full h-full object-cover absolute block align-middle' alt="" />
                </div>
                <div className='text-center text-sm text-semibold truncate text-[#333] mt-1 hover:text-blue-600'>
                    Dennis Han
                </div>
            </a>
            <a href="#">
                <div className='w-full h-24 relative'>
                    <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-lg-2.jpg" className='rounded-lg w-full h-full object-cover absolute block align-middle' alt="" />
                </div>
                <div className='text-center text-sm text-semibold truncate text-[#333] mt-1 hover:text-blue-600'>
                    Dennis Han
                </div>
            </a>
            <a href="#">
                <div className='w-full h-24 relative'>
                    <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-lg-2.jpg" className='rounded-lg w-full h-full object-cover absolute block align-middle' alt="" />
                </div>
                <div className='text-center text-sm text-semibold truncate text-[#333] mt-1 hover:text-blue-600'>
                    Dennis Han
                </div>
            </a>
            <a href="#">
                <div className='w-full h-24 relative'>
                    <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-lg-2.jpg" className='rounded-lg w-full h-full object-cover absolute block align-middle' alt="" />
                </div>
                <div className='text-center text-sm text-semibold truncate text-[#333] mt-1 hover:text-blue-600'>
                    Dennis Han
                </div>
            </a>
            <a href="#">
                <div className='w-full h-24 relative'>
                    <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-lg-2.jpg" className='rounded-lg w-full h-full object-cover absolute block align-middle' alt="" />
                </div>
                <div className='text-center text-sm text-semibold truncate text-[#333] mt-1 hover:text-blue-600'>
                    Dennis Han
                </div>
            </a>
            <a href="#">
                <div className='w-full h-24 relative'>
                    <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-lg-2.jpg" className='rounded-lg w-full h-full object-cover absolute block align-middle' alt="" />
                </div>
                <div className='text-center text-sm text-semibold truncate text-[#333] mt-1 hover:text-blue-600'>
                    Dennis Han
                </div>
            </a>
        </div>
        <a href='#' className='block text-center py-3 mt-[20px] text-[#666] bg-[#f0f2f5] rounded-lg font-semibold'>
            See all
        </a>
    </div>
  )
}

export default FriendUser