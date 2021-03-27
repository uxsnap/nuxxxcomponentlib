import React from 'react';
export interface LazyRenderProps {
    status: string | number;
    children?: React.ReactNode;
    error?: any;
}
export declare const LazyRender: ({ status, children, error }: LazyRenderProps) => any;
export default LazyRender;
