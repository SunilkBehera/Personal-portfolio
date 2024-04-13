
import './App.css';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Testimonials from './components/Testimonials/Testimonials';


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      
        <Navbar/>
          <div className='max-w-screen-2xl px-16 mx-auto'>
        <Banner/>
        <Features/>
        <Projects/>
        <Resume/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
