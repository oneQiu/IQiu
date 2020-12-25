import { SET_NAME, TUserAction } from './types';

export const setName = async (newName: string): Promise<TUserAction> => {
    const res = await newName;
    return {
        type: SET_NAME,
        username: res,
    };
};
