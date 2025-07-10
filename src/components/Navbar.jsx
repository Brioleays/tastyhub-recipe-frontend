const Navbar = () => {
  return (
    <div className="container max-w-screen-md mx-auto w-auto px-4 fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:top-144">
        <nav className=" flex gap-2 items-center rounded-xl bg-primary text-white shadow-md text-sm text-center">
            <p className="w-auto h-auto px-6 py-6 hover:bg-hover rounded-l-xl text-sm">Home</p>
            <p className="w-auto h-auto px-4 py-4 hover:bg-hover md:px-6 py-6 ">Recipe Card</p>
            <p className="w-auto h-auto px-6 py-6 hover:bg-hover">Category</p>
            <p className="w-auto h-auto px-4 py-4  hover:bg-hover rounded-r-xl md:px-6 py-6  ">Featured Recipe</p>
            
        </nav>
    </div>
  )
}

export default Navbar