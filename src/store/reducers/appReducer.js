import {LOADING, LOADED} from "../actions/type";

const init = {
    loading: false,
    message: ''
};

const appReducer = (state = init, action) => {
    switch (action.type) {
        case LOADING: {
            return {
                ...state,
                loading: true
            };
        }
        case LOADED: {
            return {
                ...state,
                loading: false,
                message: action.data || 'Loaded Successfully',
            };
        }
        default:
            return state;
    }
};

export default appReducer