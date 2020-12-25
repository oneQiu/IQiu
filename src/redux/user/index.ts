import { SET_NAME, TUserState, TUserAction, SET_USERINFO } from './types';

const initState: TUserState = {
    username: '',
    gender: 0,
};

export default (state = initState, action: TUserAction): TUserState => {
    switch (action.type) {
        case SET_NAME:
            return { ...state, username: action.username };
        case SET_USERINFO:
            return { ...state, ...action.userInfo };
        default:
            return state;
    }
};
