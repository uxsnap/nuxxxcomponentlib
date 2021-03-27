import React from 'react';
// @ts-ignore
import loader from '../loader.gif';

export const Loader = () => {
	return (
		<div className="loader">
			<img src={loader} alt="LOADER" />
		</div>
	);
}

export default Loader;