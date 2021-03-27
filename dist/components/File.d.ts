/// <reference types="react" />
export interface FileProps {
    onDelete: () => void;
    filename: string;
    onEdit: (filename: string) => void;
}
export declare const File: ({ onDelete, filename, onEdit }: FileProps) => JSX.Element;
export default File;
//# sourceMappingURL=File.d.ts.map