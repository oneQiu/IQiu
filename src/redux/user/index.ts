import { TUserActionTypes, SET_NAME, TUserState } from "./types"

const initState: TUserState = {
	username: "",
}

// reducer对象化
const reducer = {
	[SET_NAME]: (state = initState, action: TUserActionTypes) => ({
		...state,
		username: action.username,
	}),
}

export default (state = initState, action: TUserActionTypes): TUserState => {
	const re = reducer[action.type]
	const newState = typeof re === "function" ? re(state, action) : state
	return newState
}
