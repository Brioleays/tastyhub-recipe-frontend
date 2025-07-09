const Header = () => {
  return (
    <div className="container">
        <div className="flex justify-between px-8 py-4" >
            <h1 className="text-2xl font-bold text-primary">Tasty hub</h1>
            <div className="flex items-center align-center gap-4">
                <input type="text" name="search" className="w-full h-8 border-2 border-solid border-idleb rounded-xl px-2 placeholder-secondarypalce " placeholder="Search..." id="search-bar" />
                <button className="search-btn h-auto w-auto bg-accent px-4 py-1 rounded-md ">Go</button>
            </div>
        </div>
    </div>
  )
}

export default Header