import React from 'react';

export interface RoundedInitialsProps {
  className?: string;
  name?: string;
}

export const RoundedInitials = ({ className, name }: RoundedInitialsProps) => (
  <div className={`rounded-initials ${className ? className : ''}`}>
    <span>{name ? name[0].toUpperCase() : ''}</span>
  </div>
);

export default RoundedInitials;
