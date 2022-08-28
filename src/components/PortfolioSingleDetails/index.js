import React from 'react';
import Grid from "@material-ui/core/Grid";

// images
import picture from '../../images/portfolio/prtdetails/picture.jpg';
import picture1 from '../../images/portfolio/prtdetails/picture1.jpg';
import picture2 from '../../images/portfolio/prtdetails/picture2.jpg';
import picture3 from '../../images/portfolio/prtdetails/picture3.jpg'

import './style.scss';

const PortfolioSingleDetails = ({single_portfolio}) => {
    const {portfolio} = single_portfolio;
    return (
        <Grid className="portfolioSingleDetails">
            <Grid className="container" container spacing={4}>
                <Grid item xs={12}>
                    <Grid className="prtMetaTop">
                        <h2>{portfolio && portfolio.title}</h2>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid className="prtImages">
                        <Grid container spacing={4}>
                            {portfolio && portfolio.image.map((img, index) => {
                                return (
                                    <Grid key={index} item xs={12} md={6}><img src={img} alt="portfolioimages"/></Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid className="prtdRightContent">
                        <p>{portfolio && portfolio.description}</p>
                        <h5>Experiences</h5>
                        <p>{portfolio && portfolio.experience}</p>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default PortfolioSingleDetails;