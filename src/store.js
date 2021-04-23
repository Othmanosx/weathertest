import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import userReducer from "./reducers/WeatherReducer"

const initialState = []

const store = createStore(userReducer, initialState, applyMiddleware(thunk))

export default store
