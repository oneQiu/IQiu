// type name -------
export const SET_NAME = 'SET_NAME';
export type SET_NAME = typeof SET_NAME; // store类型

export const SET_USERINFO = 'SET_USERINFO';
export type SET_USERINFO = typeof SET_USERINFO;

export type TUserActionType = SET_USERINFO | SET_NAME;

// action类型 ---------
export interface TSetNameAction {
    type: SET_NAME;
    username: string;
}
export interface TSetUserInfoAction {
    type: SET_USERINFO;
    userInfo: {
        username: string;
        gender: number;
    };
}

// state -----------
export interface TUserState {
    username: string;
    gender: number;
    avatarUrl?: string;
}

// 标准action类型
export type TUserAction = TSetNameAction | TSetUserInfoAction;
