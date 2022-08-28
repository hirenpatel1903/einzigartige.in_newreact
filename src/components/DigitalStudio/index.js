import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Grid} from "@material-ui/core";
// images
import iconBg1 from '../../images/iconbg1.png';
import iconBg2 from '../../images/iconbg2.png';
import iconBg3 from '../../images/iconbg3.png';
import iconBg4 from '../../images/iconbg4.png';
import iconBg5 from '../../images/iconbg5.png';
import lineShape from '../../images/linehsape.png';

import './style.scss';
import {loadHomeAction} from "../../store/actions/action";

const DigitalStudio = (props) => {
    const {
        achievement_title,
        achievement_sub_title,
        achievement_des,
        achievement_list1_title,
        achievement_list2_title,
        achievement_list3_title,
        achievement_list4_title,
        achievement_list5_title,
        achievement_list1_count,
        achievement_list2_count,
        achievement_list3_count,
        achievement_list4_count,
        achievement_list5_count,
    } = props.achievements;

    useEffect(() => {
        props.loadHomeAction();
    }, []);
    return (
        <Grid className="digitalStudio">
            <Grid className="container" container alignItems="center" spacing={4}>
                <Grid item xs={12} md={6}>
                    <Grid className="textContent">
                        <strong>{achievement_sub_title ? achievement_sub_title : 'achievement_sub_title'}</strong>
                        <h4>{achievement_title ? achievement_title : 'We Help To Increase Sales By Improving SEO.'}</h4>
                        <p>{achievement_des ? achievement_des : 'Nam quis laoreet nisl. Vivamus nec quam magna.interdum etus blandit hendrerit ornare. Sed id leo nulla.'}</p>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid className="digitalStudioContent">
                        <div className="dstudioItem">
                            <img src={iconBg1} alt=""/>
                            <Grid className="content">
                                <p>{achievement_list1_title ? achievement_list1_title : 'Projects'}</p>
                                <h4>{achievement_list1_count ? achievement_list1_count : '30'}</h4>
                            </Grid>
                        </div>
                        <div className="dstudioItem">
                            <img src={iconBg3} alt=""/>
                            <Grid className="content">
                                <p>{achievement_list2_title ? achievement_list2_title : 'Cups of Coffee'}</p>
                                <h4>{achievement_list2_count ? achievement_list2_count : '10'}</h4>
                            </Grid>
                        </div>
                        <div className="dstudioItem">
                            <img src={iconBg2} alt=""/>
                            <Grid className="content">
                                <p>{achievement_list3_title ? achievement_list3_title : 'Projects'}</p>
                                <h4>{achievement_list3_count ? achievement_list3_count : '32'}</h4>
                            </Grid>
                        </div>
                        <div className="dstudioItem">
                            <img src={iconBg4} alt=""/>
                            <Grid className="content">
                                <p>{achievement_list4_title ? achievement_list4_title : 'Customer'}</p>
                                <h4>{achievement_list4_count ? achievement_list4_count : '80'}</h4>
                            </Grid>
                        </div>
                        <div className="dstudioItem">
                            <img src={iconBg5} alt=""/>
                            <Grid className="content">
                                <p>{achievement_list5_title ? achievement_list5_title : 'Clients'}</p>
                                <h4>{achievement_list5_count ? achievement_list5_count : '3'}</h4>
                            </Grid>
                        </div>
                        <img src={lineShape} alt="" className="lineShape"/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

const mapStataToProps = state => {
    return {
        achievements: state.home
    }
};

export default connect(mapStataToProps, {loadHomeAction})(DigitalStudio);