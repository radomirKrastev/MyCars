const adData = require('../data/adData');

const createAd = adInfo => adData.create(adInfo);

module.exports = {
    createAd,
};
