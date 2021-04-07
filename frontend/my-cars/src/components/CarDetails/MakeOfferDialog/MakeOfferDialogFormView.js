import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { ErrorMessage } from 'formik';

import './MakeOfferDialog.scss';

const MakeOfferDialog = ({
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    handleSubmit,
}) => {
    return (
        <form className="make-offer-form" autoComplete="off">
            <div className="form-block">
                <div className="form-field">
                    <TextField
                        required
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Phone"
                        error={errors.phone && touched.phone}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                    <ErrorMessage name="phone" component="div" className="invalid-field-message" />
                </div>

                <div className="form-field">
                    <TextField
                        required
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Name"
                        error={errors.name && touched.name}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                    <ErrorMessage name="name" component="div" className="invalid-field-message" />
                </div>
            </div>

            <div >
                <TextField
                    name="offerDescription"
                    value={values.offerDescription}
                    onChange={handleChange}
                    label="Offer"
                    error={errors.offerDescription && touched.offerDescription}
                    margin="normal"
                    variant="outlined"
                    multiline
                    rows={7}
                    fullWidth
                />
                <ErrorMessage name="offerDescription" component="div" className="invalid-field-message" />
            </div>

            <div className="buttons-container">
                <Button onClick={handleSubmit} type="submit" variant="contained" color="primary">
                    Send Offer
                </Button>
            </div>
        </form>
    )
};

export default MakeOfferDialog;
