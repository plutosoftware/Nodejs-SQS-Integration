# Node JS Integration with SQS

For Microservices Architecture, one of the most important component to decouple multiple services id the Messaging Queue. AWS SQS is one such example of messaging queue which can be used for this purpose.

In this Repository we have used NODE JS for Communicating with SQS. SQS Doesn't listen for incoming messages continously by default. We have to use either short continous polling or long polling.

For this purpose, in this repository, with example it is shown how we can use it for continous polling of messages, with simple easy to use interface.

# AWS SQS :

SQS which stands for Simple Queue Service, if one of the best product of Amazon Web Services which is very helpful when we have to scale our architecture. It supports two types of queues, 1) Standred, 2) FIFO.

In Cases where ordering is not important we can go for `Standred` and where it is important we can use `FIFO`. For this example, `Standred` queue is used.

# How to run :

1. Run the listener service, to listen for messages : `node listen.js`
2. Run the publisher service, to publish messages : `node publish.js`
