import React from 'react';
import { RES_STATUS } from "../index";
import { Loader } from "../index";

export interface LazyRenderProps {
  status: string | number;
  children?: React.ReactNode;
  error?: any;
}

export const LazyRender = ({ status, children, error = 'Error' }: LazyRenderProps) => {
  return status === RES_STATUS.LOADING
    ? <Loader />
    : status === RES_STATUS.ERROR
    ? error
    : children;
};

export default LazyRender;