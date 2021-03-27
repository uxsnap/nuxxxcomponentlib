import React from 'react';

export interface ColProps {
  className?: string;
  children: React.ReactNode;
  style: any;
}

export const Col = ({ className, children, style }: ColProps) => (
  <div style={{ width: '100%', ...style }} className={`${className} icol`}>
    {children}
  </div>
)

export default Col;