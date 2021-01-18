const admin = require('firebase-admin');
const { initDb } = require('../data/db');

const { DB_URL } = require('../constants/env');
const { initEmailService } = require('../services/emailService');
const { MAIL_USER, MAIL_PASSWORD } = process.env;

exports.initializeApplication = async () => {
    // Initialize mongodb
    await initDb(DB_URL);

    //TODO Initialize firebase admin
    admin.initializeApp({
        credential: admin.credential.applicationDefault(),
        databaseURL: 'https://my-cars-540ae.firebaseio.com'
    });

    initEmailService({username: MAIL_USER, password: MAIL_PASSWORD});
};
