import Redux from "redux";


var currentPhotoReducer = (state = null, action) =>{
  if(action.type === 'GET_PHOTOS'){
    return action.photos || null;
  } else {
    return state;
  }
}

export default currentPhotoReducer;