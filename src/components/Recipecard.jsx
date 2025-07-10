const PopularDishes = ({ title, description, image, rating, tag, badge }) => {
  return (
    <div className="container mx-auto px-6  py-4 bg-background shadow-lg  rounded-2xl w-70 sm:pt-2 sm:pb-4 sm:px-4">
      <img src={image} className="w-60 h-60 mx-auto sm:w-70 h-70 "/>
      <h2 className=" font-bold font-serif text-primary text-4xl sm:text-3xl">{title}</h2>
      <p className="text-hover font-bold font-serif">{rating}</p>
      <p className="mb-4 text-xs font-bold text-secondary">{description}</p>
      <div className="flex text-xs flex-row gap-4">
        <p className="bg-support text-white py-2 px-4 rounded-2xl">{tag}</p>
        <p className="bg-support text-white py-2 px-4 rounded-2xl">{badge}</p>
      </div>
    </div>
  );
};

const Categories = ({image, title}) => {
  return (
    <div>
      <img src={image} className="" />
      <h2>{title}</h2>
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

export { PopularDishes, Categories, Testimonies };