const Navbar = () => {
  return (
    <div className="container max-w-screen-md mx-auto w-auto  fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:static md:bottom-auto md:left-auto md:transform-none md:translate-x-0">
        <nav className=" flex gap-2 items-center rounded-xl bg-[#F8F8FF] shadow-md text-sm text-center">
            <p className="block w-auto h-auto px-3 py-2 hover:bg-hoverbg hover:text-white rounded-l-xl text-sm md:text-xxs            md:px-4 py-2">Home</p>
            <p className="block w-auto h-auto px-3 py-2 hover:bg-hoverbg hover:text-white md:px-6 py-6 md:text-xxs              ">Recipe Card</p>
            <p className="block w-auto h-auto hover:bg-hoverbg hover:text-white md:text-xxs md:px-4 py-2                                            ">Category</p>
            <p className="block w-auto h-auto px-3 py-2  hover:bg-hoverbg hover:text-white rounded-r-xl md:px-4 py-2 md:text-xxs             ">Featured Recipe</p>
            
        </nav>
    </div>
  )
}

export default Navbar