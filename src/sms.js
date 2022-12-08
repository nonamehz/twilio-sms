const twilio = require('twilio');
const {
    accountSID,
    authToken,
    phoneNumber,
    twilioPhoneNumber
} = require('../config/config');


const client = new twilio(accountSID, authToken);

const createSMS = async (body = '') => {
    await client.messages.create({
        body,
        to: phoneNumber,
        from: twilioPhoneNumber
    });
}


module.exports = createSMS;