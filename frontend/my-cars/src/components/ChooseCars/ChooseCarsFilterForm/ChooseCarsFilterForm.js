import React, { useState } from 'react';
import { connect } from 'react-redux';
import ChooseCarsFilterFormView from './ChooseCarsFilterFormView';
import { Formik } from 'formik';

// import { uploadCarAd } from '../../actions/userAcions';

import './ChooseCarsFilterForm.scss';

const ChooseCarsFilterForm = ({
    handleSearchCars
}) => {
    const [selectedCarMake, setSelectedCarMake] = useState('');

    const handleSelectCarMake = make => setSelectedCarMake(make);

    return (
        <Formik
            initialValues={{
                make: '',
                model: '',
                yearFrom: '',
                yearTo: '',
                minPrice: '',
                maxPrice: '',
            }}
            // validationSchema={loginSchemaValidation}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                handleSearchCars(values);
            }}
        >
            {(props) => <ChooseCarsFilterFormView selectedCarMake={selectedCarMake} handleSelectCarMake={handleSelectCarMake} {...props} />}
        </Formik>
    );
};

export default ChooseCarsFilterForm;
