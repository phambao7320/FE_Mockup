import React from 'react'

const GameItem = () => {
  return (
    <div>
        <div className='w-full p-2 border-1 rounded-lg border-solid drop-shadow-sm '>
            <a href="#" className="w-full h-44 overflow-hidden rounded-t-lg relative block">
                <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/games/img-1.jpg" alt=""  className="w-full h-full absolute inset-0 object-cover"/>
            </a>
            <div className="p-3 bg-white rounded-lg">
                <p className="block text-base font-semibold text-[#666] line-clamp-1 mb-1">
                    Larion TV
                </p>
                <p className="text-sm text-[#666] mb-2">365K Viewers</p>
                <a href="#" className='block rounded-md pt-2 py-1.5 font-medium text-center bg-[#e5e7eb] text-[#666]' >Play now</a>
            </div>
        </div>
    </div>
  )
}

export default GameItem