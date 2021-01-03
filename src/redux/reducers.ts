import userReducer from './user';
import homeReducer from './home';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    userInfo: userReducer,
    home: homeReducer,
});
export default rootReducer;
export type RootReducer = ReturnType<typeof rootReducer>;
