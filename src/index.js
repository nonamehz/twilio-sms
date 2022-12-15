require('dotenv').config();
const cron = require('node-cron');
const createSMS = require('./sms');

console.log('Inició');

cron.schedule("50 21 * * *", function () {
    const hora = new Date().toUTCString();
    createSMS('Marcar Asistencia 💀');
    console.log('Marcado a las', hora);
});

cron.schedule("50 01 * * *", function () {
    const hora = new Date().toUTCString();
    createSMS('Marcar Salida 🐶');
    console.log('Marcado a las', hora);
});