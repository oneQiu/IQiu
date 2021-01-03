import { SET_LOADING, THomeState, TSetLoadingAction } from './types';

const initState: THomeState = {
    loading: false,
};

export default (state = initState, action: TSetLoadingAction): THomeState => {
    switch (action.type) {
        case SET_LOADING:
            state.loading = action.loading;
            return state;
        default:
            return state;
    }
};
