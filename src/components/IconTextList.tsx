import { IconText, NoInfo } from '.';
import React from 'react';

export interface IconTextListProps {
  className?: string;
  items?: Array<any>;
}

export const IconTextList = ({ className, items }: IconTextListProps) => {
  return (
    <ul className={`icon-text-list ${className ? className : ''}`}>
      { items && items.length ? items.map((item) => (
        <IconText {...item} />
      )) : <NoInfo />}
    </ul>
  );
};

export default IconTextList;