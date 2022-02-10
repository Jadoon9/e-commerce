import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import HomePage from './pages/homePage/HomePage';
import Shop from './pages/shop/Shop';
import SignInSignUp from './pages/signInSignUp/SignInSignUp';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/auth' element={<SignInSignUp />} />
      </Routes>
    </>
  );
}

export default App;
