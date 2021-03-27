/// <reference types="react" />
export interface UserFilesProfileProps {
    className?: string;
    user?: any;
    onMouseEnter: (id: string, selector: string) => void;
    active: boolean;
}
export declare const UserFilesProfile: ({ className, user, onMouseEnter, active }: UserFilesProfileProps) => JSX.Element;
export default UserFilesProfile;
