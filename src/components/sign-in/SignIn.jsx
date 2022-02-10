import React, { useState } from 'react';
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
        <CustomButton type='submit'>Sign In </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
