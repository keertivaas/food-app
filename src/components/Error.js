
import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = ({ message }) => {
  const errorMsg = useRouteError();
  console.log(errorMsg);
  return (
    <div className="error-container">
      <h2>Error</h2>
      <p>{message || 'An unexpected error occurred.'}</p>
    </div>
  );
};

export default Error;
