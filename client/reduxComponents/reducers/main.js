import {combineReducers} from 'redux';
import currentPhotos from "./currentPhotos.js";
import windowDimensions from "./windowDimensions.js";


var rootReducer = combineReducers({
  currentPhotos,
  windowDimensions
});

export default rootReducer;