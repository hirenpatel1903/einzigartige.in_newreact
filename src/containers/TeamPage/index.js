import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import Footer from "../../components/Footer";
import BreadCrumb from "../../components/BreadCrumb";
import HireUs from "../../components/HireUs";

import Grid from "@material-ui/core/Grid";
import thumb1 from "../../images/team/team1.jpg";
import {loadTeamAction} from "../../store/actions/action";

import './style.scss';

const TeamPage = (props) => {
    useEffect(() => {
        props.loadTeamAction()
    }, []);

    const {team_list, team_banner_title} = props.team;
    return (
        <Fragment>
            <BreadCrumb
                pagename="Team"
                title={team_banner_title}
            />

            <Grid className="allTeam">
                <Grid container className="container">
                    {team_list !== undefined ? team_list.map(item => {
                        return (
                            <Grid key={item.id} item sm={6} md={4} xs={12}>
                                <Grid className="expertTeam mb-30">
                                    <Grid className="thumb">
                                        <img src={item.image} alt=""/>
                                    </Grid>
                                    <Grid className="content">
                                        <h4>{item.name}</h4>
                                        <p>{item.designation}</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                    }) : ''}
                </Grid>
            </Grid>

            <HireUs/>
            <Footer/>
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        team: state.team
    }
};

export default connect(mapStateToProps, {loadTeamAction})(TeamPage);