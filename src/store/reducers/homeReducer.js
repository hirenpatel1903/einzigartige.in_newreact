import {LOAD_HOME_SUCCESSFUL} from "../actions/type";

const init = {};

const homeReducer = (state = init, action) => {
    switch (action.type) {
        case LOAD_HOME_SUCCESSFUL: {
            return action.data;
        }
        default:
            return state;
    }
};

export default homeReducer