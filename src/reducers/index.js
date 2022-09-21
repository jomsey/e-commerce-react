import { combineReducers } from "redux";
import cartItemsCount from "./cartCount";

const reducers = combineReducers({ cartNumber: cartItemsCount });

export default reducers;
