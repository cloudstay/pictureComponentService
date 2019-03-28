var AWS = require("aws-sdk");
var uuid = require("uuid");

AWS.config.loadFromPath('../../config.json')

const bucketName= 'staycloudphotobucket';

var samplePhoto= "SampleURL2";

var s3 = new AWS.S3();

s3.client



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
