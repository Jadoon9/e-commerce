import React from 'react';
import { ReactComponent as ShoppingBag } from '../../images/shopping-bag.svg';
import './cart-icon.styles.scss';
import { cartToggle } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';

const CartIcon = () => {
  const dispatch = useDispatch();

  const cartToggleHandler = () => {
    dispatch(cartToggle());
  };
  return (
    <div className='cart-icon' onClick={cartToggleHandler}>
      <ShoppingBag className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

export default CartIcon;
