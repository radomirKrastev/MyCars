import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import { ErrorMessage } from 'formik';
// import FieldError from 'components/Shared/FieldError';

// import '../Register.scss';

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
                // id="register-email"
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
                // id="register-email"
                label="Confirm Password"
                error={props.errors.repeatPassword && props.touched.repeatPassword}
                margin="normal"
                variant="outlined"
            />
            <ErrorMessage name="repeatPassword" component="div" className="invalid-field-message" />
        </div>

        {/* <div className="pwd-options">
            <FormControlLabel
                className="remember-pwd-label"
                value="rememberMe"
                control={<Checkbox className="remember-pwd-checkbox" color="primary"/>}
                label="Remember me"
                labelPlacement="end"
            />
            <Link className="forgotten-pwd-link" component={RouterLink} to="/forgottenpassword">
                Forgot Password
            </Link>
        </div> */}

        <div >
            <Button type="submit" variant="contained" color="primary" onClick={props.handleSubmit}>
                Register
            </Button>
            {/* <Button className="common-btn sign-up-btn" variant="outlined" color="primary" component={RouterLink} to="/register">
                Sign Up
            </Button> */}
        </div>
    </form>
);

export default RegisterFormView;
