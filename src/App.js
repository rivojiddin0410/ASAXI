
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Routes, Route} from 'react-router-dom';
import Home from './router/home/Home';
import Wishlist from './router/wishlist/Wishlist';
import Cart from './router/cart/Cart';
import Login from './router/login/Login';
import SingleRoute from './router/single-route/SingleRoute';
import Admin from "./router/admin/Admin"
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/wishlist' element={<Wishlist/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path="/admin/*" element={<Admin />} />
        <Route path='/product/:id' element={<SingleRoute/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
