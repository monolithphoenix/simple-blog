import { combineReducers } from "redux";
import posts from "./getPostsReducer";

const rootReducer = combineReducers({
  posts
});

export default rootReducer;
