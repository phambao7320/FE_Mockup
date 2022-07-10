import React from 'react'
import NavButton from './Nav-button'
import NavList from './Nav-list'

const NavProfile = ({values}:any) => {
  return (
    <div>
        <hr className='w-0 lg:w-full mt-[20px]'/>
        <div className='flex flex-col-reverse lg:flex-row justify-between'>
          <NavList items={['Timeline','Friends','Photoes','Pages','Groups','Videos']} />
          <NavButton />
        </div>
    </div>
  )
}

export default NavProfile