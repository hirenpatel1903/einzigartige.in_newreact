import {LOAD_SINGLE_BLOG_SUCCESSFUL} from "../actions/type";

const init = {};

const singleBlogReducer = (state = init, action) => {
    switch (action.type) {
        case LOAD_SINGLE_BLOG_SUCCESSFUL: {
            return action.data;
        }
        default:
            return state;
    }
};

export default singleBlogReducer;