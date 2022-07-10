import React from 'react'

const JobItem = () => {
  return (
    <div className='p-5 flex flex-row-reverse md:flex-row'>
        <div>
            <a href="#" className='block w-14 h-14 relative'>
                <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/brand/brand-avatar-1.png" alt="logo Company Job" className='w-full h-full object-cover absolute inset-0 rounded-md'
                />
            </a>
        </div>
        <div className='mx-[-10px] md:mx-4'>
            <h4 className='text-base text-gray-500 font-medium mb-2'>Phaseout</h4>
            <a href="#" className='block text-xl text-gray-700 font-medium mb-4'>Technical Event Support Specialist</a>
            <p className='line-clamp-3 text-sm text-gray-500 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, earum! Illo nulla, corporis vero nesciunt commodi a quidem dolor praesentium eveniet aliquam eos maxime minus adipisci sequi maiores unde omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quod assumenda recusandae cupiditate itaque, quis doloribus mollitia illo velit eaque. Temporibus vitae cum aperiam exercitationem minus, totam atque aliquid. Veritatis.</p>
            <div className='flex justify-start gap-1 mb-5'> 
                <a href="#" className='border px-3 py-1.5 rounded-md text-sm inline-block text-gray-500'>Wordpress</a>
                <a href="#" className='border px-3 py-1.5 rounded-md text-sm inline-block text-gray-500'>Design</a>
                <a href="#" className='border px-3 py-1.5 rounded-md text-sm inline-block text-gray-500'>Joomla</a>
            </div>
        </div>
    </div>
  )
}

export default JobItem