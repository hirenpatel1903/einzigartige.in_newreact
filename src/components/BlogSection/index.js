import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {withTranslation} from "react-i18next";
import SectionTitle from "../SectionTitle";
import Grid from "@material-ui/core/Grid";
import Slider from "react-slick";
import FontAwesome from "../UiStyle/FontAwesome";

import nextIcon from '../../images/icon/next.png';
import prevIcon from '../../images/icon/prev.png';

import './style.scss';
import {Link} from "react-router-dom";
import moment from "moment";

const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1920,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
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

class BlogSection extends React.Component {

    nextHandler = () => {
        this.slider.slickNext();
    };
    prevHandler = () => {
        this.slider.slickPrev();
    };

    render() {
        const {blogList} = this.props;
        return (
            <Grid className="BlogSection">
                <Grid container>
                    <Grid item xs={12}>
                        <SectionTitle
                            title={this.props.t('Home.BlogSection.Title')}
                            subtitle={this.props.t('Home.BlogSection.SubTitle')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        {blogList !== undefined ? <Fragment>
                            <Slider {...settings} ref={slider => (this.slider = slider)} {...settings}>
                                {blogList.map(item => {
                                    return (
                                        <Grid key={item.id} className="singleBlog" dir="rtl">
                                            <Grid className="thumb">
                                                <img src={item.image} alt=""/>
                                            </Grid>
                                            <Grid className="content">
                                                <Grid className="metaTop">
                                                    <p><FontAwesome name="user"/> {item.author_name}</p>
                                                    <p><FontAwesome
                                                        name="clock"/> {moment(item.created_at).format('ll')}</p>
                                                </Grid>
                                                <h4><Link to={`/blog-details/${item.encrypt_id}`}>{item.title}</Link>
                                                </h4>
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
        );
    }
}

const mapStateToProps = state => {
    return {
        blogList: state.home.blog_list
    }
};

export default connect(mapStateToProps)(withTranslation('common')(BlogSection));