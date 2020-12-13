import indexReducer from "./user"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
	index: indexReducer,
})
export default rootReducer
export type RootReducer = ReturnType<typeof rootReducer>
