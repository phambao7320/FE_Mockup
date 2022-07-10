const GroupItem = () => {
  return (
    <div className="m-2 shadow-md rounded-lg" >
        <div className='w-full rounded-lg shadow-sm '>
            <a href="#" className="w-full h-36 overflow-hidden rounded-t-lg relative block">
                <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/group/group-cover-1.jpg" alt=""  className="w-full h-full absolute inset-0 object-cover"/>
            </a>
            <div className="p-3 bg-white rounded-lg">
                <p className="block text-base font-semibold text-[#666] line-clamp-1 mb-1">
                    Graphic Design
                </p>
                <div className="flex flex-row md:flex-col gap-2 md:gap-0">
                    <p className="text-sm text-[#666] mb-2">232k Members</p>
                    <p className="text-sm text-[#666] mb-2">1.7k Post A Day</p>
                </div>
                
                <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                        <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-6.jpg" alt="avtFriend" className="border-2 border-white rounded-full w-7" />
                        <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-5.jpg" 
                        alt="avtFriend" className="border-2 border-white rounded-full w-7" />
                    </div>
                    <p className="text-[11px] flex-1 line-clamp-2 mb-0 mx-2"><a href="#" className="text-[11px]">Johnson</a> and 5 friends are members</p>
                </div>

                <div className="flex justify-between items-center py-2">
                    <a href="#" className='block rounded-md w-[45%] py-1.5 font-medium text-center bg-blue-600 text-white' >Join</a>
                    <a href="#" className='block rounded-md w-[45%] py-1.5 font-medium text-center bg-[#e5e7eb] text-[#666]' >View</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GroupItem