const CategoryItem = () => {
  return (
    <div className="w-full border-1 rounded-lg p-2">
        <a href="#" className="w-full h-40 overflow-hidden relative block rounded-md">
            <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/category/travel.jpg" alt="ImgCategories" className="w-full h-full absolute inset-0 object-cover z-10" />
            <span className='absolute bottom-3 left-3 text-white font-semibold'>Travel</span>
        </a>
    </div>
  )
}

export default CategoryItem