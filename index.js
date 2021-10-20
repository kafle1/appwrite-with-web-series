//Grab the variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const senderPhone = process.env.TWILIO_NUMBER;

//Import twilio
const client = require("twilio")(accountSid, authToken);

//Fetch input data  (Must be provided to run the function)
const payload = JSON.parse(process.env.APPWRITE_FUNCTION_DATA);
const receiver = payload["receiver"];
const message = payload["message"];

if (!receiver) console.error("Receiver's phone number is required!");
if (!message) console.error("Message content is required!");

//Send message to the receiver
client.messages
  .create({
    from: senderPhone,
    to: receiver,
    body: message,
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
