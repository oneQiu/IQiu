declare type InitObject<value> = {
    [key in string | number]: value;
};

interface TMenuItem {
    iconType: string;
    menuText: string;
    hasChild?: boolean;
    toPath?: string;
    children?: Array<TMenuItem>;
    key: string;
    disabled?: boolean;
}

declare type TMenuData = Array<TMenuItem>;

declare module '*.less';
declare module '*.md';
