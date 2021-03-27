import React from 'react';

export interface RowProps {
  children?: any;
  curClass?: string;
}

export default ({ children, curClass }: RowProps) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%'}} className={curClass ? curClass : ''}>
     {children}
    </div>
  )
}