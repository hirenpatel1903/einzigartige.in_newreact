import React from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import shape9 from '../../images/shape9.png';

import './style.scss';

const AboutDigitalStudio = ({className = '', aboutInfo}) => {
    const {
        about_section2_header_title,
        about_section2_title,
        about_section2_sub_title,
        about_section2_description,
        about_section2_right_image
    } = aboutInfo;
    return (
        <Grid className={`aboutAgencyWrapper ${className}`}>
            <Grid
                container
                alignItems="center"
                spacing={4}
                className="container xs-column-reverse">
                <Grid item xs={12} md={6}>
                    <Grid className="textContent">
                        <strong>{about_section2_header_title ? about_section2_header_title : 'About Digital agency'}</strong>
                        <h2>{about_section2_title ? about_section2_title : 'Attract Customers With Content And SEO'}</h2>
                        <h5>{about_section2_sub_title ? about_section2_sub_title : 'How Can Help Your Business?'}</h5>
                        <p>{about_section2_description ? about_section2_description : 'Building your online presence helps attract more potential clients. Our integrated marketing team will work directly with you to understand what makes your business unique, and provide more qualified leads to achieve success in your industry'}</p>
                        <Button component="a" className="cBtn cBtnRadius">Learn more</Button>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid className="textThumb rthumb">
                        <img className="Shape9" src={about_section2_right_image ? about_section2_right_image : shape9}
                             alt="shape"/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default AboutDigitalStudio;