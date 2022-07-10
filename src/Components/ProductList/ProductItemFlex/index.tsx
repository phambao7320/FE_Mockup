const ProductItemFlex = () => {
  return (
    <div className='flex bg-white rounded-md shadow-md m-2 p-2'>
        <a className='rounded-md block relative w-20 h-24'>
            <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/product/13.jpg" alt="ImgProduct" 
                className='w-full h-full rounded-md absolute inset-0 object-cover'
            />
        </a>
        <div className='flex-1 relative ml-2'>
            <div className="absolute bg-gray-100 font-medium px-2 py-1 top-1 right-1 rounded-full text-[#666] hover:text-blue-500 text-sm">$12.99</div>
            <a href="#">
                <p className="my-2 text-yellow-400 text-[12px] line-clamp-1">PARFUMDDS</p>
                <p className="pb-2 text-[#666] font-medium text-base line-clamp-1 mb-0">Parfum Spray</p>
            </a>
            <div className="flex space-x-2 items-center text-sm text-[#666]">
              <div className='text-[13px]'>15 Likes</div>
              <div className="md:block hidden">·</div>
              <div className='text-[12px]'>286 Views</div>
            </div>
        </div>
    </div>
  )
}

export default ProductItemFlex