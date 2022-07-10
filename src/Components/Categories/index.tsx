import SwipeSliders from '@components/SwipeSliders'
import CategoryItem from './CategoryItem'

const CategoryList = () => {

    const responsiveGroup = [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 414,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 2,
            }
        },     
    ]

    return (
        <div className='mx-[5px]'>
            <div className='flex item-center justify-between mx-2'>
                <div className=''>
                    <h4 className='texs-semibold text-2xl my-0'>Categories</h4>
                    <p className='text-sm color-[#666] mt-1'>Find a group by browsing top categories.</p>
                </div>
                <a href="#">See all</a>
            </div>
            <div className='mt-2 overflow-hidden w-full'>
                <SwipeSliders responsive={responsiveGroup} numberOfSlideShow={5} >
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                </SwipeSliders>
            </div>
        </div>
    )
}

export default CategoryList