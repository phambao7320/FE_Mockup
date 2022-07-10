import React from "react";

const GroupItemFlexShort = () => {
	return (
		<div className="flex flex-row items-center justify-between p-5 rounded-lg hover:bg-slate-100">
			<a className="w-[50px] h-[50px] flex-shrink-0 overflow-hidden rounded-full relative">
				<img
					src="http://demo.foxthemes.net/socialitev2.2/assets/images/group/group-3.jpg"
					alt=""
					className="h-full w-full absolute left-0 top-0 right-0 bottom-0"
				/>
			</a>
			<div className="flex-1 ml-2">
				<a href="#" className="block text-sm font-semibold text-[#666]">
					Graphics Design
				</a>
				<span className="text-[12px]">345K Following</span>
			</div>
			<a className="block leading-8 h-8 px-2 ml-2 rounded-md text-sm border font-semibold bg-blue-500 text-white">
				Join
			</a>
		</div>
	);
};

export default GroupItemFlexShort;
