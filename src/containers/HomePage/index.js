import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import HeroArea from "../../components/HeroArea";
import Featured from "../../components/Featured";
import AboutAgency from "../../components/AboutAgency";
import DigitalStudio from "../../components/DigitalStudio";
import Testimonial from "../../components/Testimonial";
import OurExpert from "../../components/OurExpert";
import PricingPlan from "../../components/PricingPlan";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import BlogSection from "../../components/BlogSection";
import {loadHomeAction} from "../../store/actions/action";

class HomePage extends React.Component {

    componentDidMount() {
        this.props.loadHomeAction();
    }

    render() {
        return (
            <Fragment>
                <HeroArea hero={this.props.hero}/>
                <Featured features={this.props.features}/>
                <AboutAgency/>
                <DigitalStudio/>
                <Testimonial/>
                <PricingPlan/>
                <OurExpert/>
                <BlogSection/>
                <ContactUs/>
                <Footer/>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        hero: state.home,
        features: state.home.service_list,
    }
};

export default connect(mapStateToProps, {loadHomeAction})(HomePage);