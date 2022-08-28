import React from 'react';
import {connect} from 'react-redux';
import Grid from "@material-ui/core/Grid";
import SectionTitle from "../SectionTitle";
import TestimonialCarousel from "../TestimonialCarousel";

import {withTranslation} from "react-i18next";

import bgShape4 from "../../images/bg-shape4.png";

import './style.scss';

const Testimonial = (props) => {
    return (
        <Grid className="testimonialWrapper">
            <Grid className="container">
                <SectionTitle
                    subtitle={props.t('Home.Testimonial.Subtitle')}
                    title={props.testimonial.home_testimonial_title ? props.testimonial.home_testimonial_title : 'What Our Client Say About Us'}
                />
                <TestimonialCarousel testimonialLists={props.testimonial.testimonial_list}/>
            </Grid>
            <img src={bgShape4} alt="bgShape4" className="bgShape4"/>
        </Grid>
    )
};

const mapStateToProps = state => {
    return {
        testimonial: state.home
    }
};

export default connect(mapStateToProps)(withTranslation('common')(Testimonial));