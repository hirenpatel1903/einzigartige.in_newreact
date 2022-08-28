import React, {useState, Fragment} from 'react';
import {connect} from 'react-redux';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Swiper from 'react-id-swiper';
import {withTranslation} from "react-i18next";

// images
import pricelistbgshape1 from '../../images/prc-bg-shape1.png';
import pricelistbgshape2 from '../../images/prc-bg-shape2.png';
import pricelistbgshape3 from '../../images/prc-bg-shape3.png';
import next from '../../images/icon/next.png';
import prev from '../../images/icon/prev.png';
import bgShapeNew1 from '../../images/bg-shape-n1.png';

import './style.scss';

const MonthlyPlans = ({plantLists, planMonthly, params}) => {

    return (
        <Fragment>
            {plantLists !== undefined ? <Swiper {...params}>
                {plantLists.filter(item => item.duration_type === 30).map((item, index) => {
                    return (
                        <Grid key={item.id} className="swiper-slide">
                            <Grid className="signlePrice"
                                  style={{borderTopColor: `${index + 1 === 1 ? '#3492FF' : index + 1 === 2 ? '#FFC134' : '#FF5A8D'}`}}>
                                <h2><img
                                    src={index + 1 === 1 ? pricelistbgshape1 : index + 1 === 2 ? pricelistbgshape2 : pricelistbgshape3}
                                    alt="pricelistbgshape1"/> <span>{item.title}</span></h2>
                                <Grid className="price">${item.price}</Grid>
                                <ul>
                                    {item.features.map((feature, i) => {
                                        return <li key={i}>{feature}</li>;
                                    })}
                                </ul>
                                <Button component="a" className="cBtn">Choose Plan</Button>
                            </Grid>
                        </Grid>
                    )
                })}
            </Swiper> : ''}
        </Fragment>
    )
};
const YearlyPlans = ({plantLists, planMonthly, params}) => {

    return (
        <Fragment>
            {plantLists !== undefined ? <Swiper {...params}>
                {plantLists.filter(item => item.duration_type === 365).map((item, index) => {
                    return (
                        <Grid key={item.id} className="swiper-slide">
                            <Grid className="signlePrice"
                                  style={{borderTopColor: `${index + 1 === 1 ? '#3492FF' : index + 1 === 2 ? '#FFC134' : '#FF5A8D'}`}}>
                                <h2><img
                                    src={index + 1 === 1 ? pricelistbgshape1 : index + 1 === 2 ? pricelistbgshape2 : pricelistbgshape3}
                                    alt="pricelistbgshape1"/> <span>{item.title}</span></h2>
                                <Grid className="price">${item.price}</Grid>
                                <ul>
                                    {item.features.map((feature, i) => {
                                        return <li key={i}>{feature}</li>;
                                    })}
                                </ul>
                                <Button component="a" className="cBtn">Choose Plan</Button>
                            </Grid>
                        </Grid>
                    )
                })}
            </Swiper> : ''}
        </Fragment>
    )
};

const PricingPlan = (props) => {

    const [planMonthly, setPlan] = useState(30);

    const params = {
        loop: false,
        speed: 800,
        slidesPerView: 2,
        spaceBetween: 0,
        centeredSlides: true,
        effect: 'coverflow',
        coverflowEffect: {
            // rotate: -40,
            rotate: 0,
            stretch: 54,
            depth: 400,
            modifier: 1,
            slideShadows: false,
        },

        breakpoints: {
            1251: {
                effect: 'coverflow'
            },
            992: {
                effect: 'normal',
                slidesPerView: 1,
                centeredSlides: false,
                spaceBetween: 0,
            },
            767: {
                effect: 'normal',
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 30,
            },
            240: {
                effect: 'normal',
                slidesPerView: 1,
                centeredSlides: false,
                spaceBetween: 0,
            }
        },

        navigation: {
            nextEl: '.sbnext',
            prevEl: '.sbprev'
        },
        renderPrevButton: () => <Grid className="sbArrow sbprev"><img src={prev} alt="prev"/></Grid>,
        renderNextButton: () => <Grid className="sbArrow sbnext"> <img src={next} alt="next"/> </Grid>,
    };

    return (
        <Grid className="pricingPlan">
            <Grid className="container" container alignItems="center" spacing={4}>
                <Grid item xs={12} md={6}>
                    <Grid className="textContent">
                        <strong>{props.t('Home.PricingPlan.SubTitle')}</strong>
                        <h4>{props.t('Home.PricingPlan.Title')}</h4>
                        <p>{props.t('Home.PricingPlan.Description')}</p>
                        <Grid dir="ltr" className="displayInlineBlock">
                            <ButtonGroup
                                className="mt-40"
                                size="large"
                                aria-label="large outlined button group"
                            >
                                <Button onClick={() => setPlan(30)}
                                        className={`cBtn disabledHover ${planMonthly === 30 ? '' : 'cBtnOutline'}`}>{props.t('Home.PricingPlan.Monthly')}</Button>
                                <Button onClick={() => setPlan(365)}
                                        className={`cBtn disabledHover ${planMonthly === 30 ? 'cBtnOutline' : ''}`}>{props.t('Home.PricingPlan.Yearly')}</Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid className="planpricelists">
                        {props.plantLists !== undefined ? planMonthly === 30 ?
                            <MonthlyPlans params={params} planMonthly={planMonthly} plantLists={props.plantLists}/> :
                            <YearlyPlans params={params} planMonthly={planMonthly} plantLists={props.plantLists}/> : ''}
                    </Grid>
                </Grid>
            </Grid>
            <img className="bgShapeNew1" src={bgShapeNew1} alt="bgShapeNew1"/>
        </Grid>
    )
};

const mapStateToProps = state => {
    return {
        plantLists: state.home.plan_list
    }
};

export default connect(mapStateToProps)(withTranslation('common')(PricingPlan));