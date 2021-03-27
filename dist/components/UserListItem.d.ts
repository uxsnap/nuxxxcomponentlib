import React from 'react';
export interface UserListItemProps {
    className?: string;
    img?: string;
    text: string;
    children?: React.ReactNode;
}
export declare const UserListItem: ({ className, img, text, children }: UserListItemProps) => JSX.Element;
export default UserListItem;
