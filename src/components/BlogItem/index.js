import React from 'react';
import Grid from "@material-ui/core/Grid";
import FontAwesome from "../UiStyle/FontAwesome";
import {Link} from "react-router-dom";

import './style.scss';

const BlogItem = ({item}) => {
    return (
        <Grid className="blogItem">
            <div className="thumb">
                <img src={item.image} alt="blog thumb"/>
            </div>
            <Grid className="content">
                <Grid className="metatop">
                    <span className="date"><FontAwesome name="calendar"/> {item.created_at} </span>
                </Grid>
                <h2><Link to={`/blog-details/${item.encrypt_id}`}>{item.title}</Link></h2>
                {/*<div dangerouslySetInnerHTML={{__html: item.description}}/>*/}
                <Link to={`/blog-details/${item.encrypt_id}`} className="cBtn cBtnRadius">Read More</Link>
            </Grid>
        </Grid>
    )
};

export default BlogItem;