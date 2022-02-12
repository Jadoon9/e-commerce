import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../images/crown.svg';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

const Header = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);
  const cart = useSelector((state) => state.cart.hidden);

  const signOutHandler = async () => {
    await auth.signOut();
    navigate('/signin');
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
        {user ? (
          <div className='option' onClick={signOutHandler}>
            Sign Out
          </div>
        ) : (
          <Link to='/signin' className='option'>
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {cart ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
