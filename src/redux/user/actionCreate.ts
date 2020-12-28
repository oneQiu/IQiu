import { Dispatch } from 'react';
import { SET_NAME, TUserAction } from './types';

export const setName = (newName: string) => (dispatch: Dispatch<TUserAction>) => {
    console.log(newName);
    dispatch({
        type: SET_NAME,
        username: newName,
    });
};
