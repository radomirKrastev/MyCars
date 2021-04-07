import React from 'react';

import { Formik } from 'formik';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { ErrorMessage } from 'formik';
import MakeOfferDialogFormView from './MakeOfferDialogFormView';

import './MakeOfferDialog.scss';

const MakeOfferDialog = ({
    userId,
    isOpen,
    handleCloseDialog,
    createBuyCarOffer,
    carId,
}) => {
    return (
        <Dialog className="make-offer-dialog" open={isOpen} onClose={handleCloseDialog}>
            <MuiDialogTitle disableTypography className="dialog-title-container">
                <Typography variant="body2" className="dialog-title-text">Make an offer to the seller</Typography>
                <IconButton className="dialog-close-btn" onClick={handleCloseDialog}>
                    <CloseIcon />
                </IconButton>
            </MuiDialogTitle>

            <DialogContent className="dialog-content">
                <Formik
                    initialValues={{
                        offerDescription: '',
                        phone: '',
                        name: '',
                    }}
                    validate={(values) => {
                        //make validations
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values)
                        setSubmitting(false);
                        createBuyCarOffer(userId, carId, { ...values });
                        handleCloseDialog();
                    }}
                >
                    {(props) => <MakeOfferDialogFormView {...props} />}
                </Formik>
            </DialogContent>
        </Dialog>
    )
};

export default MakeOfferDialog;