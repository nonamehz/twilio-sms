require('dotenv').config();
const cron = require('node-cron');
const createSMS = require('./sms');

console.log('Inició');

cron.schedule("50 16 * * *", function () {
    createSMS('Marcar Asistencia 💀');
});

cron.schedule("50 20 * * *", function () {
    createSMS('Marcar Salida 🐶');
});