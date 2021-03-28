const carsData = require('../data/carsData');
const cloudinary = require('cloudinary').v2;

const uploadPictures = async (files) => {
    const uploadedImagesPromise = [];

    Object.keys(files).forEach(key => {
        uploadedImagesPromise.push(new Promise((resolve, reject) => {
            files[key].data.toString('base64');
            cloudinary.uploader.upload_stream({ resource_type: 'image' }, (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            }).end(files[key].data)
        }));
    });

    return uploadedImagesPromise;
};


module.exports = {
    uploadPictures,
};
