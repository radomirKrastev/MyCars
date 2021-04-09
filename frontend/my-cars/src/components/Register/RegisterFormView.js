import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ErrorMessage } from 'formik';

const RegisterFormView = (props) => (
    <form className="register-form" autoComplete="off">
        <div>
            <TextField
                required
                className="register-field"
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
                className="register-field"
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

        <div>
            <TextField
                required
                className="register-field"
                name="repeatPassword"
                type="password"
                value={props.values.repeatPassword}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                label="Confirm Password"
                error={props.errors.repeatPassword && props.touched.repeatPassword}
                margin="normal"
                variant="outlined"
            />
            <ErrorMessage name="repeatPassword" component="div" className="invalid-field-message" />
        </div>

        <div className="register-buttons">
            <Button type="submit" variant="contained" color="primary" onClick={props.handleSubmit}>
                Register
            </Button>
            <Button variant="contained" color="primary" component={RouterLink} to="/login">
                Sign In
            </Button>
        </div>
    </form>
);

export default RegisterFormView;
