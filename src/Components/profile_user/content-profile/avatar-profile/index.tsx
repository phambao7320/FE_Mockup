import React from 'react'

const AvatarProfile = () => {
  return (
    <div className='relative w-[120px] h-[120px] z-1'>
        <div className='overflow-hidden w-full h-full p-1 border-4 border-solid border-white relative rounded-full drop-shadow-lg'>
            <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-8.jpg" alt="Avatar" 
            className='h-full w-full absolute top-0 left-0 object-cover align-middle'/>
        </div>
    </div>
  )
}

export default AvatarProfile