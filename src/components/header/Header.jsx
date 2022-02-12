import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../images/crown.svg';

const Header = ({ isLoggedIn }) => {
  const signOutHandler = async () => {
    await auth.signOut();
  };
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>
          SHOP
        </Link>
        <Link to='/' className='option'>
          CONTACT
        </Link>
        {isLoggedIn ? (
          <div className='option' onClick={signOutHandler}>
            Sign Out
          </div>
        ) : (
          <Link to='/signin' className='option'>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
