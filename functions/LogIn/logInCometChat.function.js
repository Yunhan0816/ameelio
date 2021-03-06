const functions = require("firebase-functions");
const rp = require('request-promise');


module.exports.logInCometChat = functions.https.onCall((data, context) => {
    console.log('the data is ', data);

    var options = {
        method: 'POST',
        url: `https://api-us.cometchat.io/v2.0/users/${data.uid.toLowerCase()}/auth_tokens`,
        headers: {
            appid: '11033fd257dda26',
            apikey: '666dfb04a6f6d3b31ba2c535c0a3f59570c7ecb7',
            'content-type': 'application/json',
            accept: 'application/json'
        }
    };
    return rp(options);
});