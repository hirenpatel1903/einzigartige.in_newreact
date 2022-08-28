import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import AboutIntro from "../../components/AboutIntro";
import AboutDigitalStudio from "../../components/AboutDigitalStudio";
import DigitalStudio from "../../components/DigitalStudio";
import Footer from "../../components/Footer";
import ContactUs from "../../components/ContactUs";
import OurExpert from "../../components/OurExpert";
import BreadCrumb from "../../components/BreadCrumb";
import {loadAboutAction} from "../../store/actions/action";

const AboutUs = (props) => {

    useEffect(() => {
        props.loadAboutAction();
    }, []);

    const {about_banner_title} = props.about;

    return (
        <Fragment>
            <BreadCrumb
                title={about_banner_title ? about_banner_title : 'Creative Agency Template'}
                pagename="About us"
            />
            <AboutIntro about={props.about}/>
            <DigitalStudio/>
            <AboutDigitalStudio aboutInfo={props.about} className="pt-0 pb-120"/>
            <OurExpert/>
            <ContactUs/>
            <Footer/>
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        about: state.about
    }
};

export default connect(mapStateToProps, {loadAboutAction})(AboutUs);