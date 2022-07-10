const CourseItem = () => {
    return (
        <div className='w-full p-2'>
            <a href="#" className="w-full md:h-36 h-28 overflow-hidden rounded-lg relative block">
                <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/courses/img-1.jpg" alt=""  className="w-full h-full absolute inset-0 object-cover"/>
                <span  className="absolute bg-black bg-opacity-60 bottom-1 font-semibold px-1.5 py-0.5 right-1 rounded text-white text-xs"> 12:21</span>
                <svg xmlns="http://www.w3.org/2000/svg" 
                    className="h-8 w-8 absolute inset-x-1/2 inset-y-1/2 translate-x-[-50%] translate-y-[-50%]" 
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
            </a>
            <div className="pt-3">
                <a href="#" className="text-sm font-semibold text-[#666] line-clamp-2">
                    Ultimate Web Designer And Developer Course to Expert
                </a>
                <div className="pt-2">
                    <a href="#" className="text-sm font-medium text-[#666]">Adrian Mohani</a>
                    <div className="flex space-x-2 items-center text-sm text-[#666]">
                        <div className='text-[13px]'>Advance level</div>
                        <div className="md:block hidden">·</div>
                        <div className='text-[12px]'>156.9K Enrolled</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseItem