import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import { PopularDishes,CategoriesA, CategoriesB, Testimonies } from './components/Recipecard.jsx';
function App() {
  
  return (
    <>
    <div className='bg-background min-h-screen'>
      <Header />
       {/* <Navbar />  */}
       <Hero />
      <PopularDishes
        title="Spaghetti Carbonara"
        description="A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper."
        image="https://placehold.co/200"
        rating="4.5"
        tag= {"Italian"}
        badge={"Popular"}
        cta={"Check Recipe"}
      />
      <CategoriesA
      image="https://placehold.co/200"
      title="Italian "
    />
     <CategoriesB
      image="https://placehold.co/200"
      title="Italian "
    />
      <Testimonies
        image="https://placehold.co/200"
        quote="This is the best recipe I've ever tried!"
        username="John Doe"
        rating="5"
      />
    </div>
     
    </>
  )
}

export default App
