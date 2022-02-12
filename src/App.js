import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { setCurrentUser } from './redux/actions/setCurrentUser';
import Header from './components/header/Header';
import HomePage from './pages/homePage/HomePage';
import Shop from './pages/shop/Shop';
import SignInSignUp from './pages/signInSignUp/SignInSignUp';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = () => {
      onAuthStateChanged(auth, (user) => {
        dispatch(setCurrentUser(user));
      });
    };
    getUser();
    return () => {
      getUser();
    };
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/signin' element={<SignInSignUp />} />
      </Routes>
    </>
  );
}

export default App;
