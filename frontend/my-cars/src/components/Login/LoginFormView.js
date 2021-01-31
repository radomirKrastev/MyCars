import React from 'react';
import TextField from '@material-ui/core/TextField';
import { ErrorMessage } from 'formik';

const LoginFormView = (props) => (
    <form className="login-form" autoComplete="off">
        <div>
            <TextField
                required
                className="login-field"
                name="username"
                value={props.values.username}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                // id="register-email" 
                label="Username"
                error={props.errors.username && props.touched.username}
                margin="normal"
                variant="outlined"
            />
            <ErrorMessage name="username" component="div" className="invalid-field-message" />
        </div>

        <div>
            <TextField
                required
                className="login-field"
                name="password"
                type="password"
                value={props.values.password}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                // id="register-email"
                label="Password"
                error={props.errors.password && props.touched.password}
                margin="normal"
                variant="outlined"
            />
            <ErrorMessage name="password" component="div" className="invalid-field-message" />
        </div>
    </form>
);

export default LoginFormView;
