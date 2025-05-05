import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import { Routes, Route } from 'react-router-dom';
import Entertainment from './pages/Entertainment';
import Footer from './components/Footer';

function App() {

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
