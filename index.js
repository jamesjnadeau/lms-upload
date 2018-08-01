var result = require('dotenv').config();

var AWS = require('aws-sdk');
var env = process.env;
console.log(process.env.AWS_ACCESS_KEY_ID);
AWS.config.update({
  accessKeyId: env.AWS_ACCESS_KEY_ID,
  secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
  region: env.AWS_REGION,
});

var uploader = require('s3-static-uploader');
var pathUtil = require('path');

var bucketName = 'yourjobpath-lms';
var bucket = new AWS.S3({ params: { Bucket: bucketName } });


 uploader.uploadDirectory(bucket, bucketName, pathUtil.join(__dirname, '../Training-test')).then(function(uploads) {
   console.log(uploads.length, 'uploaded');
 }).catch(function(err) {
   console.error(err);
 });
