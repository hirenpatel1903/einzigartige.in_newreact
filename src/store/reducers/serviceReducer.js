import {LOAD_SERVICE_SUCCESSFUL} from "../actions/type";

const init = {};

const serviceReducer = (state = init, action) => {
    switch (action.type) {
        case LOAD_SERVICE_SUCCESSFUL: {
            return action.data;
        }
        default:
            return state;
    }
};

export default serviceReducer;