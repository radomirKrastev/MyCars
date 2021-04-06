import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createBuyCarOffer } from '../../actions/carAcions';

import Paper from '@material-ui/core/Paper';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import MakeOfferDialog from './MakeOfferDialog';
import EditSellCarDialog from './EditSellCarDialog';

import './CarDetails.scss';

const CarDetails = ({
    createBuyCarOffer
}) => {
    const history = useHistory();
    const { userId, carInfo } = history.location.state;
    console.log(userId);
    console.log(carInfo);


    //Stepper
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = carInfo.uploadedImagesData.length;
    const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const handlePrevious = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    //Make offer dialog
    const [isMakeOfferDialogOpen, setIsMakeOfferDialogOpen] = useState(false);

    const hanleOpenMakeOfferDialog = () => setIsMakeOfferDialogOpen(true);
    const hanleCloseMakeOfferDialog = () => setIsMakeOfferDialogOpen(false);

    //Is Edit dialog open
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

    const hanleOpenEditDialog = () => setIsEditDialogOpen(true);
    const hanleCloseEditDialog = () => setIsEditDialogOpen(false);


    const isOwner = userId == carInfo.userId;
    console.log(isOwner)

    return (
        <div className="car-details-page">
            <Paper className="car-details-card">
                <div className="image-container">
                    <img src={carInfo.uploadedImagesData[activeStep].url}></img>
                </div>

                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    variant="dots"
                    activeStep={activeStep}
                    nextButton={
                        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                            Next
                            <KeyboardArrowRight />
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handlePrevious} disabled={activeStep === 0}>
                            <KeyboardArrowLeft />
                            Back
                        </Button>
                    }
                />

                <div className="car-info-content">
                    <div className="car-info">
                        <div className="car-detail-container">
                            <Typography>{`${carInfo.make}, ${carInfo.model}`}</Typography>
                        </div>
                        <div className="car-detail-container">
                            <Typography>Year made:</Typography>
                            <Typography className="detail">{carInfo.year}</Typography>
                        </div>
                        <div className="car-detail-container">
                            <Typography>Price:</Typography>
                            <Typography className="detail">{carInfo.price}</Typography>
                        </div>
                    </div>

                    <div className="car-description">
                        <Typography className="car-deital-container description">Full description:</Typography>

                        <pre>{carInfo.description}</pre>
                    </div>

                    <div className="buttons-container">
                        {isOwner
                            ? <>
                                <Button variant="contained" color="primary" onClick={hanleOpenEditDialog}>
                                    Edit
                                </Button>
                                <Button variant="contained" color="secondary" onClick={hanleOpenMakeOfferDialog}>
                                    Delete
                                </Button>
                            </>
                            : <Button variant="contained" color="primary" onClick={hanleOpenMakeOfferDialog}>
                                Make an offer
                            </Button>
                        }
                    </div>
                </div>

            </Paper>

            {
                !isOwner && <MakeOfferDialog
                    userId={userId}
                    carId={carInfo._id}
                    handleCloseDialog={hanleCloseMakeOfferDialog}
                    isOpen={isMakeOfferDialogOpen}
                    createBuyCarOffer={createBuyCarOffer}
                />
            }

            {
                isOwner && <EditSellCarDialog
                    userId={userId}
                    isOpen={isEditDialogOpen}
                    handleCloseDialog={hanleCloseEditDialog}
                    carInfo={carInfo}
                />
            }

        </div>
    )
};

const mapDispatchToProps = { createBuyCarOffer };

export default connect(null, mapDispatchToProps)(CarDetails);
