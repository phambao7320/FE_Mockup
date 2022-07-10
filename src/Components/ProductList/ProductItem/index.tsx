const ProductItem = () => {
  return (
    <div className="bg-white m-2 shadow-md rounded-lg">
        <div className="w-full border-1 rounded-lg border-solid drop-shadow-sm">
            <a href="#" className="w-full h-44 overflow-hidden relative block rounded-md">
                <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/product/1.jpg" alt="ImgProduct" className="w-full h-full absolute inset-0 object-cover" />
            </a>
            <button className="p-1 absolute top-3 right-3 rounded-full bg-[#fee2e2]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" 
                    color="red"
                    strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </button>
        </div>
        <div className="px-3 relative border-1 border-solid border-[#333">
            <div className="absolute bg-blue-100 font-medium px-2 py-1 top-[-20px] right-3 rounded-full text text-blue-500 text-[12px] md:text-sm ">$24.99</div>
            <a href="block">
                <p className="my-2 text-yellow-400 text-[10px] md:text-[12px] line-clamp-1">HERBEL</p>
                <p className="text-[#666] font-medium text-[12px] md:text-sm line-clamp-1">Brown headphones</p>
            </a>
        </div>
    </div>
  )
}

export default ProductItem