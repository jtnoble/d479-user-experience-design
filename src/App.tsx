import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Entertainment from './pages/Entertainment';
import Footer from './components/Footer';
import "./App.css";

// AOS import for nice animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// framer-motion for animation between two pages
import { AnimatePresence } from 'framer-motion';

import { useEffect } from 'react';
import Lodging from './pages/Lodging';
import Transportation from './pages/Transportation';
import Grocery from './pages/Grocery';
import Restaurants from './pages/Restaurants';
import Sightseeing from './pages/Sightseeing';
import FAQ from './pages/FAQ';
import About from './pages/About';

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 20,
      delay: 20,
      easing: 'ease',
      once: false
    });
    setTimeout(() => {
      AOS.refresh();
    }, 200);
  }, []);

  return (
    <>
      <div style={{minHeight: "91vh"}}>
      <NavigationBar></NavigationBar>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/entertainment' element={<Entertainment />}></Route>
          <Route path='/lodging' element={<Lodging />}></Route>
          <Route path='/transportation' element={<Transportation />}></Route>
          <Route path='/grocery' element={<Grocery />}></Route>
          <Route path='/restaurants' element={<Restaurants />}></Route>
          <Route path='/sightseeing' element={<Sightseeing />}></Route>
          <Route path='/faq' element={<FAQ />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </AnimatePresence>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App;
