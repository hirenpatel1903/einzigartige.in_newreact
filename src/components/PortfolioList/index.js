import React from 'react';
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import SectionTitle from "../SectionTitle";
import './style.scss';

const PortfolioList = ({portfolio_list}) => {
    return (
        <Grid className="portfolioListArea">
            <SectionTitle
                subtitle="Latest Portfolio"
                title="Some of our Portfolio"
                body="Consider us your team of problem-solvers. We treat every agency campaign with a unique approach "
            />
            <Grid className="container" container spacing={4}>
                <Grid item xs={12}>
                    <Grid className="portfolioList">
                        <Grid container spacing={4}>
                            {portfolio_list !== undefined ? portfolio_list.map(item => {
                                return (
                                    <Grid key={item.id} item xs={12} sm={6}>
                                        <Grid className="portSingle">
                                            <Grid className="thumb">
                                                <img src={item.image[0]} alt=""/>
                                            </Grid>
                                            <Grid className="content">
                                                <span>{item.category_name}</span>
                                                <h2><Link to={`/portfolio-single/${item.encrypt_id}`}>{item.title}</Link>
                                                </h2>
                                                <p>{item.description}</p>
                                                <Link to={`/portfolio-single/${item.encrypt_id}`}
                                                      className="cBtn cBtnRadius cBtnUppercase">Read
                                                    More</Link>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                )
                            }) : ''}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default PortfolioList;