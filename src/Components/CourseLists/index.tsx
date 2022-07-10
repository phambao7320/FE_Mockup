import HeaderMainContent from '@components/header-main-content'
import CourseItem from './CourseItem'
import CourseItemFlex from './CourseItemFlex'

const CourseList = () => {
  return (
    <div className='bg-[#f9fafb] flex flex-col py-[20px] px-[5px] justify-center' >
        <HeaderMainContent label='Courses' items={['Suggestion','Newest','My videos']} />
        <div className='mt-2 overflow-hidden w-full'>
          <ul className='flex overflow-x-auto w-full'>
              <li className='block basis-1/2 md:basis-1/3 lg:basis-1/4 flex-shrink-0'><CourseItem/></li>
              <li className='block basis-1/2 md:basis-1/3 lg:basis-1/4 flex-shrink-0'><CourseItem/></li>
              <li className='block basis-1/2 md:basis-1/3 lg:basis-1/4 flex-shrink-0'><CourseItem/></li>
              <li className='block basis-1/2 md:basis-1/3 lg:basis-1/4 flex-shrink-0'><CourseItem/></li>
              <li className='block basis-1/2 md:basis-1/3 lg:basis-1/4 flex-shrink-0'><CourseItem/></li>
              <li className='block basis-1/2 md:basis-1/3 lg:basis-1/4 flex-shrink-0'><CourseItem/></li>
              <li className='block basis-1/2 md:basis-1/3 lg:basis-1/4 flex-shrink-0'><CourseItem/></li>
              <li className='block basis-1/2 md:basis-1/3 lg:basis-1/4 flex-shrink-0'><CourseItem/></li>
          </ul>
        </div>
        <div className='mt-2'></div>
        <HeaderMainContent label='Yours videos' items={['Suggestion','Newest','My videos']} />
        <div className='my-3 w-full bg-white rounded-md shadow-lg'>
          <ul className='flex flex-col overflow-x-auto w-full p-2'>
              <li className='block course_item_flex flex-shrink-0'><CourseItemFlex/></li>
              <li className='block course_item_flex flex-shrink-0'><CourseItemFlex/></li>
              <li className='block course_item_flex flex-shrink-0'><CourseItemFlex/></li>
          </ul>
        </div>

    </div>
  )
}

export default CourseList