import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { isAuthenticated as isUserAuthenticated } from '../reducers';

const isAuthenticated = (Component) => {
    const Authentication = ({
        isUserAuthenticated,
        ...props
    }) => {
        const history = useHistory();

        useEffect(() => {
            if (!isUserAuthenticated) {
                return history.push("/login");
            }
        });

        return <Component {...props} />
    }

    const mapStateToProps = state => ({
        isUserAuthenticated: isUserAuthenticated(state),
    });

    return connect(mapStateToProps)(Authentication);
}

export default isAuthenticated;
