import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import RootReducer from "../reducers/main.js";


export default createStore(RootReducer, {
  photos : null,
  dimensions : {
    height : window.innerHeight,
    width : window.innerWidth
  }
}, applyMiddleware(thunk));