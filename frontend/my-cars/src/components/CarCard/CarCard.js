import React from 'react';
import { useHistory } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import './CarCard.scss';

const CarCard = ({
    carInfo,
    userId
}) => {
    const history = useHistory();

    const handleRedirectToCarDetails = () => {
        history.push({
            pathname: `/car-details/${carInfo._id}`,
            state: { userId, carInfo }
        })
    };

    return (
        <Paper className="car-info-card" onClick={handleRedirectToCarDetails}>
            <div className="car-info-container">
                <div className="image-container">
                    <img src={carInfo.uploadedImagesData[0].url}></img>
                </div>


                <div className="car-info-content">
                    <div className="car-info">
                        <div className="car-deital-container">
                            <Typography>{`${carInfo.make}, ${carInfo.model}`}</Typography>
                        </div>
                        <div className="car-deital-container">
                            <Typography>Year made:</Typography>
                            <Typography className="detail">{carInfo.year}</Typography>
                        </div>
                        <div className="car-deital-container">
                            <Typography>Price:</Typography>
                            <Typography className="detail">{carInfo.price}</Typography>
                        </div>
                    </div>

                    <div className="car-description">
                        <Typography className="car-deital-container description">Description:</Typography>
                        <pre>{carInfo.description}</pre>
                    </div>
                </div>
            </div>
        </Paper>
    )
};

export default CarCard;
