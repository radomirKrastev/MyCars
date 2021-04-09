import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
                label="Password"
                error={props.errors.password && props.touched.password}
                margin="normal"
                variant="outlined"
            />
            <ErrorMessage name="password" component="div" className="invalid-field-message" />
        </div>

        <div className="login-buttons">
            <Button type="submit" variant="contained" color="primary" onClick={props.handleSubmit}>
                Sign in
            </Button>

            <Button type="submit" variant="contained" color="primary" component={RouterLink} to="/register">
                Register
            </Button>
        </div>
    </form>
);

export default LoginFormView;
