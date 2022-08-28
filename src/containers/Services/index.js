import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import Featured from "../../components/Featured";
import Footer from "../../components/Footer";
import BreadCrumb from "../../components/BreadCrumb";
import HireUs from "../../components/HireUs";
import {loadServiceAction} from "../../store/actions/action";

const Services = (props) => {

    useEffect(() => {
        props.loadServiceAction();
    }, []);

    return (
        <Fragment>
            <BreadCrumb
                pagename="Our Services"
                title={props.service.service_banner_title ? props.service.service_banner_title : 'props.service.service_banner_title'}
            />
            <Featured features={props.service.service_list} className="allFeaturs"/>
            <HireUs/>
            <Footer/>
        </Fragment>
    )
};
const mapStateToProps = state => {
    return {
        service: state.service
    }
};
export default connect(mapStateToProps, {loadServiceAction})(Services);