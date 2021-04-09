import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import RegisterFormView from './RegisterFormView';
import { register } from '../../actions/authActions';

import {
    validateRequiredFields,
    validateInputLength,
    validatePasswordEquality,
    validatePasswordRequirements,
} from '../../utils/formValidations';

import './Register.scss';

const Register = ({
    register
 }) => {
    return (
        <div className="register-page">
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    repeatPassword: '',
                }}
                validate={values => {
                    return {
                        ...validateRequiredFields(values, [
                            'username',
                            'password',
                            'repeatPassword',
                        ]),
                        ...validateInputLength(values, [
                            { property: 'username', maxFieldLength: 35 },
                            { property: 'password', maxFieldLength: 35 },
                        ]),
                        ...validatePasswordRequirements(values, 'password'),
                        ...validatePasswordEquality(values, 'password', 'repeatPassword')
                    }
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    register(values)
                }}
            >
                {(props) => <RegisterFormView {...props} />}
            </Formik>
        </div>
    );
};

const mapDispatchToProps = {
    register
};

export default connect(null, mapDispatchToProps)(Register);

