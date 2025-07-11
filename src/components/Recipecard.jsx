const PopularDishes = ({ title, description, image, rating, tag, badge, cta }) => {
  return (
    <div className="container mx-auto px-6  py-2 bg-background shadow-lg  rounded-2xl w-70 sm:pt-2 sm:pb-4 sm:px-4">
      <img src={image} className="w-60 h-60 mx-auto sm:w-70 h-70 "/>
      <h2 className=" font-bold font-serif text-primary text-4xl sm:text-3xl">{title}</h2>
      <div className="flex text-xs flex-row gap-4 py-2 items-center">
        <p className="bg-support text-white py-1 px-2 rounded-2xl">{tag}</p>
        <p className="bg-support text-white py-1 px-2 rounded-2xl">{badge}</p>
        <p className="text-hover font-bold font-serif">{rating}</p>
      </div>
      <p className="mb-4 text-xs font-bold text-secondary">{description}</p>
      <button className="bg-accent text-white py-2 px-4 rounded-2xl hover:bg-hover transition duration-300">
        {cta}
      </button>
    </div>
  );
};

const CategoriesA = ({image, title}) => {
  return (
    <div className='bg-background shadow-lg rounded-4xl p-4 h-auto w-25 sm:w-45 mx-auto relative'>
      <img src={image} alt={title} className='-mt-8 mx-auto  object-cover rounded-full md:-mt-22' />
      <h2 className="font-bold  mt-2 px-2 pb-2 text-sm text-center md:text-md md:mt-4">{title}</h2>
    </div>

  );
};

const CategoriesB = ({image, title}) => {
  return (
    <div className='bg-background shadow-lg rounded-5xl p-4 h-auto w-30 sm:w-50 mx-auto relative'>
      <img src={image} alt={title} className='-mt-8 mx-auto  object-cover rounded-full md:-mt-18' />
      <h2 className="font-bold  mt-2 px-2 pb-2 text-sm text-center md:text-md md:mt-4">{title}</h2>
    </div>
  );
};

const Testimonies = ({image, quote, username, rating}) => {
  return (
    <div>
      <img src={image} />
      <h2>{quote}</h2>
      <p>{username}</p>
      <p>{rating}</p>
    </div>
  );
};

export { PopularDishes, CategoriesA, CategoriesB,  Testimonies };