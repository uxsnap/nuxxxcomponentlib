/// <reference types="react" />
export interface InputSelectProps {
    value: string;
    onChange: (val: string) => void;
    rightIcon?: string;
    placeholder?: string;
    items?: Array<any>;
    Component: any;
    Stub: any;
    minLength: number;
    checked: Array<string>;
    checkedIcon?: string;
    className?: string;
    onFocus?: () => void;
    onBlur?: () => void;
    onRightIconClick?: () => void;
}
export declare const InputSelect: ({ value, onChange, rightIcon, placeholder, items, Component, Stub, minLength, checked, checkedIcon, className, onFocus, onBlur, onRightIconClick }: InputSelectProps) => JSX.Element;
export default InputSelect;
//# sourceMappingURL=InputSelect.d.ts.map