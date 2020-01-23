
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACaabb8c8dc3852f1bd25727bcf3e6078d';
const authToken = 'f839fdc1092ab07cc3d42092392b7409';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Order Recieved',
     from: '+13132215579',
     to: '+19178868762'
   })
  .then(message => console.log(message.sid));