import React from 'react';
import {Switch} from 'react-router-dom';

// Route Setting
import HomePage from "../HomePage";
import AboutUs from "../AboutUs";
import Services from "../Services";
import TeamPage from "../TeamPage";
import Portfolio from "../Portfolio";
import Gallery from "../Gallery";
import PortfolioSingle from "../PortfolioSingle";
import BlogLists from "../BlogLists";
import BlogSingle from "../BlogSingle";
import ContactUsPage from "../ContactUsPage";

// Normal Route
import PrivateRoute from "../_PrivateRoute";

function componentShowRender(copm) {
    switch (copm) {
        case 'HomePage':
            return HomePage;
        case 'AboutUs':
            return AboutUs;
        case 'Services':
            return Services;
        case 'TeamPage':
            return TeamPage;
        case 'Portfolio':
            return Portfolio;
        case 'Gallery':
            return Gallery;
        case 'BlogLists':
            return BlogLists;
        case 'ContactUsPage':
            return ContactUsPage;
        default:
            return HomePage;
    }
}

export default function Routes(props) {
    return (
        <Switch>
            <PrivateRoute
                fixHeader={true}
                exact
                path="/"
                component={HomePage}
            />

            {props.menus !== undefined ? props.menus.map((menu, i) => {
                return (
                    <PrivateRoute
                        key={i}
                        fixHeader={menu.component === 'HomePage' ? true : ''}
                        exact
                        path={`/${menu.slug}`}
                        component={componentShowRender(menu.component)}
                    />
                )
            }) : ''}

            <PrivateRoute
                path="/portfolio-single/:id"
                component={PortfolioSingle}
            />
            <PrivateRoute
                exact
                path="/blog/:id"
                component={BlogLists}
            />
            <PrivateRoute
                path="/blog-details/:id"
                component={BlogSingle}
            />
            <PrivateRoute
                path="/contact-us"
                component={ContactUsPage}
            />

            <PrivateRoute
                exact
                fixHeader={true}
                component={HomePage}
            />
        </Switch>
    );
}
