import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import { PopularG,CategoriesG, TestimonyG } from './components/recipegrids.jsx';
function App() {
  
  return (
    <>
        <div className="bg-[url(./assets/bg.jpg)] min-h-screen px-4 py-4 bg-cover bg-fixed bg-center">
           <div className='bg-primarybg bg-blur-5xl  bg-opacity-80 rounded-5xl min-h-screen px-4'>
            <Header />
            <Hero />
            <CategoriesG/>
            <PopularG/>
            <TestimonyG/>
          </div> 
        </div>
     </>
  )
}

export default App
