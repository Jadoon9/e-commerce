import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import HomePage from './pages/homePage/HomePage';
import Shop from './pages/shop/Shop';
import SignInSignUp from './pages/signInSignUp/SignInSignUp';

function App() {
  const [loggedInUser, setLoggedInUser] = useState('');

  useEffect(() => {
    const getUser = () => {
      onAuthStateChanged(auth, (user) => {
        setLoggedInUser(user);
      });
    };
    getUser();
    return () => {
      getUser();
    };
  }, []);
  console.log(loggedInUser);
  return (
    <>
      <Header isLoggedIn={loggedInUser} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/signin' element={<SignInSignUp />} />
      </Routes>
    </>
  );
}

export default App;
