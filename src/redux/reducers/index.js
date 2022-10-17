import { combineReducers } from "redux";

import authReducer from "./authReducers";

const reducers = combineReducers({
   authState: authReducer,
});

export default reducers;
