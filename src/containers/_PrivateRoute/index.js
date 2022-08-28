import React, {Component, Fragment} from 'react';
import Header from "../../components/header";
import {Route} from "react-router-dom";

export class PrivateRoute extends Component {
    render() {
        const Component = this.props.component;
        return (
            <Fragment>
                <Header fixHeader={this.props.fixHeader}/>
                <Route {...this.props} render={props => <Component {...props} />}/>
            </Fragment>
        );
    }
}

export default PrivateRoute;
