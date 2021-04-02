import React, { useState } from 'react';
import { connect } from 'react-redux';
import FileUpload from '../Shared/FileUpload';
import SellCarFormView from './SellCarFormView';
import { Formik } from 'formik';

import { uploadCarAd } from '../../actions/carAcions';

const SellCar = ({
    userId,
    uploadCarAd,
}) => {
    const [selectedCarMake, setSelectedCarMake] = useState('');
    const [carImagesFiles, setCarImagesFiles] = useState({
        carImages: []
    });

    const handleSelectCarMake = make => setSelectedCarMake(make);

    const updateUploadedFiles = (files) =>
        setCarImagesFiles({ ...carImagesFiles, carImages: files });

    return (
        <div className="sell-car-page-wrapper">
            <Formik
                initialValues={{
                    make: '',
                    model: '',
                    year: '',
                    price: '',
                    description: ''
                }}
                // validationSchema={loginSchemaValidation}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);

                    const data = new FormData();

                    data.append('sellCarInfo', JSON.stringify({ ...values }));

                    carImagesFiles.carImages.forEach((file, i) => {
                        data.append(`carImageFile${i + 1}`, file);
                    });

                    uploadCarAd(userId, data);
                }}
            >
                {(props) => <SellCarFormView updateUploadedFiles={updateUploadedFiles} selectedCarMake={selectedCarMake} handleSelectCarMake={handleSelectCarMake} {...props} />}
            </Formik>

            {/* <FileUpload
                accept=".jpg,.png,.jpeg"
                label="Car images"
                multiple
                updateFilesCb={updateUploadedFiles}
            /> */}
        </div>
    );
};

const mapDispatchToProps = { uploadCarAd };

export default connect(null, mapDispatchToProps)(SellCar);