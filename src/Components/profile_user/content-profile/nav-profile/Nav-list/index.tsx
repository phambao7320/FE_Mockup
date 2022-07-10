import React from 'react'
import './style.scss'

const NavList = ({isCenter=false,items = []}:any) => {

  const classStyles = !isCenter ? 'flex items-center justify-center overflow-hidden' : 'flex items-center overflow-hidden'

  return (
    <div className={classStyles}>
        <ul className='lst-nav flex flex-row items-center md:justify-center overflow-x-auto m-0 ml-2'>
            { 
              items.map( (item:any,index:any) => 
                <li key={index}><a href="#">{item}</a></li>
              ) 
            }
        </ul>
    </div>
  )
}

export default NavList