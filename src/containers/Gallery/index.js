import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import WorkInquiry from "../../components/WorkInquiry";
import Footer from "../../components/Footer";
import PortfolioMasonary from "../../components/PortfolioMasonary";
import BreadCrumb from "../../components/BreadCrumb";
import {loadGalleryAction} from "../../store/actions/action";

const Gallery = (props) => {

    useEffect(() => {
        props.loadGalleryAction();
    }, []);
    return (
        <Fragment>
            <BreadCrumb
                pagename="Creative Protfolio"
                title={props.gallery.gallery_banner_title}
            />
            <PortfolioMasonary image_list={props.gallery.image_list}/>
            <WorkInquiry workInquiry={props.gallery} className="hasMb"/>
            <Footer/>
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        gallery: state.gallery
    }
};

export default connect(mapStateToProps, {loadGalleryAction})(Gallery);