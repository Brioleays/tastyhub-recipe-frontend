import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import { PopularDishes } from './components/Recipecard.jsx';
function App() {
  
  return (
    <>
    <div className='bg-background min-h-screen'>
      <Header />
       <Navbar /> 
       <Hero />
      <PopularDishes
        title="Spaghetti Carbonara"
        description="A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper."
        image="https://placehold.co/200"
        rating="4.5"
        tag={"Italian"}
        badge={"Popular"}
      />
    </div>
    </>
  )
}

export default App
