import { useState } from 'react';
import NavBar from './compoanent/NavBar';
import Home from './compoanent/Home';
import HeadLineCard from './compoanent/HeadLineCard';
import Food from './compoanent/Food';
import Categories from './compoanent/Categories';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import CartItems from './compoanent/CartItems';
import Footer from './compoanent/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Food />
              <Categories />
              <Footer/>
            </>
          }
        />
        <Route path='/cart' element={
          <>
          <NavBar/>
          <CartItems/>
          <Footer/>
          </>
         }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
