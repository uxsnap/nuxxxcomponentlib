import React from 'react';
import { Input } from './index';

export interface InputSelect {
	value: string;
	onChange: (val: string) => void;
	rightIcon?: string;
	placeholder?: string;
	items?: Array<any>;
	Component: any;
	Stub: any;
	minLength: number;
	checked: Array<string>;
	checkedIcon?: string;
}

export const InputSelect = ({ 
	value, 
	onChange, 
	rightIcon, 
	placeholder, 
	items, 
	Component, 
	Stub,
	minLength = 3,
	checked,
	checkedIcon
}: InputSelect) => {
  return (
		<div className="input-select">
			<div className="input-select__input">
				<Input 
	        value={value} 
	        onChange={onChange}
	        placeholder={placeholder}
	        rightIcon={rightIcon}
	      />
    	</div>
    	{items && value.length > minLength &&
	    	<div className="input-select__dropdown">
	    		{items.length ? items.map((item) => (
	  				<Component {...item} checked={checked && checked.includes(item.id) ? checkedIcon : undefined}/>
	    		)) : Stub ? <Stub /> : ''}
	    	</div>
    	}
		</div>
  );
};

export default InputSelect;