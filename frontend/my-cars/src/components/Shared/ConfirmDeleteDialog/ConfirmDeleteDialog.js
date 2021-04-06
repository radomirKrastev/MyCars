import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './ConfirmDeleteDialog.scss';

const ConfirmDeleteDialog = ({
    isOpen,
    handleCloseDialog,
    deleteAction,
    text,
}) => {
    return (
        <Dialog className="confirm-delete-dialog" open={isOpen} onClose={handleCloseDialog}>
            <MuiDialogTitle disableTypography className="dialog-title-container">
                <Typography variant="body2" className="dialog-title-text">{text}</Typography>
                <IconButton className="dialog-close-btn" onClick={handleCloseDialog}>
                    <CloseIcon />
                </IconButton>
            </MuiDialogTitle>

            <DialogContent className="dialog-content">
                <div className="action-buttons-container">
                    <Button className="yes-button" variant="contained" color="primary" onClick={deleteAction}>
                        Yes
                    </Button>
                    <Button variant="contained" color="secondary" onClick={handleCloseDialog}>
                        No
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
};

export default ConfirmDeleteDialog;
