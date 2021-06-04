const AWS = require('aws-sdk');
var docClient = new AWS.DynamoDB.DocumentClient();

var tableName = "Customers" // Put your Table Name Here

exports.handler = async (event) => {
    console.log(event.email)
    
    var params = {
        TableName: tableName,
        Key: {
            email: event.email
        }
    };
    return docClient.delete(params).promise().then(res => res).catch(err => err);
    
};