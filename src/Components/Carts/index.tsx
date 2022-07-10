import CardList from '@components/CartList'
import NavList from '@components/profile_user/content-profile/nav-profile/Nav-list'
import React from 'react'

const Cards = ({label,listNav}:any) => {
  return (
    <div className='w-full lg:mx-[10px] rounded-lg bg-white shadow-lg border-[1px] border-[#ccc] border-solid p-5 
    mb-5'>
        <h4 className='text-lg font-semibold'>{label}</h4>
        {/* <NavList items={listNav} /> */}
        <div className=''>
          <ul className='p-0 block overflow-x-auto m-0'>
              { listNav.map( (item:any) => <li className='pr-[10px] inline-block h-full'><a href="#" className='leading-7 text-[#8c8d90] block font-semibold text-sm hover:text-blue-600 focus:text-blue-600 focus:border-b-[3px] focus:border-solid border-blue-600'>{item}</a></li>) }
          </ul>
        </div>
        <CardList/>
    </div>
  )
}

export default Cards