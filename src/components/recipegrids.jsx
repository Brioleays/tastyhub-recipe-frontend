import { PopularDishes,CategoriesA, CategoriesB, Testimonies } from './Recipecard.jsx';
const CategoriesG = () => {
  return (
    <div className='container py-16 px-8'>
        <div className="flex flex-row ">
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
    <div className='container py-16 px-8'>
        <div className='flex flex-row '>
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
    <div className='container py-16 px-8'>
        <div className='flex flex-row '>
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
