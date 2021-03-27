import React from 'react';
import {checkClass} from "./index";

export interface NoInfoProps {
  className?: string;
  children?: any;
  style?: any;
}

export const NoInfo = ({ className, children, style }: NoInfoProps) => (
  <div className={checkClass('no-info', className)} style={style}>
    {children ? children : "No information"}
  </div>
)

export default NoInfo;