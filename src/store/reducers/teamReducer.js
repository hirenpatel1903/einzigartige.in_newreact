import {LOAD_TEAM_SUCCESSFUL} from "../actions/type";

const init = {};

const teamReducer = (state = init, action) => {
    switch (action.type) {
        case LOAD_TEAM_SUCCESSFUL: {
            return action.data;
        }
        default:
            return state;
    }
};
export default teamReducer;