import React from 'react';

export interface IconProps {
  iconType: string;
  onClick?: () => void;
}

export const Icon = ({ iconType, onClick }: IconProps) => (
  <span
      onClick={onClick ? onClick : undefined}
      className={`iicon iicon-${iconType}`} />
);

export default Icon;