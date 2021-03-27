import React from 'react';
export interface ErrorWrapperProps {
    className?: string;
    error?: any;
    children?: React.ReactNode;
    onClose: () => void;
    timeToElapse?: number;
}
export declare const ErrorWrapper: ({ className, error, children, onClose, timeToElapse }: ErrorWrapperProps) => JSX.Element;
export default ErrorWrapper;
