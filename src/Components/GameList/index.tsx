import HeaderMainContent from '@components/header-main-content'
import GroupUser from '@components/profile_user/group-user'
import React from 'react'
import GameItem from './GameItem'
import GameItemFlex from './GameItemFlex'

const GameList = () => {
  return (
    <div className='lg:flex bg-[#f9fafb]'>
        <div className='w-full lg:w-2/3'>
            <div className='flex flex-col py-[20px] px-[5px] justify-center' >
                <HeaderMainContent label='Games' items={['Suggestion','Newest','My games']} />
                <div className='mt-2 overflow-hidden w-full'>
                <ul className='flex overflow-x-auto w-full'>
                    <li className='block basis-1/2 md:basis-1/3 lg:basis-1/3 flex-shrink-0'><GameItem/></li>
                    <li className='block basis-1/2 md:basis-1/3 lg:basis-1/3 flex-shrink-0'><GameItem/></li>
                    <li className='block basis-1/2 md:basis-1/3 lg:basis-1/3 flex-shrink-0'><GameItem/></li>
                    <li className='block basis-1/2 md:basis-1/3 lg:basis-1/3 flex-shrink-0'><GameItem/></li>
                    <li className='block basis-1/2 md:basis-1/3 lg:basis-1/3 flex-shrink-0'><GameItem/></li>
                    <li className='block basis-1/2 md:basis-1/3 lg:basis-1/3 flex-shrink-0'><GameItem/></li>
                    <li className='block basis-1/2 md:basis-1/3 lg:basis-1/3 flex-shrink-0'><GameItem/></li>
                    <li className='block basis-1/2 md:basis-1/3 lg:basis-1/3 flex-shrink-0'><GameItem/></li>
                </ul>
            </div>
            <div className='mt-4 mx-2'>
                <div className='flex items-center justify-between'>
                    <h4 className='texs-semibold text-2xl  my-0'>Top Clips</h4>
                    <a href="#" className='text-base hover:text-blue-600 hover:font-medium '>See all</a>
                </div>
                <div className='bg-white rounded-lg mt-4 shadow-md'>
                    <ul className='flex flex-col overflow-x-auto w-full p-3'>
                        <li className='block course_item_flex flex-shrink-0'><GameItemFlex /></li>
                        <li className='block course_item_flex flex-shrink-0'><GameItemFlex/></li>
                        <li className='block course_item_flex flex-shrink-0'><GameItemFlex/></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
        <div className='lg:w-1/3 relative'>
            <div className='lg:fixed lg:top-[85px] p-3 lg:p-0'>
                <GroupUser />
            </div>
        </div>
    </div>
  )
}

export default GameList