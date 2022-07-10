import React from 'react'
import AvatarProfile from './avatar-profile'
import InfoProfile from './info-profile'

const ProfileContent = () => {
  return (
    <div className='relative flex flex-col justify-center items-center mt-[-100px]'>
        <AvatarProfile/>
        <InfoProfile />  
    </div>
  )
}

export default ProfileContent