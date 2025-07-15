const PopularDishes = ({ title, description, image, rating, tag, badge, cta }) => {
  return (
    <div className="container mx-auto px-6  py-2 bg-primarytext rounded-2xl  w-70 sm:pt-2 sm:pb-4 sm:px-4 hover:bg-hoverbg transition duration-300 hover:text-primarytext">
      <img src={image} className="w-60 h-60 mx-auto sm:w-70 h-70 "/>
      <h2 className=" font-bold text-primary text-4xl sm:text-3xl ">{title}</h2>
      <div className="flex text-xs flex-row gap-4 py-2 items-center">
        <p className="bg-secondarybg3 text-white py-1 px-2 rounded-2xl">{tag}</p>
        <p className="bg-secondarybg4 text-white py-1 px-2 rounded-2xl">{badge}</p>
        <p className="text-hover font-bold font-serif">{rating}</p>
      </div>
      <p className="mb-4 text-xs text-secondary">{description}</p>
      <button className="bg-primarybg text-white py-2 px-4 rounded-2xl hover:bg-white  transition duration-300 hover:text-primarybg">
        {cta}
      </button>
    </div>
  );
};

const CategoriesA = ({image, title}) => {
  return (
    <div className=' rounded-2xl p-4 w-25 h-auto bg-primarytext sm:h-45  sm:w-45 mx-auto relative hover:bg-hoverbg transition duration-300 hover:text-primarytext'>
      <img src={image} alt={title} className='-mt-8 mx-auto  object-cover rounded-full md:-mt-22' />
      <h2 className="font-bold  mt-2 px-2 pb-2 text-sm text-center md:text-md md:mt-4">{title}</h2>
    </div>

  );
};

const CategoriesB = ({image, title}) => {
  return (
    <div className='rounded-2xl bg-primarytext p-4 h-auto w-30 sm:w-50 mx-auto relative hover:bg-hoverbg transition duration-300 hover:text-primarytext'>
      <img src={image} alt={title} className='-mt-8 mx-auto  object-cover rounded-full md:-mt-18' />
      <h2 className="font-bold  mt-2 px-2 pb-2 text-sm text-center md:text-md md:mt-4">{title}</h2>
    </div>
  );
};

const Testimonies = ({image, quote, username, rating}) => {
  return (
    <div className='bg-primarytext  rounded-2xl p-4 h-auto w-64 sm:w-70 mx-auto hover:bg-hoverbg hover:text-primarytext transition duration-300 relative'>
        <img src={image} className='w-20 h-20 -mt-10 mx-auto  object-cover rounded-full md:-mt-10'/>
        
      
      <div className="font-bold  mt-2 px-2 pb-2 text-sm text-center md:text-md md:mt-4">
          <p className="text-accent font-serif font-semibold ">{rating}</p>
        <h2 className="font-bold text-md mb-2 italic">{quote}</h2>
        <p className="text-secondary font-semibold">{username}</p>
      </div>
    </div>
  );
};

export { PopularDishes, CategoriesA, CategoriesB,  Testimonies };