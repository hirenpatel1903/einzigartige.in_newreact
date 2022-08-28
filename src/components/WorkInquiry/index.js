import React from 'react';
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import workInquiry from '../../images/work-inquiry.png';

import './style.scss';

const WorkInquiry = ({className, workInquiry}) => {
    return (
        <Grid className={`container ${className}`} container spacing={4}>
            <Grid item xs={12} md={8}>
                <Grid className="textContent">
                    <strong>{workInquiry.work_header_title ? workInquiry.work_header_title : 'Say hello!'}</strong>
                    <h2>{workInquiry.work_title ? workInquiry.work_title : 'Work inquiry'}</h2>
                    <h5>
                        <p>{workInquiry.work_sub_title ? workInquiry.work_sub_title : 'Is to deliver awesome for our clients. By awesome, this should be a tangible impact on their business'}</p>
                    </h5>
                    <p>{workInquiry.work_des ? workInquiry.work_des : 'We exist as a partner to businesses, crafting strategies that are aligned with our client’s business goals.'}</p>
                    <Link to="/contact-us" className="cBtn cBtnUppercase">Work with us</Link>
                </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
                <img src={workInquiry.work_image ? workInquiry.work_image : workInquiry} alt="workinquiry"/>
            </Grid>
        </Grid>
    )
};

export default WorkInquiry;