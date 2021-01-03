import { Dispatch } from 'react';
import { SET_LOADING, THomeAction } from './types';

export const setLoading = (loading: boolean) => (dispatch: Dispatch<THomeAction>) => {
    dispatch({
        type: SET_LOADING,
        loading: loading,
    });
};
