const GroupItemFlex = () => {
  return (
    <div className="flex flex-row items-center justify-between p-3 rounded-lg hover:bg-slate-100">
			<a className="block w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg relative">
				<img
					src="http://demo.foxthemes.net/socialitev2.2/assets/images/group/group-3.jpg"
					alt=""
					className="h-full w-full absolute left-0 top-0 right-0 bottom-0"
				/>
			</a>
			<div className="flex-1 ml-3">
				<a href="#" className="block text-base font-semibold text-[#666]">
					Graphics Design
				</a>
				<div className="flex flex-col sm:flex-row md:flex-col lg:flex-row lg:items-center gap-2">
          <p className="text-sm text-[#666] mb-0 lg:mb-2">232k Members</p>
          <p className="text-sm text-[#666] mb-0 lg:mb-2">1.7k Post A Day</p>
        </div>
        <div className="flex md:hidden lg:flex items-center justify-between py-1">
            <div className="flex items-center">
                <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-6.jpg" alt="avtFriend" className="border-2 border-white rounded-full w-5" />
                <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-5.jpg" 
                alt="avtFriend" className="border-2 border-white rounded-full w-5" />
            </div>
            <p className="flex-1 line-clamp-2 mb-0 mx-2">5 friends are members</p>
        </div>
        <hr />
			</div>
			<a className="block leading-8 h-8 px-4 py-2 flex items-center ml-2 rounded-md text-sm border font-semibold bg-blue-100 text-blue-600 gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" fill="#0056b3" clipRule="evenodd" />
                </svg>
                Follow
			</a>
		</div>
  )
}

export default GroupItemFlex