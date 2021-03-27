/// <reference types="react" />
export interface FilesContextMenu {
    className?: string;
    onLoad: (id: string, text: string) => void;
    active: boolean;
    files: Array<any>;
    userId: string;
    onMouseLeave: (event: any) => void;
    status: string;
}
export declare const FilesContextMenu: ({ className, onLoad, active, files, userId, onMouseLeave, status }: FilesContextMenu) => JSX.Element;
export default FilesContextMenu;
