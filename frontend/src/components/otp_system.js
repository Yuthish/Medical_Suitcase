const axios = require('axios');


const gen_otp = () => {
    return Math.floor(1000 + Math.random() * 9000)

};

const send_otp = (otp, ph, BASE_URL) => {
    let premessage = "Greetings from Medical Suitcase,\nYour One Time Password (OTP) is "
    let AUTHORIZATION = 'QMH1fqoAdV7F8hGJpi9OKnabLCkSr6xszXwYtW5vy02mB4NIRllR3ShtaW5VZ8YoNFkBIQDXrq0KA27m'
    if (BASE_URL == "") BASE_URL = "https://med-sui-otp.herokuapp.com/";
    URL = BASE_URL + "/send_otp/" + otp + "/" + ph;
    axios.get("https://www.fast2sms.com/dev/bulkV2?authorization="+AUTHORIZATION+"&route=q&message="+premessage+ otp + "&language=english&flash=0&numbers="+ph)
        .then((result) => {
            return "sms sent";
        }).catch((err) => {
            return "error";
        });
};


const validate_otp = (otp, input) => {
    if (otp == input) return true;
    else return false;
}



module.exports = {
    gen_otp,
    send_otp,
    validate_otp
};