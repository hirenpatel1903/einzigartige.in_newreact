import React from 'react';
import { withTranslation, Trans } from 'react-i18next';
import Grid from "@material-ui/core/Grid";

import abdtdotShape from '../../images/abdtdotshape.png';
import introLeft from '../../images/intro-left-image.jpg';

import './style.scss';

class AboutIntro extends React.Component {
    render(){


    const {
        about_feature_left_image,
        about_feature_title1,
        about_feature_title2,
        about_feature_title3,
        about_feature_title4,
        about_feature_des1,
        about_feature_des2,
        about_feature_des3,
        about_feature_des4,
    } = this.props.about;

    console.log(this.props)


    return (
        <Grid className="aboutIntroWrapper">
            <Grid
                container
                spacing={4}
                alignItems="center"
                className="container"
            >
                <Grid item xs={12} md={5}>
                    <Grid className="thumb">
                        <img src={about_feature_left_image ? about_feature_left_image : introLeft} alt="leftImage"/>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Grid className="introList">
                        <span>01</span>
                        <h4>{about_feature_title1 ? about_feature_title1 : 'Our History'}</h4>
                        <p>{about_feature_des1 ? about_feature_des1 : 'The making of WigWag. Exposing the secret behind the complex story behind the brand we all know and love.'}</p>
                    </Grid>
                    <Grid className="introList">
                        <span>02</span>
                        <h4>{about_feature_title2 ? about_feature_title2 : 'Our Principles'}</h4>
                        <p>{about_feature_des2 ? about_feature_des2 : 'Ready to solve problems and eager to apply new ideas. This is the brave territory where we come together, and it’s hard to get there if you’re not having fun'}</p>
                    </Grid>
                    <Grid className="introList">
                        <span>03</span>
                        <h4>{about_feature_title3 ? about_feature_title3 : 'Business success'}</h4>
                        <p>{about_feature_des3 ? about_feature_des3 : 'Ready to solve problems and eager to apply new ideas. This is the brave territory where we come together, and it’s hard to get there if you’re not having fun..'}</p>
                    </Grid>
                    <Grid className="introList">
                        <span>04</span>
                        <h4>{about_feature_title4 ? about_feature_title4 : 'Digital Solution'}</h4>
                        <p>{about_feature_des4 ? about_feature_des4 : 'Ready to solve problems and eager to apply new ideas. This is the brave territory where we come together, and it’s hard to get there if you’re not having fun..'}</p>
                    </Grid>
                </Grid>
            </Grid>
            <img src={abdtdotShape} alt="abdtdotShape" className="abdtdotShape"/>
        </Grid>
    )
    }
};

export default withTranslation('common')(AboutIntro); 