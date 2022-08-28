import React from 'react';
import {Grid} from "@material-ui/core";

// images
import bgShape2 from '../../images/bg-shape2.png';

import './style.scss';

const Featured = ({className = '', features}) => {
    return (
        <Grid className={`featuredWrapper ${className}`}>
            <Grid
                container
                spacing={4}
                className="container xlg-pt-50"
            >
                {features !== undefined ? features.map(item => {
                    return (
                        <Grid key={item.id} item xs={12} md={4} sm={6}>
                            <Grid className={`featuredItem ${features.length - 1 === item.id ? 'active' : ''}`}>
                                <Grid className="icon">
                                    <img src={item.image} alt=""/>
                                </Grid>
                                <Grid className="content">
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                }) : ''}
            </Grid>
            <img className="bgShape2" src={bgShape2} alt="bgShape2"/>
        </Grid>
    )
};

export default Featured;