import React from 'react';
import { checkClass } from "../index";
import { Icon } from '../index';

export interface InputProps {
	id?: string;
	label?: string;
	type?: string;
	value: string;
	onChange: (value: string) => void;
	className?: string;
	placeholder?: string;
	rightIcon?: string;
	onRightIconClick?: () => void;
}

export const Input = ({
	id, 
	label, 
	type, 
	value, 
	onChange, 
	className, 
	placeholder,
	rightIcon,
  onRightIconClick
}: InputProps) => {
  return (
    <div className={checkClass("iinput", className)}>
      <label className="iinput__label" htmlFor={id}>{label}</label>
      <input 
      	className="iinput__input" 
      	type={type} 
      	onChange={(e) => onChange(e.target.value)} 
      	value={value}
      	placeholder={placeholder}
				autoComplete='off'
    	/>
      {rightIcon &&  
        <Icon 
          iconType={rightIcon}
          onClick={onRightIconClick} 
      />}
    </div>
  );
}

export default Input;
