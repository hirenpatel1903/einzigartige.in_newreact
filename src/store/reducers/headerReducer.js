import {LOAD_HEADER_SUCCESSFUL} from "../actions/type";

const init = {};

const headerReducer = (state = init, action) => {
    switch (action.type) {
        case LOAD_HEADER_SUCCESSFUL: {
            return action.data;
        }
        default:
            return state;
    }
};

export default headerReducer;