import {legacy_createStore,applyMiddleware} from "redux"
import {reducer} from "./reducer"
import thunk from "redux-thunk"
//import { reducer } from "./reducer"



export const store=legacy_createStore(reducer,applyMiddleware(thunk))