var aws = require("aws-sdk");
aws.config.loadFromPath(__dirname + "/config.json"); // Load AWS Access key and Secret Access Key

var sqs = new aws.SQS(); // Creating a SQS Client

const queue = "https://sqs.ap-south-1.amazonaws.com/360501836003/queue"; // SQS queue URL from AWS

const data = { name: "sanket" }; // Any Data which we want to send as

var params = {
    MessageBody: JSON.stringify(data),
    QueueUrl: queue,
    DelaySeconds: 0,
};

// Sending Message
sqs.sendMessage(params, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
