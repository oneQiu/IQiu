import { createStore, compose, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
// 引入reducers
import Reducers from "./reducers"

// 创建日志
const logger = createLogger()
const composeEnhancers =
	(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
	Reducers,
	composeEnhancers(applyMiddleware(logger, thunk))
)
