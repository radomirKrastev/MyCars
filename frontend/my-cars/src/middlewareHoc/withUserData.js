import React from 'react';
import { connect } from 'react-redux';

import { getUserId } from '../reducers';

const withUserData = (Component) => {
    const WithUserData = ({
        userId,
        ...props
    }) => {
        return <Component userId={userId} {...props} />
    }

    const mapStateToProps = state => ({
        userId: getUserId(state),
    });

    return connect(mapStateToProps)(WithUserData);
}

export default withUserData;
