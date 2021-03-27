 import { NoInfo } from '../index';
 import React from 'react';

export interface UserItemListProps {
  Component: any;
  items?: Array<any>;
}

export const UserItemList = ({ Component, items }: UserItemListProps) => {
  return (
    <ul className="user-item-list">
      { items && items.length ? items.map((item) => (
        <Component {...item} />
      )) : <NoInfo />}
    </ul>
  );
};

export default UserItemList;