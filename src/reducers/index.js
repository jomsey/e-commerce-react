import { combineReducers } from "redux";
import cartItemsCount from "./cartCount";
import userAuthenticated from "./userAuthenticated";

const reducers = combineReducers({
  cartNumber: cartItemsCount,
  authenticated: userAuthenticated,
});

export default reducers;
