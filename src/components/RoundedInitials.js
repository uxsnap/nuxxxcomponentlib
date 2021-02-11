import React from 'react';

export default ({ className, name }) => (
  <div className={`rounded-initials ${className ? className : ''}`}>
    <span>{name ? name[0].toUpperCase() : ''}</span>
  </div>
);
