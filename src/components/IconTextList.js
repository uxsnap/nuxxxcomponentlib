import { IconText, NoInfo } from '.';
import React from 'react';

export const IconTextList = ({ className, items }) => {
  return (
    <ul className={`icon-text-list ${className ? className : ''}`}>
      { items && items.length ? items.map((item) => (
        <IconText {...item} />
      )) : <NoInfo />}
    </ul>
  );
};

export default IconTextList;