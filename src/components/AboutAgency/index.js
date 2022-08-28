import React from 'react';
import {connect} from 'react-redux';
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";

// images
import bgShape3 from '../../images/bg-shape3.png';
import Shape2 from '../../images/shape2.png';

import './style.scss';

const AboutAgency = (props) => {
    const {about_sub_title, about_title, about_description, about_left_image} = props.aboutUsInfo;
    return (
        <Grid className="aboutAgencyWrapper">
            <Grid
                container
                alignItems="center"
                spacing={4}
                className="container">
                <Grid item xs={12} md={6}>
                    <Grid className="textThumb">
                        <img className="Shape2" src={about_left_image ? about_left_image : Shape2} alt="shape"/>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid className="textContent">
                        <strong>{about_sub_title ? about_sub_title : 'Know About Ammelias'}</strong>
                        <h2>{about_title ? about_title : 'Ammelias For Your Business Solution'}</h2>
                        <p>{about_description ? about_description : 'Building your online presence helps attract more potential clients. Our integrated marketing team will work directly with you to understand what makes your business unique, and provide more qualified leads to achieve success in your industry'}</p>
                        <Link to="/about-us" className="cBtn">About Us</Link>
                    </Grid>
                </Grid>
            </Grid>
            <img src={bgShape3} alt="bgShape3" className="bgShape3"/>
        </Grid>
    )
};

const mapStateToProps = state => {
    return {
        aboutUsInfo: state.home
    }
};

export default connect(mapStateToProps)(AboutAgency);