import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import db from '../../firebase/firebase.js';

import CustomButton from '../custom-button/CustomButton';
import FormInput from '../form-input/FormInput';

import './signin.styles.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const googleAuthHandler = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      //* Create doc Ref in db
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      //* Check if user exist there
      if (!docSnap.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign In with your email and password</span>

      <form onSubmit={formSubmitHandler}>
        <FormInput
          type='email'
          name='email'
          onChange={emailChangeHandler}
          value={email}
          label='email'
          required
        />
        <FormInput
          type='password'
          name='password'
          onChange={passwordChangeHandler}
          value={password}
          label='password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign In </CustomButton>
          <CustomButton onClick={googleAuthHandler} isGoogleButton>
            Google Sign In
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
