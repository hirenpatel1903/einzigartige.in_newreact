import {LOAD_ABOUT_SUCCESSFUL} from "../actions/type";

const init = {};

const aboutReducer = (state = init, action) => {
    switch (action.type) {
        case LOAD_ABOUT_SUCCESSFUL: {
            return action.data;
        }
        default:
            return state;
    }
};

export default aboutReducer;