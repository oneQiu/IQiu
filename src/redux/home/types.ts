// action type
export const SET_LOADING = 'SET_LOADING';
export type SET_LOADING = typeof SET_LOADING;

// action集合
export type THomeActionType = SET_LOADING;

// state
export interface THomeState {
    loading: boolean;
}

// action
export interface TSetLoadingAction {
    type: SET_LOADING;
    loading: boolean;
}

export type THomeAction = TSetLoadingAction;
