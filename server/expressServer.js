const express = require('express');
const bodyParser = require('body-parser');
const getDB = require('../database/mongoDB/getMongoDB.js');

const app = express();


const port = 3006;

// app set at localhost:3006/rooms?id=XXX
app.use('/rooms/', express.static('public'));

// use of body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// get request based on room number
app.get('/rooms/api', (req, res) => {
  getDB.getDBcollection(req.query.id, (err, photoDocuments) => {
    if (err) {
      res.status(404);
      res.end();
    } else {
      res.status(200);
      res.end(JSON.stringify(photoDocuments));
    }
  });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Listening on ${port}`);
  });
}


module.exports = app;
