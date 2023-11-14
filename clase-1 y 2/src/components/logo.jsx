import React from 'react';

// Función pura: Mismas entradas -> Mismas salidas
export const Logo = ({url,src,className,alt}) => {
  return (
    <a href={url} target='_blank' rel='noreferrer'>
      <img src={src} className={className} alt={alt} />
      
    </a>
  );
};
