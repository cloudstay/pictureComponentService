var AWS = require("aws-sdk");
var uuid = require("uuid");

var bucketName= staycloud-Listing-bucketName;

var samplePhoto= "SampleURL";

var photoBucketPromise= new AWS.S3({apiVersion : '2006-03-01'}).createBucket({Bucket : bucketName}).promise();


photoBucketPromise.then(
  (data)=>{
    var parameters={
      Bucket: bucketName, 
      Key: samplePhoto, 
      Body: "ListingID"}
  }
)