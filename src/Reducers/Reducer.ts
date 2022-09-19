import { combineReducers } from "redux";
import { authReducer } from "./AuthReducer";
import { CounterReducer } from "./CounterReducer";

const rootReducer = combineReducers({
  isLogged: authReducer,
  Counter: CounterReducer,
});

export default rootReducer;
