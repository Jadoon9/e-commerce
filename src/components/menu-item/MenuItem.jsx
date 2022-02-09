import React from 'react';
import './menuItem.styles.scss';
const MenuItem = ({ title, imageUrl, size, id, linkUrl }) => {
  console.log(title);
  return (
    <div className={`menu-item ${size}`}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className='content'>
        <h2 className='title'>{title}</h2>
        <span className='subtitle'>Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
