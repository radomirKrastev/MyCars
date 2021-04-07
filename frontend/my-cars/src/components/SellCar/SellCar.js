import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SellCarFormView from './SellCarFormView';
import { Formik } from 'formik';

import { uploadCarAd, updateCarOffer } from '../../actions/carAcions';

import {
    validateRequiredFields,
    validateDecimalNumbers,
    validateInputLength
} from '../../utils/formValidations';

const SellCar = ({
    userId,
    isEditMode,
    carInfo,
    uploadCarAd,
    updateCarOffer,
}) => {
    const [selectedCarMake, setSelectedCarMake] = useState(carInfo ? carInfo.make : '');
    const [carImagesFiles, setCarImagesFiles] = useState({
        carImages: []
    });

    const history = useHistory();

    const handleSelectCarMake = make => setSelectedCarMake(make);

    const updateUploadedFiles = (files) =>
        setCarImagesFiles({ ...carImagesFiles, carImages: files });

    return (
        <div className="sell-car-form-wrapper">
            <Formik
                initialValues={{
                    make: carInfo ? carInfo.make : '',
                    model: carInfo ? carInfo.model : '',
                    year: carInfo ? carInfo.year : '',
                    price: carInfo ? carInfo.price : '',
                    description: carInfo ? carInfo.description : ''
                }}
                validate={values => {
                    return {
                        ...validateRequiredFields(values, [
                            'make',
                            'model',
                            'year',
                            'price',
                            'description',
                        ]),
                        ...validateDecimalNumbers(values, ['price']),
                        ...validateInputLength(values, [
                            { property: 'description', maxFieldLength: 3000 },
                        ]),
                    }
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    const data = new FormData();

                    data.append('sellCarInfo', JSON.stringify({ ...values }));

                    carImagesFiles.carImages.forEach((file, i) => {
                        data.append(`carImageFile${i + 1}`, file);
                    });

                    if (isEditMode) {
                        updateCarOffer(userId, carInfo._id, data);
                        history.push('/my-car-ads');
                    } else {
                        uploadCarAd(userId, data);
                    }
                }}
            >
                {(props) => <SellCarFormView
                    updateUploadedFiles={updateUploadedFiles}
                    selectedCarMake={selectedCarMake}
                    handleSelectCarMake={handleSelectCarMake}
                    isEditMode={isEditMode}
                    {...props} />
                }
            </Formik>
        </div>
    );
};

const mapDispatchToProps = { uploadCarAd, updateCarOffer };

export default connect(null, mapDispatchToProps)(SellCar);