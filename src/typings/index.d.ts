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
}

declare type TMenuData = Array<TMenuItem>;
