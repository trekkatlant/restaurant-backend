
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure

function sendMessage(phone, message) {
  const client = require('twilio')(
    process.env.ACCOUNT_SID,
    process.env.AUTH_TOKEN
  );
  
  client.messages
    .create({
       body: message,
       from: '+112562978741',
       to: phone
     })
    .then(message => {
      console.log(message.sid);
    })
    .catch(err => console.error(err));
}

module.exports = sendMessage;
