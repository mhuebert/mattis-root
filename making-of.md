# Confirm figwheel workflow works

# Install AWS for JS SDK

custom build: 
http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/browser-building.html

git clone git://github.com/aws/aws-sdk-js
cd aws-sdk-js
git checkout v2.1.36
npm install
MINIFY=1 node dist-tools/browser-builder.js s3,dynamodb,lambda,cognitoidentity,sts > aws-sdk.js

# Create a Cognito identity pool

# Create a DynamoDB table

# Set up a Google Client ID


instructions: https://blogs.aws.amazon.com/security/post/Tx3LP54JOGBE0AY/Building-an-App-using-Amazon-Cognito-and-an-OpenID-Connect-Identity-Provider
https://console.developers.google.com

Understanding Cognito Authentication: 
  http://mobile.awsblog.com/post/Tx2UQN4KWI6GDJL/Understanding-Amazon-Cognito-Authentication

Configuring federated auth in the browser
  http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/browser-configuring-wif.html


# Creating roles based on user params
http://docs.aws.amazon.com/STS/latest/UsingSTS/web-identity-federation.html#web-identity-federation-roles

# Get the unique ID of a user when they have signed in
http://mobile.awsblog.com/post/TxBVEDL5Z8JKAC/Use-Amazon-Cognito-in-your-website-for-simple-AWS-authentication

# Web Identity Federation Playground
https://web-identity-federation-playground.s3.amazonaws.com/index.html