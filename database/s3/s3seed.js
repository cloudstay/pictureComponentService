const request = require("request");
const fs= require("fs");
const Promise = require("bluebird");

Promise.promisifyAll(request);
Promise.promisifyAll(fs);

var keyword=`interior`;
//create a random photo from unsplash based on keyword given
var getNewunsplash= function(imageCount, keyword){
  request(`https://source.unsplash.com/random/800x600/?${keyword}`)
    .pipe(fs.createWriteStream(`./media/${imageCount}-roomImage.jpg`));
}

for(var i =100; i< 201; i++){
  if(i >= 120 && i < 140){
    keyword='kitchen';
  } else if ( i >= 140 && i < 160){
    keyword='bathroom';
  } else if (i >= 160 && i < 180){
    keyword=`house`;
  } else {
    keyword=`bedroom`;
  }
  getNewunsplash(i, keyword);
}