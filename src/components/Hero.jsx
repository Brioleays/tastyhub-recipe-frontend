const Hero = () => {
  return (
    <div className='container flex flex-col items-center px-auto py-6 sm: flex-row mt-0 w-full md:px-8 md:flex-row md:mt-10 md:gap-10 '>
        <div className=' gap-6 my-6 w-1/2 md:w-full md:px-4 md:mb-10'>
            <h1 className='text-primarytext  text-center  text-4xl font-extrabold mt-0 mb-6 md:mb-4 md:text-6xl md:text-left'>Discover Recipes</h1>
            <p className='text-secondarytext text-sm text-center mb-10 md:mb-6 md:text-left'>
                Explore a variety of delicious recipes from around the world. Whether you're looking for quick meals or gourmet dishes, we have something for everyone.
            </p>
            <button className="bg-secondarybg1 px-4 py-2 block mx-auto rounded-md hover:text-white md:mx-0 hover:bg-hoverbg">Explore Now</button>
        </div>
        <div>

            <img src="https://placehold.co/600" alt="" srcset="" className='' />
        </div>
    </div>
  )
}

export default Hero