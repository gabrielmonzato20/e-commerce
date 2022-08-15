import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productReducer,
  productDetailReducer,
} from "./reducers/product.reducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailReducer,
  userUpdateProfileReducer,
} from "./reducers/user.reducers.js";

import { carReducer } from "./reducers/car.reducers.js";

const reducer = combineReducers({
  productlist: productReducer,
  productDetail: productDetailReducer,
  car: carReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetail: userDetailReducer,
  userUpdateProfile: userUpdateProfileReducer,
});
const midleware = [thunk];
const CarItemFromLocalStore = localStorage.getItem("carItems")
  ? JSON.parse(localStorage.getItem("carItems"))
  : [];
const UserItemFromLocalStore = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};
const initState = {
  car: {
    carItems: CarItemFromLocalStore,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: UserItemFromLocalStore },
};
const store = createStore(
  reducer,
  initState,
  composeWithDevTools(applyMiddleware(...midleware))
);

export default store;
