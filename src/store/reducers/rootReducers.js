import {combineReducers} from 'redux'

import appReducer from "./appReducer";
import homeReducer from "./homeReducer";
import aboutReducer from "./aboutReducer";
import blogReducer from "./blogReducer";
import teamReducer from "./teamReducer";
import singleBlogReducer from "./singleBlogReducer";
import serviceReducer from "./serviceReducer";
import portfolioReducer from "./portfolioReducer";
import singlePortfolioReducer from "./singlePortfolioReducer";
import headerReducer from "./headerReducer";
import galleryReducer from "./galleryReducer";

const rootReducer = combineReducers({
    app: appReducer,
    header: headerReducer,
    home: homeReducer,
    about: aboutReducer,
    blog: blogReducer,
    team: teamReducer,
    single_blog: singleBlogReducer,
    service: serviceReducer,
    portfolio: portfolioReducer,
    single_portfolio: singlePortfolioReducer,
    gallery: galleryReducer,
});

export default rootReducer;