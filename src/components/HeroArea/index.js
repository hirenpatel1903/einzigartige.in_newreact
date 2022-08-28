import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import ModalVideo from 'react-modal-video';

import {withTranslation} from "react-i18next";

// images
import bgShape1 from '../../images/bg-shape1.png';
import Shape2 from '../../images/shape1.png';

import './style.scss';

class HeroArea extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false
        };
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({isOpen: true})
    }

    render() {

        const {home_banner_sub_title, home_banner_title, home_banner_des, home_banner_image} = this.props.hero;
        return (
            <Grid className="heroAreaWapper">
                <Grid
                    container
                    alignItems="center"
                    className="container">
                    <Grid item xs={12} md={6}>
                        <Grid className="heroContent">
                            <strong>{home_banner_sub_title ? home_banner_sub_title : `${this.props.t('Home.HeroArea.SubTitle')}`}</strong>
                            <h2>{home_banner_title ? home_banner_title : `${this.props.t('Home.HeroArea.Title')}`}</h2>
                            <p>{home_banner_des ? home_banner_des : `${this.props.t('Home.HeroArea.Description')}`}</p>
                            <Link to="/about-us" className="cBtn">{this.props.t('Home.HeroArea.ButtonText')}</Link>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid className="hrRighThumb">
                            <img src={home_banner_image ? home_banner_image : Shape2} alt="home_banner_image"/>
                        </Grid>
                    </Grid>
                </Grid>
                <img className="bgShape1" src={bgShape1} alt="shape"/>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='DGQwd1_dpuc'
                            onClose={() => this.setState({isOpen: false})}/>
            </Grid>
        )
    }
}

export default withTranslation('common')(HeroArea);