export type InitObject<value> = {
    [key in string | number]: value;
};
