import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import './CarCard.scss';

const CarCard = ({
    carInfo,
}) => {
    console.log(12333)
    return (
        <Paper className="car-info-card">
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

                        <p>{carInfo.description}</p>
                    </div>
                </div>
            </div>
        </Paper>
    )
};

export default CarCard;
