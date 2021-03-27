import React from 'react';
import { AvatarItem } from './index';

export interface UserFilesProfileProps {
  className?: string;
  user?: any;
  onMouseEnter: (id: string, selector: string) => void;
  active: boolean;
}

export const UserFilesProfile = ({ className, user, onMouseEnter, active }: UserFilesProfileProps) => {
  const currentUserSelector = `user-files__user_${user.id}`;
  const innerOnMouseEnter = (e) => {
    onMouseEnter(user.id, currentUserSelector);
    e.stopPropagation();
  }
  return (
    <div
      onMouseEnter={innerOnMouseEnter}
      className={`user-files ${className ? className : ''} ${active ? 'active' : ''}`}
    >
      <div className={`user-files__user ${currentUserSelector}`}>
        <AvatarItem {...user} />
      </div>
    </div>
  )
};

export default UserFilesProfile;