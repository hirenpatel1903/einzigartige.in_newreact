import {LOAD_SINGLE_PORTFOLIO_SUCCESSFUL} from "../actions/type";

const init = {};

const singlePortfolioReducer = (state = init, action) => {
    switch (action.type) {
        case LOAD_SINGLE_PORTFOLIO_SUCCESSFUL: {
            return action.data;
        }
        default:
            return state;
    }
};

export default singlePortfolioReducer;