
import './App.css';
import {Routes,Route, useLocation} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './components/home/Home';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import Create from './components/create/Create';
import FoodDetails from './components/foodDetails/FoodDetails';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import FoodCatalog from './components/foodCatalog/FoodCatalog'
import { useEffect } from 'react';

function App() {
  const location=useLocation()

  useEffect(() => {
    window.scrollTo(0,0)
  }, [location.pathname])
  
  return (
    <div >
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/create' element={<Create />} />
      <Route path='/food/:id' element={<FoodDetails />} />
      <Route path='/foods/:id' element={<FoodCatalog />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
