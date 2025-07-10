const Header = () => {
  return (
    <div className="container max-w-screen-xl mx-auto mb-0 sm:max-w-screen-xl ">
      <header className="flex flex-col items-center md:flex-row md:justify-between md:items-center md:pl-16 py-4 w-full">
        <h1 className="text-4xl my-4 sm:text-2xl font-bold text-primary sm:my-0">Tasty hub</h1>
        <div className="flex justify-center items-center w-full gap-2 sm:w-1/2 sm:gap-6">
          <input
            type="text"
            name="search"
            className="sm:w-64 h-8 border-2 border-solid border-idleb rounded-xl px-2 placeholder-secondary"
            placeholder="Search..."
            id="search-bar"
          />
          <button className="search-btn h-auto w-auto bg-accent px-3 sm:px-4 py-1 rounded-md text-white hover:bg-hover">
            Go
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;