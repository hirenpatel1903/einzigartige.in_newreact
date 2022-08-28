import React from 'react';
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import breadcrumbBg from '../../images/breadcrumb-bg.png';
import brdShape from '../../images/brdshape.png';

import './style.scss';


const BreadCrumb = ({title, pagename, className=''}) => {
    return(
        <Grid className="breadCrumb">
            <Grid container className="container">
                <Hidden smDown><Grid item xs={12} md={2}/></Hidden>
                <Grid item xs={12} md={8}>
                    <Grid className={`breadCrumbContent ${className}`}>
                        <span>{pagename}</span>
                        <h2>{title}</h2>
                    </Grid>
                </Grid>
            </Grid>
            <img className="breadcrumbBg" src={breadcrumbBg} alt="breadcrumbBg"/>
            <Grid className="brdShape" style={{background: `url(${brdShape})center`}}></Grid>
        </Grid>
    )
};

export default BreadCrumb;