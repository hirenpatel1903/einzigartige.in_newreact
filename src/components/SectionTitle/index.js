import React from 'react';
import {Grid} from "@material-ui/core";

import './style.scss';
import Hidden from "@material-ui/core/Hidden";

const SectionTitle = ({subtitle, title, body, className}) => {
    return(
        <Grid container className="container" spacing={4}>
            <Hidden smDown>
                <Grid item xs={12} md={2}></Grid>
            </Hidden>
            <Grid item xs={12} md={8}>
                <Grid className={`sectionTitle ${className ? className : ''}`}>
                    {subtitle ? <strong>{subtitle}</strong> : ''}
                    <h2>{title}</h2>
                    {body ? <p>{body}</p> : ''}
                </Grid>
            </Grid>
        </Grid>
    )
};

export default SectionTitle;