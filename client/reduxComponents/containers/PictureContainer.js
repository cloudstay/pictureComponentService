import React from "react";
import  Picturecontainer from "../../components/PictureContainer.jsx";
import { connect } from "react-redux";
import windowDimensions from "../actions/windowDimensions.js";


var mapStateToProps = (state) =>({
  dimensions : state.dimensions
});


var PictureContainer = connect(mapStateToProps, null)(Picturecontainer);

export default PictureContainer;