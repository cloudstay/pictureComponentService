const mongooose = require('mongoose');
const faker = require('faker');

mongooose.connect('mongodb://127.0.0.1:27017/photoCarousel');
const database = mongooose.connection;

const photoCarouselSchema = new mongooose.Schema({
  photoID: {
    type: String,
    required: true,
    maxlength: 7,
    minlength: 7,
    unique: true,
  },
  ListingID: {
    type: String,
    required: true,
    maxlength: 11,
    minlength: 11,
    unique: true,
  },
  photoURL: {
    type: String,
    required: true,
  },
  photoDescription: {
    type: String,
    required: true,
  },

});

function mokeDocument(ListingID, photoIndex) {
  // roomID is the value of the room in my s3 database
  // 100-119: interior photos
  // 120-139: Kitchen photos
  // 140-159: bathroom photos
  // 160-179: bedroom photos
  // 180-200: house photos
  const roomID = Math.floor(Math.random() * 100) + 100;
  return {
    photoID: `${ListingID}_${photoIndex}`,
    ListingID: `Listing-${ListingID}`,
    photoURL: `https://s3-us-west-1.amazonaws.com/staycloudphotobucket/${roomID}-roomImage.jpg`,
    photoDescription: faker.lorem.sentence(),
  };
}

function makeCollection(ListingID, callback) {
  const ListingCollection = mongooose.model(`listing${ListingID}photo`, photoCarouselSchema);
  const seedDocuments = [];
  const photos = Math.floor(Math.random() * 20) + 100;
  for (let photoID = 100; photoID < photos; photoID += 1) {
    seedDocuments.push(mokeDocument(ListingID, photoID));
  }

  ListingCollection.insertMany(seedDocuments, (err) => {
    if (err) {
      callback(err);
    } else if (ListingID === 199 || ListingID === 899) {
      callback(null, 'complete');
    }
  });
}

function seedDoc() {
  for (let i = 100; i < 200; i += 1) {
    makeCollection(i, (err) => {
      if (err) {
        database.close();
      } else {
        database.close();
      }
    });
  }
}

module.exports.seedDoc = seedDoc;
module.exports.schema = photoCarouselSchema;
module.exports.mokeDocument = mokeDocument;
module.exports.database = database;
module.exports.makeCollection = makeCollection;
