import React from 'react'

const GameItemFlex = () => {
  return (
    <div className='w-full p-2 flex flex-col md:flex-row'>
      <a href="#" className="w-full md:w-64 h-40 overflow-hidden rounded-lg relative block">
          <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/games/img-lg-1.jpg" alt="imgGame"  className="w-full h-full absolute inset-0 object-cover"/>
          <span  className="absolute bg-black bg-opacity-60 bottom-1 font-semibold px-1.5 py-0.5 right-1 rounded text-white text-xs"> 12:21</span>
          <svg xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8 absolute inset-x-1/2 inset-y-1/2 translate-x-[-50%] translate-y-[-50%]" 
              viewBox="0 0 20 20" fill="#333333">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" fill='white' clipRule="evenodd" />
          </svg>
      </a>
      <div className="flex-1 md:ml-5 mt-3 lg:mt-0">
          <a href="#" className="md:text-lg text-sm lg:w-full md:w-[90%] sm:w-full font-semibold text-[#666] line-clamp-1">
              Strike Forece Heroes 2
          </a>
          <p className="my-2 line-clamp-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna .</p>
          <a href="#" className="block text-sm font-medium text-[#666] mb-3">Johnson Smath</a>
          <div className="flex space-x-2 items-center text-sm text-[#666]">
              <div className='text-[13px]'>27 weeks ago</div>
              <div className="md:block hidden">·</div>
              <div className='text-[12px]'>156.9K views</div>
          </div>
      </div>
    </div>
  )
}

export default GameItemFlex