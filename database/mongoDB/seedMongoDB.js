var mongooose = require('mongoose');
const faker = require('faker');
mongooose.connect('mongodb://127.0.0.1:27017/photoCarousel');


var database = mongooose.connection;

database.once('open', ()=>{
  console.log('Database is connected');
});

var photoCarouselSchema = new mongooose.Schema({
  photoID: {
    type: String,
    required: true,
    maxlength: 7,
    minlength: 7
  }, 
  ListingID: {
    type: String,
    required: true,
    maxlength: 11,
    minlength: 11
  },
  photoURL: {
    type: String,
    required: true
  },
  photoDescription: {
    type: String,
    required: true
  }

});

var mokeDocument = function(ListingID, photoIndex) {
  //roomID is the value of the room in my s3 database
  //100-119: interior photos
  //120-139: Kitchen photos
  //140-159: bathroom photos
  //160-179: bedroom photos
  //180-200: house photos
  var roomID = Math.floor(Math.random() * 100) + 100;
  return {
    photoID: `${ListingID}_${photoIndex}`,
    ListingID: `Listing-${ListingID}`,
    photoURL: `https://s3-us-west-1.amazonaws.com/staycloudphotobucket/${roomID}-roomImage.jpg`,
    photoDescription: faker.lorem.sentences()
  };
};

var makeCollection = function(ListingID) {
  var ListingCollection = mongooose.model(`listing${ListingID}photo`, photoCarouselSchema);
  var seedDocuments = [];
  var photos = Math.floor(Math.random() * 20) + 100;
  for (var photoID = 100; photoID < photos; photoID++) {
    seedDocuments.push(mokeDocument(ListingID, photoID));
  }

  ListingCollection.insertMany(seedDocuments, (err)=>{
    if (err) {
      console.log(err);
    } else {
      if (ListingID === 105) {
        mongooose.connection.close();
      }
    }
  });
};

for (var i = 100; i < 200; i++ ) {
  makeCollection(i);
}