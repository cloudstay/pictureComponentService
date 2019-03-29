var mongooose = require('mongoose');

mongooose.connect("mongodb://127.0.0.1:27017/photoCarousel");


var database= mongooose.connection;

database.once('open', ()=>{
  console.log("Database is connected");
})

var photoCarouselSchema = new mongooose.Schema({
  photoID : {
    type : String ,
    required : true,
    maxlength : 7,
    minlength : 7
  }, 
  roomID : {
    type : String,
    required : true,
    maxlength : 3,
    minlength : 3
  },
  photoURL : {
    type : String,
    required : true
  },
  photoDescription : {
    type : String,
    required : true
  }

})


var makeCollection= function(){};