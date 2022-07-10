import CardList from '@components/CartList'
import NavList from '@components/profile_user/content-profile/nav-profile/Nav-list'
import React from 'react'

const Photoes = () => {
  return (
    <div className='w-full lg:mx-[10px] rounded-lg bg-white shadow-lg border-[1px] border-[#ccc] border-solid p-5 mb-5'>
        <h4 className='text-lg font-semibold'>Photos</h4>
        <NavList items={['Photos of you','Recently added','Family','University','Albums']} />
        <div className='grid grid-cols-4 mt-5 gap-3'>
            <div className="max-w-full lg:h-44 h-36 rounded-lg relative overflow-hidden shadow">
                <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/post/img-1.jpg" className="w-full h-full absolute object-cover inset-0"/>
            </div>
            <div className="max-w-full lg:h-44 h-36 rounded-lg relative overflow-hidden shadow">
                <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/post/img-1.jpg" className="w-full h-full absolute object-cover inset-0"/>
            </div>
            <div className="max-w-full lg:h-44 h-36 rounded-lg relative overflow-hidden shadow">
                <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/post/img-1.jpg" className="w-full h-full absolute object-cover inset-0"/>
            </div>
            <div className="max-w-full lg:h-44 h-36 rounded-lg relative overflow-hidden shadow">
                <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/post/img-1.jpg" className="w-full h-full absolute object-cover inset-0"/>
            </div>
            <div className="max-w-full lg:h-44 h-36 rounded-lg relative overflow-hidden shadow">
                <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/post/img-1.jpg" className="w-full h-full absolute object-cover inset-0"/>
            </div>
            <div className="max-w-full lg:h-44 h-36 rounded-lg relative overflow-hidden shadow">
                <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/post/img-1.jpg" className="w-full h-full absolute object-cover inset-0"/>
            </div>
            <div className="max-w-full lg:h-44 h-36 rounded-lg relative overflow-hidden shadow">
                <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/post/img-1.jpg" className="w-full h-full absolute object-cover inset-0"/>
            </div>
            <div className="max-w-full lg:h-44 h-36 rounded-lg relative overflow-hidden shadow">
                <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/post/img-1.jpg" className="w-full h-full absolute object-cover inset-0"/>
            </div>
        </div>

        <button className='block mx-auto px-6 py-2 rounded-[30px] drop-shadow-lg bg-white font-semibold hover:text-blue-600 mt-7 mt-3'>Load more ..</button>

    </div>
  )
}

export default Photoes