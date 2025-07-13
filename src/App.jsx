import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import { PopularG,CategoriesG, TestimonyG } from './components/recipegrids.jsx';
function App() {
  
  return (
    <>
    <div className='bg-background min-h-screen'>
      <Header />
       {/* <Navbar />  */}
       <Hero />
      <CategoriesG/>
      <PopularG/>
      <TestimonyG/>
    </div>
     
    </>
  )
}

export default App
