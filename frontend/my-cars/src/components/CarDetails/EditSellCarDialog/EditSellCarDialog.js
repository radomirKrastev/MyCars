import React from 'react';

import { Formik } from 'formik';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import SellCar from '../../SellCar';

import './EditSellCarDialog.scss';

const EditSellCarDialog = ({
    userId,
    isOpen,
    handleCloseDialog,
    carInfo,
    createBuyCarOffer,
    carId,
}) => {
    console.log(123)
    return (
        <Dialog className="make-offer-dialog" open={isOpen} onClose={handleCloseDialog}>
            <MuiDialogTitle disableTypography className="dialog-title-container">
                <Typography variant="body2" className="dialog-title-text">Make an offer to the seller</Typography>
                <IconButton className="dialog-close-btn" onClick={handleCloseDialog}>
                    <CloseIcon />
                </IconButton>
            </MuiDialogTitle>

            <DialogContent className="dialog-content">
                <SellCar
                    carInfo={carInfo}
                    isEditMode={true}
                    userId={userId}
                />
            </DialogContent>
        </Dialog>
    )
};

export default EditSellCarDialog;
