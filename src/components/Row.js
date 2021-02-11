import React from 'react';

export default ({ children, curClass }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%'}} className={curClass}>
     {children}
    </div>
  )
}