import { SET_NAME, TUserActionTypes } from './types';

export const setName = async (newName: string): Promise<TUserActionTypes> => {
    const res = await newName;
    return {
        type: SET_NAME,
        username: res,
    };
};
