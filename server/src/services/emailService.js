const nodemailer = require('nodemailer');
const emailConfig = require('../config/email');

let transporter;

const initEmailService = async credentials => {
    transporter = nodemailer.createTransport({
        host: emailConfig.email.host,
        port: emailConfig.email.port,
        secure: emailConfig.email.secure,
        auth: {
            user: credentials.username,
            pass: credentials.password
        }
    });
};

module.exports = {
    initEmailService,
};
