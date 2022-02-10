import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ onChange, label, ...data }) => {
  return (
    <div className='group'>
      <input className='form-input' onChange={onChange} {...data} />
      {label ? (
        <label
          className={`${data.value.length ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
