/// <reference types="react" />
export interface FileListProps {
    className?: string;
    items?: Array<any>;
    stub?: any;
    onDelete: (id: string) => void;
    onEdit: (id: string, fileName: string) => void;
}
declare const _default: ({ className, items, stub, onDelete, onEdit }: FileListProps) => JSX.Element;
export default _default;
//# sourceMappingURL=FileList.d.ts.map