var windowDimensions = (dimensions) =>({
  type : 'CURRENT_DIMENSIONS',
  dimensions : {
    height : dimensions.height,
    width : dimensions.width
  }
})

export default windowDimensions;