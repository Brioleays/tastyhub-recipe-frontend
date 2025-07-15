import Navbar from './Navbar.jsx';
const Header = () => {
  return (
    <div className="container bg- max-w-screen-xl mx-auto mb-0 sm:max-w-screen-xl ">
      <header className="flex flex-col items-center py-4 md:flex-row md:justify-between md:items-center md:pl-16 md:pt-8 md:pb-4 md:w-full">
        <h1 className="text-4xl my-4 sm:text-2xl font-bold text-logo sm:my-0">Tasty hub</h1>
        <Navbar className=''/>
        <div className="flex justify-center items-center w-full gap-2 sm:w-1/2 sm:gap-6">
          <input
            type="text"
            name="search"
            className="sm:w-64 h-8 border-2 border-solid border-bcolor rounded-xl px-2 bg-primarybg1
            text-primarytext
            text-xs sm:text-sm
           placeholder:bg-primarybg1placeholder:text-primarytext
           placeholder:text-xs 
            sm:placeholder:text-sm 
             focus:outline-none focus:ring-2 focus:ring-bcolor focus:border-transparent"
            placeholder="Search..."
            id="search-bar"
          />
          <button className="search-btn h-auto w-auto bg-secondarybg1 px-3 sm:px-4 py-1 rounded-md text-primary hover:bg-hoverbg hover:text-white">
            Go
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;