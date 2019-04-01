import Redux from "redux";

var currentWindowDimensions = (state = null, action)=>{
  if(action.type === 'CURRENT_DIMENSIONS'){
    return action.dimensions || null;
  } else {
    return state;
  }
}


export default currentWindowDimensions;