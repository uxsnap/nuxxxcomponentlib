import React from "react";
export interface ButtonProps {
    className?: string;
    children?: React.ReactNode;
    type?: string;
    onClick: () => void;
}
export declare const Button: ({ className, children, type, onClick }: ButtonProps) => JSX.Element;
export default Button;
//# sourceMappingURL=Button.d.ts.map