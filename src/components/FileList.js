import React from 'react';
import { File } from './index';

export default ({ className, items, stub, onDelete, onEdit }) => (
	<div className={`file-list ${className ? className : ''}`}>
		{items && items.length
			? items.map((item) => (
				<File 
					filename={item.name}
					onDelete={() => onDelete(item.id)}
					onEdit={(fileName) => onEdit(item.id, fileName)}
				/>
			)) : stub ? stub : ''
		}
	</div>	
)