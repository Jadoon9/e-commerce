import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleButton, ...data }) => {
  return (
    <button
      className={`${isGoogleButton ? 'google-sign-in' : ''} custom-button`}
      {...data}
    >
      {children}
    </button>
  );
};

export default CustomButton;
