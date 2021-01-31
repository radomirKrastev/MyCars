import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import LoginFormView from './LoginFormView';
import loginSchemaValidation from './LoginSchemaValidation';
import { login } from '../../actions/authActions';

const Login = ({ login }) => {
    return (
        <div >
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                validationSchema={loginSchemaValidation}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    let { username, password } = values;
                    login(username, password);
                    console.log(values)
                }}
            >
                {(props) => <LoginFormView {...props} />}
            </Formik>
        </div>
    );
};

const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(Login);
