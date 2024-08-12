import { useState } from 'react';
import NavBar from './compoanent/NavBar';
import Home from './compoanent/Home';
import HeadLineCard from './compoanent/HeadLineCard';
import Food from './compoanent/Food';
import Categories from './compoanent/Categories';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import CartItems from './compoanent/CartItems';

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
              <HeadLineCard />
              <Food />
              <Categories />
            </>
          }
        />
        <Route path='/cart' element={
          <>
          <NavBar/>
          <CartItems/>
          </>
         }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
