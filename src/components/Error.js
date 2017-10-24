import React from 'react';
import { Link } from 'react-router-dom';

const Error = (props) => {
  const name = props.name || '404';
  const description = props.description || 'Not found';
  const details = props.details || null;
  const redirectUrl = props.redirectUrl || '/';
  const buttonText = props.buttonText || 'Go back';

  return (
    <div className='error-container'>
      <p className='error-name'>{name}</p>
      <p className='error-description'>{description}</p>
      {details && <p className='error-details'>{details}</p>}
      <Link
        className='error-button'
        to={redirectUrl}
      >
        {buttonText}
      </Link>
    </div>
  )
};

export default Error;
