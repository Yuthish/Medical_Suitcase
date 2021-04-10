const axios = require('axios');


const gen_otp = () => {
    return Math.floor(1000 + Math.random() * 9000);

};

const send_otp = (otp, ph, BASE_URL) => {
    if (BASE_URL == "") BASE_URL = "https://med-sui-otp-send.herokuapp.com";
    URL = BASE_URL + "/send_otp/" + otp + "/" + ph;
    axios.get(URL)
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