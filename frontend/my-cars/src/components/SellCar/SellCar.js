import React, { useState } from 'react';
import { connect } from 'react-redux';
import FileUpload from '../Shared/FileUpload';
import SellCarFormView from './SellCarFormView';
import { Formik } from 'formik';

import { uploadCarAd } from '../../actions/userAcions';

const SellCar = ({
    userId,
    uploadCarAd,
}) => {
    const [carImagesFiles, setCarImagesFiles] = useState({
        carImages: []
    });

    const updateUploadedFiles = (files) =>
        setCarImagesFiles({ ...carImagesFiles, carImages: files });

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     //logic to create new user...
    // };

    return (
        <div>
            {/* <form onSubmit={handleSubmit}>
                <FileUpload
                    accept=".jpg,.png,.jpeg"
                    label="Profile Image(s)"
                    multiple
                    updateFilesCb={updateUploadedFiles}
                />
                <button type="submit">Create New User</button>
            </form> */}

            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                // validationSchema={loginSchemaValidation}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    // console.log('submit', values, carImagesFiles, userId);

                    const data = new FormData();

                    data.append('sellCarInfo', JSON.stringify({ ...values }));

                    carImagesFiles.carImages.forEach((file, i) => {
                        data.append(`carImageFile${i + 1}`, file);
                    });

                    uploadCarAd(userId, data);
                }}
            >
                {(props) => <SellCarFormView {...props} />}
            </Formik>

            <FileUpload
                accept=".jpg,.png,.jpeg"
                label="Car images"
                multiple
                updateFilesCb={updateUploadedFiles}
            />
        </div>
    );
};

const mapDispatchToProps = { uploadCarAd };

export default connect(null, mapDispatchToProps)(SellCar);