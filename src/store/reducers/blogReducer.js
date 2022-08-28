import {LOAD_BLOG_SUCCESSFUL} from "../actions/type";

const init = {};

const blogReducer = (state = init, action) => {
    switch (action.type) {
        case LOAD_BLOG_SUCCESSFUL: {
            return action.data;
        }
        default:
            return state;
    }
};

export default blogReducer;