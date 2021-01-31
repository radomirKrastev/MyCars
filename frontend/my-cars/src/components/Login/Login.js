import React from 'react';
import { Formik } from 'formik';
import LoginFormView from './LoginFormView';
import loginSchemaValidation from './LoginSchemaValidation';

const Login = ({ }) => {
    return (
        <div >
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    repeatPassword: '',
                }}
                validationSchema={loginSchemaValidation}
                onSubmit={(values, { setSubmitting }) => {
                    // setSubmitting(false);
                    // let { email, password } = values;
                    // login(email.trim(), password.trim());
                    console.log(values)
                }}
            >
                {(props) => <LoginFormView {...props} />}
            </Formik>
        </div>
    );
};

export default Login;

