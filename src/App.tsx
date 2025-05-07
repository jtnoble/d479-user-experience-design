import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import { Routes, Route } from 'react-router-dom';
import Entertainment from './pages/Entertainment';
import Footer from './components/Footer';

// AOS import for nice animations
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

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
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/entertainment' element={<Entertainment />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App;
