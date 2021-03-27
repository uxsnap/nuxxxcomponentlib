/// <reference types="react" />
export interface InputProps {
    id?: string;
    label?: string;
    type?: string;
    value: string;
    onChange: (value: string) => void;
    className?: string;
    placeholder?: string;
    rightIcon?: string;
    onRightIconClick?: () => void;
}
export declare const Input: ({ id, label, type, value, onChange, className, placeholder, rightIcon, onRightIconClick }: InputProps) => JSX.Element;
export default Input;
//# sourceMappingURL=Input.d.ts.map