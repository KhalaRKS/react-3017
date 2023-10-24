import React from 'react';

export const Button = ({ children, disabled, secondary, radius = '32' }) => {
  return (
    <button disabled={disabled} secondary={secondary} radius={radius}>
      {children}
    </button>
  );
};
