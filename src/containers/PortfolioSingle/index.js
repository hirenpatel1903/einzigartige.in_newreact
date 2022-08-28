import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Footer from "../../components/Footer";
import WorkInquiry from "../../components/WorkInquiry";
import BreadCrumb from "../../components/BreadCrumb";
import PortfolioSingleDetails from "../../components/PortfolioSingleDetails";
import {loadPortfolioAction, loadSinglePortfolioAction} from "../../store/actions/action";

import './style.scss';

const PortfolioSingle = (props) => {
    useEffect(() => {
        props.loadPortfolioAction();
        props.loadSinglePortfolioAction(props.match.params.id);
    }, []);
    return (
        <Fragment>
            <BreadCrumb
                pagename="Creative Protfolio"
                title="Creative Digital Agency"
            />
            <PortfolioSingleDetails single_portfolio={props.single_portfolio}/>
            {props.workInquiry !== undefined ? <WorkInquiry workInquiry={props.workInquiry} className="hasMb"/> : ''}
            <Footer/>
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        workInquiry: state.portfolio,
        single_portfolio: state.single_portfolio
    }
};

export default connect(mapStateToProps, {loadPortfolioAction, loadSinglePortfolioAction})(withRouter(PortfolioSingle));