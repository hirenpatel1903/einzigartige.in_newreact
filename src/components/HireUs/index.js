import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";

import './style.scss';

const HireUs = () => {
    return(
        <Grid className="sireUsWrapper">
            <Grid container className="container">
                <Grid item xs={12}>
                    <Grid className="content">
                        <h2>Talk to us <br/> Are you our next Expert Hero?</h2>
                        <Link to="/contact-us" className="cBtn cBtnRadius">Get in touch</Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default HireUs;