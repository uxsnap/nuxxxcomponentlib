import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Icon, UserItemList } from '.';

export interface UserListProps {
  icon?: string;
  items?: Array<any>;
  Component: React.ReactNode;
}

export const UserList = ({ icon, items, Component }: UserListProps) => {
  const [isActive, setActive] = useState(false);

  const toggleSetActive = () => setActive(!isActive);

  return (
    <OutsideClickHandler onOutsideClick={() => setActive(false)}>
      <div onClick={toggleSetActive} className="user-list">
        <div className="user-list__icon">
          <Icon iconType={icon ? icon : ''} />
        </div>
        <div className="user-list__counter">
          {items ? items.length > 9 ? '9+' : items.length : 0}
        </div>
        {isActive && <div className="user-list__list">
          <UserItemList items={items} Component={Component} />
        </div>}
      </div>
    </OutsideClickHandler>
  );
};

export default UserList;