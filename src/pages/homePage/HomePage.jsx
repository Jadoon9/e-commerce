import React from 'react';
import MenuItem from '../../components/menu-item/MenuItem';
import './homepage.styles.scss';

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        <MenuItem title='Hat' />
        <MenuItem title='Jeans' />
        <MenuItem title='Shirt' />
        <MenuItem title='Shoes' />
      </div>
    </div>
  );
};

export default HomePage;
