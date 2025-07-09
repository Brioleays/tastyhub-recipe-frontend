const Navbar = () => {
  return (
    <div className="container w-3/5 top-[85vh] left-[38vh] absolute ">
        <nav className=" flex justify-between items-center rounded-xl px-8 py-4 bg-primary text-white shadow-md">
            <p>Home</p>
            <p>Recipe Card</p>
            <p>Category</p>
            <p>Featured Recipe</p>
            <p>About</p>
        </nav>
    </div>
  )
}

export default Navbar