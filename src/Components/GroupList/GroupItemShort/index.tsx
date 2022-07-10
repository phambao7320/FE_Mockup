const GroupItemShort = () => {
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
                <div className="flex items-center justify-between">
                  <p className="text-[12px] text-[#666] mb-2">232k Members</p>
                  <p className="text-[12px] text-[#666] mb-2">1.7k Post A Day</p>
                </div>
                <a href="#" className='block rounded-md px-8 py-1.5 font-medium text-center bg-blue-600 text-white' >Join</a>
            </div>
        </div>
    </div>
  )
}

export default GroupItemShort