import React from 'react';
import './style.scss';
import Grid from "@material-ui/core/Grid";

import loader from '../../images/loader.gif';

const PageLoader = ({className = ''}) => {
    return (
        <Grid className={`pageLoader ${className}`}>
            <img src={loader} alt="loader"/>
        </Grid>
    )
};

export default PageLoader;