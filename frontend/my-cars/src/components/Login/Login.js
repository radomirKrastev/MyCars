import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import LoginFormView from './LoginFormView';
import { login } from '../../actions/authActions';

import { validateRequiredFields } from '../../utils/formValidations';

import './Login.scss';

const Login = ({ login }) => {
    return (
        <div className="login-page">
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                validate={values => {
                    return {
                        ...validateRequiredFields(values, [
                            'username',
                            'password',
                        ]),
                    }
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    const { username, password } = values;
                    login(username, password);
                }}
            >
                {(props) => <LoginFormView {...props} />}
            </Formik>
        </div>
    );
};

const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(Login);
