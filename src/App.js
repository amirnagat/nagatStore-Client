// import './App.css';
import NavBar from './components/NavBar';
import {Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Products from './components/Products.jsx';
import Footer from './components/Footer';
import Login from './components/Login';
import Product from './components/Product';
import ContactUs from './components/ContactUs';
import Cart from './components/Cart';
import Faqs from './components/Faqs';
import CheckOut from './components/CheckOut';

function App() {
  return (
    <>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route exact path="/products/:id" element={<Product/>} />
          <Route exact path="/contact" element={<ContactUs/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/checkout" element={<CheckOut/>} />
          <Route exact path="/faqs" element={<Faqs/>} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      <Footer/>
  </>
  );
}

export default App;
