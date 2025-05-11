import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import { Routes, Route } from 'react-router-dom';
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

function App() {

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
      <NavigationBar></NavigationBar>
      <AnimatePresence mode='wait'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/entertainment' element={<Entertainment />}></Route>
          <Route path='/lodging' element={<Lodging />}></Route>
          <Route path='/transportation' element={<Transportation />}></Route>
          <Route path='/grocery' element={<Grocery />}></Route>
          <Route path='/restaurants' element={<Restaurants />}></Route>
          <Route path='/sightseeing' element={<Sightseeing />}></Route>
        </Routes>
      </AnimatePresence>
      <Footer></Footer>
    </>
  )
}

export default App;
