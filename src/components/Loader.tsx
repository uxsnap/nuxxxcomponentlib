import React from 'react';

export interface LoaderProps {
	loader?: any;
}

export const Loader = ({ loader } : LoaderProps) => {
	return (
		<div className="loader">
			<img src={loader} alt="LOADER" />
		</div>
	);
}

export default Loader;