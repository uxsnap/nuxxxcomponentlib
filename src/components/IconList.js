import React from 'react';
import { generateKey } from './index';
import { Icon } from './index';

export default ({ className, items, stub }) => (
 	<div className={`icon-list ${className}`}>
 		<ul className="icon-list__list">
 			{items.length 
 				? items.map((item, ind) => (
 					<li key={generateKey()} className="icon-list__item">
 						<Icon iconType={item.icon} onClick={item.onClick} />
 						{item.label ? <span className="icon-list__info">{item.label}</span> : ''}
 					</li>
 				))
 				: stub ? stub : ''
 			}
 		</ul>
 	</div>
);