import React from 'react';
import { UserListItem, IconList } from './index';

export interface UserRequestItemProps {
  className?: string;
  img: string;
  text: string;
  icons?: Array<any>;
}

export const UserRequestItem = ({ className, img, text, icons }: UserRequestItemProps) => (
  <UserListItem img={img} text={text} className={`user-request-item ${className ? className : ''}`}>
    {icons && 
      <div className="user-request-item__icons">
        <IconList items={icons} />  
      </div>
    }
  </UserListItem>
);

export default UserRequestItem;