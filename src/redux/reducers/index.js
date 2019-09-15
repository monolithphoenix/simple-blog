import { combineReducers } from "redux";
import posts from "./getPostsList";

const rootReducer = combineReducers({
  posts
});

export default rootReducer;
