import React from 'react';
import { Icon } from './index';

export interface ErrorWrapperProps {
  className?: string; 
  error?: any; 
  children?: React.ReactNode;
  onClose: () => void;
  timeToElapse?: number;
}

export const ErrorWrapper = ({ className, error, children, onClose, timeToElapse = 10000 }: ErrorWrapperProps) => {
	const { errors } = error;

	setTimeout(() => onClose(), timeToElapse);

	return (
		<div className={`error-wrapper ${className ? className : ''}`}>
      {error &&
  			<div className="error-box">
					<div className="error-box__title">Error</div>
					<div>
						{errors && (
							<ul className="error-box__list">
								{
									errors.map((error) => (
										<li>{error}</li>
									))
								}
							</ul>)
						}
					</div>
  				<Icon iconType="close" onClick={onClose}/>
  			</div>
      }
			{children}
		</div>
	);
};

export default ErrorWrapper;