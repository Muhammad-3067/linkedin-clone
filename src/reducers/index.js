import { combineReducers } from "redux";

import userReducer from "./userReducer";
import articleReducers from "./articleReducers";

const rootReducer = combineReducers({
  userState: userReducer,
  articleState: articleReducers,
});

export default rootReducer;
