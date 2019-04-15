const request = require('request');

describe('Testing GET pathway', () => {
  test('Except get to return to be a string', (done) => {
    request('http://127.0.0.1:3006/rooms/api?id=104', (err, res, body) => {
      expect(typeof body).toBe('string');
      done();
    });
  });
  test('Except get to return with 200 ', (done) => {
    request('http://127.0.0.1:3006/rooms/api?id=104', (err, res, body) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });
  test('Except get to return to be parsable ', (done) => {
    request('http://127.0.0.1:3006/rooms/api?id=104', (err, res, body) => {
      const pictureArray = JSON.parse(body);
      expect(typeof pictureArray).toBe('object');
      done();
    });
  });
  test('Except get to parsed object to have correct ids ', (done) => {
    request('http://127.0.0.1:3006/rooms/api?id=104', (err, res, body) => {
      const pictureArray = JSON.parse(body);
      expect(pictureArray[0].photoID).toBe('104_100');
      expect(pictureArray[0].ListingID).toBe('Listing-104');
      done();
    });
  });
});
