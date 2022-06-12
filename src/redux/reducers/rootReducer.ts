import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { pageReducer } from "./page/pageReducer";

export const rootReducer = combineReducers({
    pageReducer,
    authReducer
});