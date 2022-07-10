import CategoryList from '@components/Categories'
import HeaderMainContent from '@components/header-main-content'
import ProductItem from './ProductItem'
import ProductItemFlex from './ProductItemFlex'

const ProductList = () => {
  return (
    <div>
        <div className='bg-[#f9fafb]'>
            <div className='flex flex-col py-[20px] px-[5px] justify-center' >
                <HeaderMainContent label='Products' items={['Suggestion','Newest','My products']} />
                <div className='mt-2 overflow-hidden w-full'>
                    <ul className='flex overflow-x-auto w-full'>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                    </ul>
                </div>
            </div>
            <CategoryList />
            <div className='mx-[5px]'>
                <div className='flex item-center justify-between ml-2 my-5'>
                    <h4 className='texs-semibold text-2xl my-0'>New Collection</h4>
                    <a href="#">See all</a>
                </div>
                <div className='mt-2 overflow-hidden w-full'>
                    <ul className='flex overflow-x-auto w-full'>
                        <li className='block basis-full md:basis-1/2 lg:basis-1/3 flex-shrink-0'><ProductItemFlex/></li>
                        <li className='block basis-full md:basis-1/2 lg:basis-1/3 flex-shrink-0'><ProductItemFlex/></li>
                        <li className='block basis-full md:basis-1/2 lg:basis-1/3 flex-shrink-0'><ProductItemFlex/></li>
                        <li className='block basis-full md:basis-1/2 lg:basis-1/3 flex-shrink-0'><ProductItemFlex/></li>
                        <li className='block basis-full md:basis-1/2 lg:basis-1/3 flex-shrink-0'><ProductItemFlex/></li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col py-[20px] px-[5px] justify-center' >
                <HeaderMainContent label='Brand Collection' items={[]} />
                <div className='mt-2 overflow-hidden w-full'>
                    <ul className='flex overflow-x-auto w-full'>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductList