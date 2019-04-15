const mongooose = require('mongoose');
const Promise = require('bluebird');
const getMongo = require('../database/mongoDB/getMongoDB');
const seedMongo = require('../database/mongoDB/seedMongoDB.js');


test('Expect Database to give Listing with first photoID equal to 199_100', (done) => {
  getMongo.getDBcollection(199, (err, data) => {
    if (err) {
      throw err;
    } else {
      expect(data.length).toBeGreaterThanOrEqual(1);
      expect(data[0].photoID).toBe('199_100');
      expect(data[0].ListingID).toBe('Listing-199');
      done();
    }
  });
});
