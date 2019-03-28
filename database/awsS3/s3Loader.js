var AWS = require("aws-sdk");
var uuid = require("uuid");

AWS.config.loadFromPath('../../config.json')

const bucketName= 'staycloudphotobucket';

var samplePhoto= "SampleURL3";

var s3 = new AWS.S3();

var parameters={
        Bucket: bucketName, 
        Key: samplePhoto, 
        Body: "ListingID"
};

s3.upload(parameters, (err, data)=>{
  if(err){
    console.log("Err", err);
  } else {
    console.log("Success", data);
  }
})

// var photoBucketPromise= new AWS.S3({apiVersion : '2006-03-01'}).createBucket({Bucket : bucketName}).promise();


// photoBucketPromise.then(
//   (data)=>{
//     var parameters={
//       Bucket: bucketName, 
//       Key: samplePhoto, 
//       Body: "ListingID"
//     };
//     var uploadPromise= new AWS.S3({apiVersion : '2006-03-01'}).putObject(parameters).promise();
//     uploadPromise.then(
//       (data)=>{
//         console.log(`Successfully put data in ${bucketName}`)
//     });
// }).catch ((err) => {
//     console.log("Err", err);
// });
