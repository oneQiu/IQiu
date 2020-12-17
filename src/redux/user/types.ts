export const SET_NAME = 'SET_NAME';
export type SET_NAME = typeof SET_NAME; // store类型

// action类型 ---------
interface TSetNameAction {
    type: SET_NAME;
    username: string;
}
export type TUserActionTypes = TSetNameAction;

// state -----------
export interface TUserState {
    username: string;
}
// action类型
export interface TAction {
    type: TUserActionTypes;
    data: Record<string, unknown>;
}
