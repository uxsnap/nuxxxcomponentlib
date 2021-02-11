import React from 'react';

export default ({ className, children, style }) => (
  <div style={{ width: '100%', ...style }} className={`${className} icol`}>
    {children}
  </div>
)