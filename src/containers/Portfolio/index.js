import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import PortfolioList from "../../components/PortfolioList";
import WorkInquiry from "../../components/WorkInquiry";
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";
import BreadCrumb from "../../components/BreadCrumb";
import {loadPortfolioAction} from "../../store/actions/action";

import './style.scss';

const Portfolio = (props) => {
    useEffect(() => {
        props.loadPortfolioAction()
    }, []);

    const {portfolio_banner_title, portfolio_list} = props.portfolio;

    return (
        <Fragment>
            <BreadCrumb
                pagename="Creative Protfolio"
                title={portfolio_banner_title ? portfolio_banner_title : 'Creative Digital Agency'}
            />
            <PortfolioList portfolio_list={portfolio_list}/>
            <WorkInquiry workInquiry={props.portfolio} />
            <NewsLetter/>
            <Footer/>
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        portfolio: state.portfolio
    }
};

export default connect(mapStateToProps, {loadPortfolioAction})(Portfolio);