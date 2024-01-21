import { legacy_createStore } from "redux";
import { reducer } from "./Reducers/reducer";
import {combineReducers} from "redux"
import { todoReducer } from "./Reducers/todoReducer";

const rootReducer = combineReducers({todoReducer,reducer})

export const store = legacy_createStore(rootReducer);
