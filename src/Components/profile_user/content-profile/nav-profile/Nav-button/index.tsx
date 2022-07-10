import React from 'react'
import './style.scss'
const NavButton = () => {
  return (
    <div className='nav-button flex items-center justify-center mb-2 lg:pr-4 relative gap-2'>
        <a className='flex items-center justify-center h-10 px-5 rounded-md bg-blue-600 text-white space-x-1.5 hover:text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className='block w-[110px]'>Add Your Story</span>
        </a>
        <a className='flex items-center justify-center h-10 w-10 rounded-md bg-gray-100'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </a>
        <a className='flex items-center justify-center h-10 w-10 rounded-md bg-gray-100'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
        </a>
    </div>
  )
}

export default NavButton