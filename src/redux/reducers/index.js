import { combineReducers } from "redux";

import authReducer from "./authReducers";
import appDataReducer from "./appDataReducer";
import categoriesReducer from "./categoriesReducer";

const reducersContainer = {
   authState: authReducer,
   appDataState: appDataReducer,
   categoriesState: categoriesReducer,
};

console.log("reducers container", reducersContainer);

const reducers = combineReducers(reducersContainer);

export default reducers;
