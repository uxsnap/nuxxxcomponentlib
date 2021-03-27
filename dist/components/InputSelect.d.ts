/// <reference types="react" />
export interface InputSelect {
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
}
export declare const InputSelect: ({ value, onChange, rightIcon, placeholder, items, Component, Stub, minLength, checked, checkedIcon }: InputSelect) => JSX.Element;
export default InputSelect;
