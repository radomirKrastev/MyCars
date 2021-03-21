const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');
const upload = require("express-fileupload");
require('./config/cloudinary')();
// const cloudinary = require('./config/cloudinary');

const { initializeApplication } = require('./config/init');
const { API_PORT } = require('./constants/env');

const port = process.env.PORT || API_PORT;

app.use(cors());
app.use(express.json());
app.use(upload({
    createParentPath: true
}));
app.use(routes);
// app.use(cloudinary);

initializeApplication()
    .then(() => {
        console.log('Successfully Initialized');
        app.listen(port, () => console.log(`App is running on port ${port} with HTTP protocol`));
    })
    .catch(err => console.error(`Unsuccessful Initialization: ${err}`));

