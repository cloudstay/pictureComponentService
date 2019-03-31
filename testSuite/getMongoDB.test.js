const mongooose = require("mongoose");
const getMongo = require("../database/mongoDB/getMongoDB")
test('Expect Database to give Listing with first photoID equal to 899_100', async(done) => {
  const data= await getMongo.getDBcollection(899, (err, data)=>{
    if(err){
      throw err;
    } else {
      expect(data.length).toBeGreaterThanOrEqual(1);
      expect(data[0].photoID).toBe("899_100");
      expect(data[0].ListingID).toBe("Listing-899");
      done();
    }
  })
});
