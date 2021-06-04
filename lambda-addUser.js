var AWS = require('aws-sdk');
var docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    // TODO implement
    //console.log(event['body-json']);
    var tableName = 'Users';
    var params = {
        TableName: tableName,
        Item : event['body-json'].Item
    }
    
    
    // docClient.put(params).promise().then(res => res).catch(err => err);
    
    docClient.put(params, function(err, data){
        if(err){
            callback(err);
        }
        else{
            callback(null, "Successfully added customer data!");
        }
    });
};
