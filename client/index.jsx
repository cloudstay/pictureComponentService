import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./reduxComponents/store/store.js";
import PictureContainer from "./reduxComponents/containers/PictureContainer.js";


ReactDOM.render( 
  <Provider store={store}>
    <PictureContainer />
  </Provider>,
document.getElementById("appHook"));