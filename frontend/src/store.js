import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productReducer,
  productDetailReducer,
} from "./reducers/product.reducers";
import { userLoginReducer } from "./reducers/user.reducers.js";

import { carReducer } from "./reducers/car.reducers.js";

const reducer = combineReducers({
  productlist: productReducer,
  productDetail: productDetailReducer,
  car: carReducer,
  userLogin: userLoginReducer,
});
const midleware = [thunk];
const CarItemFromLocalStore = localStorage.getItem("carItems")
  ? JSON.parse(localStorage.getItem("carItems"))
  : [];
const UserItemFromLocalStore = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initState = {
  car: { carItems: CarItemFromLocalStore },
  userLogin: { userInfo: UserItemFromLocalStore },
};
const store = createStore(
  reducer,
  initState,
  composeWithDevTools(applyMiddleware(...midleware))
);

export default store;
