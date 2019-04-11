const mongooose = require('mongoose');
const photoCarouselSchema = require('./seedMongoDB.js');


function getCollection(ListingID, callback) {
  mongooose.connect('mongodb://mongo/photoCarousel');
  const ListingCollection = mongooose.model(`listing${ListingID}photo`, photoCarouselSchema.schema);
  ListingCollection.find({}, (err, listingDocuments) => {
    if (err) {
      callback(err);
    } else {
      callback(null, listingDocuments);
    }
  });
}


module.exports.getDBcollection = getCollection;
