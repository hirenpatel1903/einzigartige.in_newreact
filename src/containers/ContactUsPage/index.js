import React, { Fragment } from 'react';
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";
import ContactInfoList from "../../components/ContactInfoList";
import ContactUs from "../../components/ContactUs";
import BreadCrumb from "../../components/BreadCrumb";

import { withTranslation } from 'react-i18next';

import './style.scss';

const ContactUsPage = (props) => {
    return (
        <Fragment>
            <BreadCrumb
                pagename={ props.t('contact.pagename') }
                title={ props.t('contact.banner_title') }
            />
            <ContactInfoList />
            <ContactUs />
            <NewsLetter
                className="pt-0"
            />
            <Footer />
        </Fragment>
    )
};

export default withTranslation('common')(ContactUsPage);