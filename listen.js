var aws = require("aws-sdk");

const { Consumer } = require("sqs-consumer"); // For continous polling for message access

aws.config.loadFromPath(__dirname + "/config.json");
var sqs = new aws.SQS();

const queue = "https://sqs.ap-south-1.amazonaws.com/360501836003/queue"; // SQS queue URL from AWS

const app = Consumer.create({
    queueUrl: queue,
    handleMessage: async (message) => {
        console.log(JSON.parse(message.Body));
    },
    sqs,
});

app.on("error", (err) => {
    console.error(err.message);
});

app.on("processing_error", (err) => {
    console.error(err.message);
});

app.start();
