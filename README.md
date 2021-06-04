# ServerlessWebApp-AWS

Use Amazon S3 Bucket Static Website Hosting property to host your static website. 

Deploy an API Gateway for your application with GET, POST, and DELETE methods that integrate with a Lambda Function.

Store your data in a DynamoDB table. 

Create a Lambda Function to retrieve, put and delete data in your DynamoDB Table using the parameters coming from the API Gateway. 


In MappingTemplates/application/json
-
code for GET and DELETE

{ 
"email": "$input.params('email')" 
} 
