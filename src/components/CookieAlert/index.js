import React from 'react';

import './style.scss';
import Grid from "@material-ui/core/Grid";

const CookieAlert = ({setAlertVisible, dissableAlertCookie}) => {
    return (
        <Grid className="cookieAlert">
            <span className="closeBtn" onClick={() => setAlertVisible(false)}><i className="fa fa-times"></i></span>
            <p>We use cookies to ensure that we give you the best experience on our website. If you continue to use this
                site we will assume that you are happy with it
                <button onClick={() => dissableAlertCookie(false)}>ok</button>
            </p>
        </Grid>
    )
};

export default CookieAlert;