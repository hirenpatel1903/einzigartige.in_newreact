import {LOAD_GALLERY_SUCCESSFUL} from "../actions/type";

const init = {};

const galleryReducer = (state = init, action) => {
    switch (action.type) {
        case LOAD_GALLERY_SUCCESSFUL: {
            return action.data;
        }
        default:
            return state;
    }
};

export default galleryReducer;