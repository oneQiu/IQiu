import userReducer from './user';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    userInfo: userReducer,
});
export default rootReducer;
export type RootReducer = ReturnType<typeof rootReducer>;
