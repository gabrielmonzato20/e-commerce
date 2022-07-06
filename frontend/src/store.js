import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension"
import { productReducer ,productDetailReducer} from "./reducers/product.reducers"

const reducer = combineReducers({
    productlist:productReducer,
    productDetail:productDetailReducer,

})
const midleware = [thunk]
const initState = {};
const store = createStore(reducer,initState,composeWithDevTools(applyMiddleware(...midleware)))


export default store;