import React from 'react';
import { File } from '../index';

export interface FileListProps {
	className?: string;
	items?: Array<any>;
	stub?: any;
	onDelete: (id: string) => void;
	onEdit: (id: string, fileName: string) => void;
}

export default ({ className, items, stub, onDelete, onEdit }: FileListProps) => (
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