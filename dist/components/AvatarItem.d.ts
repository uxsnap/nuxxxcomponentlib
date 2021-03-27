/// <reference types="react" />
export interface AvatarItemProps {
    className?: string;
    id: string;
    img: string;
    text: string;
    icon?: string;
    onIconClick: (id: string) => void;
    checked: boolean;
}
export declare const AvatarItem: ({ className, id, img, text, icon, onIconClick, checked }: AvatarItemProps) => JSX.Element;
export default AvatarItem;
//# sourceMappingURL=AvatarItem.d.ts.map