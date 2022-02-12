import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import FormInput from '../form-input/FormInput';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import db from '../../firebase/firebase';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import CustomButton from '../custom-button/CustomButton';
import './sign-up.styles.scss';

const SignUp = () => {
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { displayName, email, password, confirmPassword } = formData;
  const navigate = useNavigate();
  const inputChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log('Password did not match');
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
      const user = result.user;
      //* Create doc Ref in db
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      console.log(docSnap);

      //* Check if user exist there
      if (!docSnap.exists()) {
        console.log('sss');
        await setDoc(doc(db, 'users', user.uid), {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate('/shop');
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className='sign-up'>
      <h1 className='title'>I do not have a account</h1>
      <span>Sign in with Email and Password</span>
      <form className='sign-up-form' onSubmit={formSubmitHandler}>
        <FormInput
          type='text'
          label='Name'
          name='displayName'
          value={displayName}
          onChange={inputChangeHandler}
          required
        />
        <FormInput
          type='email'
          name='email'
          label='Email'
          value={email}
          onChange={inputChangeHandler}
          required
        />
        <FormInput
          type='password'
          name='password'
          label='Password'
          value={password}
          onChange={inputChangeHandler}
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          label='Confirm Password'
          value={confirmPassword}
          onChange={inputChangeHandler}
          required
        />
        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
