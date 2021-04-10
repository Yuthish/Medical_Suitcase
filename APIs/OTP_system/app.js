const express = require('express');
// var fast2sms = require('fast2sms');
const axios = require('axios');
const app = express();
require('dotenv').config();
var options = {
    API_KEY: process.env.API_KEY
};



app.get('/send_otp/:OTP/:ph', (req, res) => {
    let premessage = "Greetings from Medical Suitcase,\nYour One Time Password (OTP) is "
    AUTHORIZATION = 'QMH1fqoAdV7F8hGJpi9OKnabLCkSr6xszXwYtW5vy02mB4NIRllR3ShtaW5VZ8YoNFkBIQDXrq0KA27m'
    axios.get("https://www.fast2sms.com/dev/bulkV2?authorization="+AUTHORIZATION+"&route=q&message="+premessage+ req.params['OTP'] + "&language=english&flash=0&numbers="+req.params['ph'])
        .then(function (response) {
            res.send(response['status'])
            // console.log(response['status']);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
});

app.listen(process.env.PORT || 5000, () => console.log('SMS Service Listening on PORT 5000'))