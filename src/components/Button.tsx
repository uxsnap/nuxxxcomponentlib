import React from "react";

export interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  type?: string;
  onClick: () => void;
}

export const Button = ({ className, children, type, onClick }: ButtonProps) => (
  <button className={`ibutton ${type ? `ibutton_${type} ${className ? className : ''}` : ''}`} onClick={onClick}>
    {children ? children : ''}
  </button>
);

export default Button;