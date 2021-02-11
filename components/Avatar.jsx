import React from 'react';
import { Icon } from './index';

export default ({ className, src, onClick }) => {
	return (
		<div className={className ? className : ''}>
			{src 
				? <img src={src} alt="ME" onClick={onClick} />
      	: <Icon iconType="person" onClick={onClick} />
      }
		</div>
	)
};