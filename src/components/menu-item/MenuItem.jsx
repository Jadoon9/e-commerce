import React from 'react';

const MenuItem = ({ title }) => {
  return (
    <div className='menu-item'>
      <div className='content'>
        <h2 className='title'>{title}</h2>
        <span className='subtitle'>Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
