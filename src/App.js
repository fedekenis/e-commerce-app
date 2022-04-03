import './App.css';
import { CheckoutPage } from './components/CheckoutPage';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='checkout-page' element={<CheckoutPage/>} />
          <Route path='/' element={<Products/>} />
          
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
