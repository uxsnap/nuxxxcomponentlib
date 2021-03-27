import React from 'react';
export interface SideMenuProps {
    onIconClick?: () => void;
    children?: React.ReactNode;
    onActive: (active: boolean) => void;
}
declare const _default: ({ onIconClick, children, onActive }: SideMenuProps) => JSX.Element;
export default _default;
