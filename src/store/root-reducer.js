// CORE
import { combineReducers } from "redux";
// REDUCERS
import { photosReducer} from "./reducers/usersReducer";

export const rootReducer = combineReducers({
  photosReducer,
});
