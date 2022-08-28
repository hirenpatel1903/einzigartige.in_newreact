import React from 'react';
import Grid from "@material-ui/core/Grid";
import {connect} from 'react-redux';
import { withTranslation } from 'react-i18next';

import icon1 from '../../images/icon/customer-service.png';
import icon2 from '../../images/icon/paper-plane.png';
import icon3 from '../../images/icon/route.png';

import './style.scss';

const ContactInfoList = (props) => {
    const {header} = props;
    return (
        <Grid className="contactInfoList">
            <Grid container className="container" spacing={4}>

                <Grid item xs={12} md={4} sm={6}>
                    <Grid className="cntItem">
                        <Grid className="iconBox">
                            <img className="icon" src={icon1} alt="icon bg"/>
                        </Grid>
                        <h2>{ props.t('contact.ContactNumberTitle') }</h2>
                        <ul>
                            <li>{header.contact_number ? header.contact_number : `${ props.t('contact.contact_number') }`}</li>
                        </ul>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={4} sm={6}>
                    <Grid className="cntItem">
                        <Grid className="iconBox">
                            <img className="icon" src={icon2} alt="icon bg"/>
                        </Grid>
                        <h2>{props.t('contact.EmailAddressTitle')}</h2>
                        <ul>
                            <li>{header.primary_email ? header.primary_email : 'user@yoursite.com'}</li>
                        </ul>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={4} sm={6}>
                    <Grid className="cntItem">
                        <Grid className="iconBox">
                            <img className="icon" src={icon3} alt="icon bg"/>
                        </Grid>
                        <h2>{props.t('contact.OfficeLocationTitle')}</h2>
                        <ul>
                            <li>{header.address ? header.address : `${props.t('contact.OfficeLocationAddress')}`}</li>
                        </ul>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    )
};

const mapStateToProps = state => {
    return {
        header: state.header
    }
};

export default connect(mapStateToProps)(withTranslation('common')(ContactInfoList));