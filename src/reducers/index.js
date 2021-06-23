import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import favoriteReducer from "./favoriteReducer";

const rootReducer = combineReducers({
  favoriteReducer,
  movieReducer,
});

export default rootReducer;
