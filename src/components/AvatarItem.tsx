import React from 'react';
import { UserListItem, Icon } from './index';

export interface AvatarItemProps {
	className?: string;
	id: string; 
	img: string;
	text: string;
	icon?: string;
	onIconClick: (id: string) => void;
	checked: boolean;
}

export const AvatarItem = ({ className, id, img, text, icon, onIconClick, checked }: AvatarItemProps) => (
	<UserListItem img={img} text={text} className={`avatar-item ${className ? className : ''}`}>
		{icon && <div className={`avatar-item__icon ${!checked && 'active' }`}>
				<Icon 
					iconType={!checked ? icon : ''}
					onClick={() => {
						!checked && onIconClick(id)
					}}
				/>
			</div>
		}
	</UserListItem>
);

export default AvatarItem;