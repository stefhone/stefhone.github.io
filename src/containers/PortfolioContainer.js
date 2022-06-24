import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import Testimonials from '../components/Testimonials';
import ErrorPage from '../components/ErrorPage';

export const PortfolioContainer = () => {
    
    return (
    // router is creating index in a book
    // route are the specific entries in that index 
    // <Router>
    //   <>
    //     <NavBar />
    //       {/* exact only renders home specifically */}
    //       <Routes>
    //         <Route exact path="/" element={<Home />} />
    //         <Route path="/about" element={<About />} />
    //         <Route path="/portfolio" element={<Portfolio />} />
    //         <Route path="/skills" element={<Skills />} />
    //         <Route path="/testimonials" element={<Testimonials />} />
    //         <Route path="/contact" element={<Contact />} />

    //         {/*  make sure this is last in the switch statement last thing to check for if all else fails */}
    //         <Route component={ErrorPage} />
    //       </Routes>
    //   </>
    // </Router>
    <main className="text-gray-400 bg-gray-900 body-font">
      <NavBar />
      <About />
      <Portfolio />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
    )
}