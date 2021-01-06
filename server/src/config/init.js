const admin = require('firebase-admin');
const { initDb } = require('../data/db');

const { DB_URL } = require('../constants/env');

exports.initializeApplication = async () => {
    // Initialize mongodb
    await initDb(DB_URL);

    //TODO Initialize firebase admin
};
