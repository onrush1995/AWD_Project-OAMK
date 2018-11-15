import "materialize-css/dist/css/materialize.min.css";
import { combineReducers } from "redux";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer
});
