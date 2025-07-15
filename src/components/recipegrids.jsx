import { PopularDishes,CategoriesA, CategoriesB, Testimonies } from './Recipecard.jsx';
const CategoriesG = () => {
  return (
    <div className='container my-24 py-16 px-8'>
        <div className='flex justify-between items-center px-4'>
            <h2 className='text-xl text-primarytext mt-10 mb-6 md:text-3xl '>Categories</h2>
            <button
            className='bg-secondarybg1 px-4 py-2 rounded-3xl 
            text-sm  hover:bg-hoverbg hover:text-primarytext md:text-md'>View all</button>
        </div>
        <div className="grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-5 gap-x-1 gap-y-8">
            <CategoriesA
                image="https://placehold.co/200"
                title="Italian "
            />
            <CategoriesA
                image="https://placehold.co/200"
                title="Italian "
            />
            <CategoriesB
                image="https://placehold.co/200"
                title="Italian "
            />
            <CategoriesA
                image="https://placehold.co/200"
                title="Italian "
            />
            <CategoriesA
                image="https://placehold.co/200"
                title="Italian "
            />
        </div>
    </div>
  )
}

const PopularG = () => {
  return (
    <div className='container mt-2 mb-10 py-16 px-8'>
        <div className='flex justify-between items-center px-4'>
            <h2 className='text-xl text-primarytext mt-10 mb-6 md:text-3xl '>Featured Dishes</h2>
            <button
            className='bg-secondarybg1 px-4 py-2 rounded-3xl 
            text-sm  hover:bg-hoverbg hover:text-primarytext md:text-md'>Explore</button>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 '>
            <PopularDishes
                title="Spaghetti Carbonara"
                description="A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper."
                image="https://placehold.co/200"
                rating="4.5"
                tag= {"Italian"}
                badge={"Popular"}
                cta={"Check Recipe"}
            />
            <PopularDishes
                title="Spaghetti Carbonara"
                description="A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper."
                image="https://placehold.co/200"
                rating="4.5"
                tag= {"Italian"}
                badge={"Popular"}
                cta={"Check Recipe"}
            />
            <PopularDishes
                title="Spaghetti Carbonara"
                description="A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper."
                image="https://placehold.co/200"
                rating="4.5"
                tag= {"Italian"}
                badge={"Popular"}
                cta={"Check Recipe"}
            />
        </div>
    </div>
  )
}

 const TestimonyG = () => {
  return (
    <div className='container mt-10 py-16 px-8'>
        <div className='px-4'>
            <h2 className='text-xl text-primarytext mt-10 mb-10 md:text-3xl '>Testimonies</h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 '>
            <Testimonies
                image="https://placehold.co/200"
                quote="This is the best recipe I've ever tried!"
                username="John Doe"
                rating="5"
        />
            <Testimonies 
                image="https://placehold.co/200"
                quote="This is the best recipe I've ever tried!"
                username="John Doe"
                rating="5"
            />
            <Testimonies
            image="https://placehold.co/200"
                quote="This is the best recipe I've ever tried!"
                username="John Doe"
                rating="5"
            />
        </div>
    </div>
  )
}

export {CategoriesG, PopularG, TestimonyG}
