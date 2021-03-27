import React from 'react';
import { Icon } from '../index';

export interface AvatarProps {
  className?: string;
  src: string;
  onClick?: () => void;
}

export default ({ className, src, onClick }: AvatarProps) => {
	return (
		<div className={className ? className : ''}>
			{src 
				? <img src={src} alt="ME" onClick={onClick} />
      	: <Icon iconType="person" onClick={onClick} />
      }
		</div>
	)
};