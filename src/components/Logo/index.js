import React from 'react';
import {Link} from "react-router-dom";
import {Grid} from "@material-ui/core";
const Logo = ({isHeaderFix, logo, alt, link, className = '' }) => {
    return(
        <Grid className={`logo ${className}`}>
            <Link to={link}><img src={logo} className={isHeaderFix ? 'light' : ''} alt={alt}/></Link>
        </Grid>
    )
};

export default Logo;