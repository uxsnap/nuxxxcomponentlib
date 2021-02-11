import React from 'react';
import { UserListItem, Icon } from './index';

export const AvatarItem = ({ className, id, img, text, icon, onIconClick, checked }) => (
	<UserListItem img={img} text={text} className={`avatar-item ${className ? className : ''}`}>
		{icon && <div className={`avatar-item__icon ${!checked && 'active' }`}>
				<Icon 
					iconType={!checked ? icon : checked} 
					onClick={() => {
						!checked && onIconClick(id)
					}}
				/>
			</div>
		}
	</UserListItem>
);

export default AvatarItem;