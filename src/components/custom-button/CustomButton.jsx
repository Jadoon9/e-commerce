import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, ...data }) => {
  return (
    <div className='custom-button' {...data}>
      {children}
    </div>
  );
};

export default CustomButton;
