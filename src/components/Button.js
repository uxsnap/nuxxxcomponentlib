import React from "react";

export default ({ className, children, type, onClick }) => (
  <button className={`ibutton ${type ? `ibutton_${type} ${className ? className : ''}` : ''}`} onClick={onClick}>
    {children ? children : ''}
  </button>
);