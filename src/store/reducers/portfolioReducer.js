import {LOAD_PORTFOLIO_SUCCESSFUL} from "../actions/type";

const init = {};

const portfolioReducer = (state = init, action) => {
    switch (action.type) {
        case LOAD_PORTFOLIO_SUCCESSFUL: {
            return action.data;
        }
        default:
            return state;
    }
};

export default portfolioReducer;