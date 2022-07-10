const CourseItemFlex = () => {
    return (
        <div className='w-full p-2 flex'>
            <a href="#" className="md:w-64 md:h-40 w-36 h-24 overflow-hidden rounded-lg relative block">
                <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/courses/img-1.jpg" alt=""  className="w-full h-full absolute inset-0 object-cover"/>
                <span  className="absolute bg-black bg-opacity-60 bottom-1 font-semibold px-1.5 py-0.5 right-1 rounded text-white text-xs"> 12:21</span>
                <svg xmlns="http://www.w3.org/2000/svg" 
                    className="h-8 w-8 absolute inset-x-1/2 inset-y-1/2 translate-x-[-50%] translate-y-[-50%]" 
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
            </a>
            <div className="flex-1 ml-5 relative">
                <a href="#" className="md:text-lg text-sm lg:w-full md:w-[90%] sm:w-full font-semibold text-[#666] line-clamp-2">
                    Ultimate Web Designer And Developer Course
                </a>
                <p className="my-2 a_sm:hidden">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna .</p>
                <a href="#" className="block text-sm font-medium text-[#666] mb-3">Stalla Johani</a>
                <div className="flex justify-between items-center">
                    <div className="flex space-x-2 items-center text-sm text-[#666]">
                        <div className='text-[13px]'>Advance level</div>
                        <div className="md:block hidden">·</div>
                        <div className='text-[12px]'>120 Enrolled</div>
                    </div>
                    <div>
                        <a href="#" className="flex items-center b_sm:hidden justify-center rounded-lg bg-gray-100 px-8 h-9 hover:opacity-70">Enroll Now</a>
                    </div>
                </div>
                <div className="absolute top-0 right-1 a_sm:hidden">
                    <a href="#" className="p-1.5 text-[#666] hover:bg-gray-200 inline-block rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CourseItemFlex