import { combineReducers } from "redux";
import authReducer from "src/redux/slices/authSlice";

export default combineReducers({
  auth: authReducer,
});
