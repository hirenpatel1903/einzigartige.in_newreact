import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import Slider from "react-slick";
import Grid from "@material-ui/core/Grid";

import {withTranslation} from "react-i18next";

import SectionTitle from "../SectionTitle";

import nextIcon from '../../images/icon/next.png';
import prevIcon from '../../images/icon/prev.png';

import './style.scss';

const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ],
};

class OurExpert extends React.Component {

    nextHandler = () => {
        this.slider.slickNext();
    };
    prevHandler = () => {
        this.slider.slickPrev();
    };

    render() {

        return (
            <Grid className="ourExpertWrapper">
                <Grid container className="container">
                    <Grid item xs={12}>
                        <SectionTitle
                            subtitle={this.props.t('Home.OurExpert.SubTitle')}
                            title={this.props.t('Home.OurExpert.Title')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid className="ourExpert">
                            {this.props.teamList !== undefined ?
                                <Fragment>
                                    <Slider {...settings} ref={slider => (this.slider = slider)} {...settings}
                                            slidesToShow={this.props.teamList.length !== undefined ? this.props.teamList.length >= 3 ? 3 : this.props.teamList.length : 3}>
                                        {this.props.teamList.map(item => {
                                            return (
                                                <Grid key={item.id} className="expertTeam">
                                                    <Grid className="thumb">
                                                        <img src={item.image} alt=""/>
                                                    </Grid>
                                                    <Grid className="content">
                                                        <h4>{item.name}</h4>
                                                        <p>{item.designation}</p>
                                                    </Grid>
                                                </Grid>
                                            )
                                        })}
                                    </Slider>
                                    <ul className="sliderNav">
                                        <li onClick={this.prevHandler}><img src={prevIcon} alt="prev"/></li>
                                        <li onClick={this.nextHandler}><img src={nextIcon} alt="next"/></li>
                                    </ul>
                                </Fragment> : ''}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        teamList: state.home.team_list
    }
};

export default connect(mapStateToProps)(withTranslation('common')(OurExpert));