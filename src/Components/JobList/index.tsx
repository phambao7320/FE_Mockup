import HeaderMainContent from "@components/header-main-content"
import JobItem from "./JobItem"
import PostTedItem from "./Posted"

const JobList = () => {
  return (
    <div className="mx-auto px-2.5 py-7 lg:flex">
        <div className="w-full lg:w-[70%]">
            <HeaderMainContent label='Jobs' items={['Suggestion','Newest','My Jobs']} />
            <div className="bg-white mx-0 my-5 md:m-5 rounded-lg shadow-md">
                <ul>
                    <li className="block course_item_flex flex-shrink-0'"><a href="#"><JobItem/></a></li>
                    <li className="block course_item_flex flex-shrink-0'"><a href="#"><JobItem/></a></li>
                    <li className="block course_item_flex flex-shrink-0'"><a href="#"><JobItem/></a></li>
                    <li className="block course_item_flex flex-shrink-0'"><a href="#"><JobItem/></a></li>
                    <li className="block course_item_flex flex-shrink-0'"><a href="#"><JobItem/></a></li>
                </ul>
            </div>
        </div>
        <div className="w-full lg:w-[30%] relative">
            <div className="lg:fixed p-0 md:p-5 lg:p-0">
                <div className="w-[100%]">
                    <h4 className="text-xl text-gray-700 font-medium mb-5 px-2">Recently Posted</h4>
                    <ul className="m-0 p-0">
                        <li className="block flex-shrink-0"><a href="#"><PostTedItem /></a></li>
                        <li className="block flex-shrink-0"><a href="#"><PostTedItem /></a></li>
                        <li className="block flex-shrink-0"><a href="#"><PostTedItem /></a></li>
                    </ul>
                </div>
                <div className="mt-5 lg:p-0">
                    <h4 className="text-xl text-gray-700 font-medium mb-5 px-2">Tags</h4>
                    <div className="flex gap-2 flex-wrap">
                        <a href="#" className="bg-gray-100 py-1.5 px-4 rounded-full inline-block">Computers</a>
                        <a href="#" className="bg-gray-100 py-1.5 px-4 rounded-full inline-block">Business</a>
                        <a href="#" className="bg-gray-100 py-1.5 px-4 rounded-full inline-block">News</a>
                        <a href="#" className="bg-gray-100 py-1.5 px-4 rounded-full inline-block">Architeche</a>
                        <a href="#" className="bg-gray-100 py-1.5 px-4 rounded-full inline-block">Technolgy</a>
                        <a href="#" className="bg-gray-100 py-1.5 px-4 rounded-full inline-block">Music</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JobList