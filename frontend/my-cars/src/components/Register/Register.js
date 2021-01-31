import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import RegisterFormView from './RegisterFormView';
import registerSchemaValidation from './RegisterSchemaValidation';
import { register } from '../../actions/authActions';

const Register = ({
    register
 }) => {
    return (
        <div >
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    repeatPassword: '',
                }}
                validationSchema={registerSchemaValidation}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    // let { email, password } = values;
                    // login(email.trim(), password.trim());
                    console.log(register);
                    register(values)
                    console.log(values)
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

