import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import './MyCarCard.scss';

const MyCarCard = ({
    offerInfo,
}) => {
    return (
        <Paper className="offer-info-card">
            <div className="offer-info-content">
                <div className="buyer-info">
                    <div className="buyer-deital-container">
                        <Typography>Potential Buyer Name:</Typography>
                        <Typography className="detail">{offerInfo.name}</Typography>
                    </div>

                    <div className="buyer-deital-container">
                        <Typography>Potential Buyer Phone:</Typography>
                        <Typography className="detail">{offerInfo.phone}</Typography>
                    </div>
                </div>

                <div className="offer-description">
                    <Typography className="offer-deital-container description">Description:</Typography>
                    <pre>{offerInfo.offerDescription}</pre>
                </div>
            </div>
        </Paper>
    )
};

export default MyCarCard;
