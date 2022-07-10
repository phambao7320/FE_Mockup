import CreatePost from '@components/CreatePost'
import Cards from '@components/Carts'
import PostList from '@components/PostList/PostList'
import React, { useState } from 'react'
import AboutUser from './about-user'
import BannerProFile from './banner-profile'
import ProfileContent from './content-profile'
import NavProfile from './content-profile/nav-profile'
import FriendUser from './friend-user'
import GroupUser from './group-user'
import Photoes from '@components/Photos'

const ProFileUser = () => {

  const [listNav,setListNav] = useState({
    'Timeline' : true,
    'Friend' : false,
    'Photoes' : false,
    'Pages' : false,
    'Groups' : false,
    'Videos' : false
  })



  return (
    <div className='bg-[#f9fafb] pt-3'>
      <div className='max-w-1000 px-[10px] w-full mx-auto'>
          <div className='relative rounded-2xl bg-white border-solid border-[1px] border-[#ebe9e6]'>
              <BannerProFile />
              <ProfileContent/>
              <NavProfile values={listNav} />
          </div>
      </div>
      <div className='flex flex-col mt-5 a_md:flex-row justify-center mx-[10px] lg:ml-[10px] lg:mr-[20px]'>
        <div className='w-full a_md:w-7/12 flex-shrink-0'>
          <CreatePost />
          <PostList />
          <PostList />
          <PostList />
          <PostList />
          <PostList />
          <PostList />
          <button className='block mx-auto px-6 py-2 rounded-[30px] drop-shadow-lg bg-white font-semibold hover:text-blue-600'>Load more ..</button>
        </div>
        <div className='w-full ml-2'>
            <AboutUser/>
            <FriendUser />
            <GroupUser />
        </div>
        {/* <div className='md:p-5 sm:p-2 max-w-3xl mx-auto'> */}
          {/* <Cards label='Friends' listNav={['All Friends','Recently added','Family','University']}/> */}
          {/* <Cards label='Pages' listNav={['Following','Newest','My pages','Suggestions']}/> */}
          {/* <Photoes /> */}
        {/* </div> */}
      </div>
    </div>
  )
}

export default ProFileUser