import {
    LOAD_HOME_SUCCESSFUL,
    LOAD_ABOUT_SUCCESSFUL,
    LOADING,
    LOADED,
    LOAD_BLOG_SUCCESSFUL,
    LOAD_GALLERY_SUCCESSFUL,
    LOAD_TEAM_SUCCESSFUL,
    LOAD_SINGLE_BLOG_SUCCESSFUL,
    LOAD_SERVICE_SUCCESSFUL,
    LOAD_PORTFOLIO_SUCCESSFUL,
    LOAD_SINGLE_PORTFOLIO_SUCCESSFUL,
    LOAD_HEADER_SUCCESSFUL
} from "./type";
import {request} from "../../utils/request";

export const loadHeaderAction = data => dispatch => {
    dispatch({type: LOADING});
    request('header')
        .then(res => {
            dispatch({
                type: LOAD_HEADER_SUCCESSFUL,
                data: res.data,
            });
            dispatch({type: LOADED});
        })
        .catch(error => {
            dispatch({type: LOADED, data: error});
        });
};

export const loadHomeAction = data => dispatch => {
    dispatch({type: LOADING});
    request('home')
        .then(res => {
            dispatch({
                type: LOAD_HOME_SUCCESSFUL,
                data: res.data,
            });
            dispatch({type: LOADED});
        })
        .catch(error => {
            dispatch({type: LOADED, data: error});
        });
};
export const loadAboutAction = data => dispatch => {
    dispatch({type: LOADING});
    request('about-us')
        .then(res => {
            dispatch({
                type: LOAD_ABOUT_SUCCESSFUL,
                data: res.data,
            });
            dispatch({type: LOADED});
        })
        .catch(error => {
            dispatch({type: LOADED, data: error});
        });
};

export const loadBlogAction = data => dispatch => {
    dispatch({type: LOADING});
    if (data) {
        request(`blogs?cat=${data}`)
            .then(res => {
                dispatch({
                    type: LOAD_BLOG_SUCCESSFUL,
                    data: res.data,
                });
                dispatch({type: LOADED});
            })
            .catch(error => {
                dispatch({type: LOADED, data: error});
            });
    } else {
        request('blogs')
            .then(res => {
                dispatch({
                    type: LOAD_BLOG_SUCCESSFUL,
                    data: res.data,
                });
                dispatch({type: LOADED});
            })
            .catch(error => {
                dispatch({type: LOADED, data: error});
            });
    }
};

export const loadGalleryAction = data => dispatch => {
    dispatch({type: LOADING});
    request('gallery')
        .then(res => {
            dispatch({
                type: LOAD_GALLERY_SUCCESSFUL,
                data: res.data,
            });
            dispatch({type: LOADED});
        })
        .catch(error => {
            dispatch({type: LOADED, data: error});
        });
};

export const loadTeamAction = data => dispatch => {
    dispatch({type: LOADING});
    request('teams')
        .then(res => {
            dispatch({
                type: LOAD_TEAM_SUCCESSFUL,
                data: res.data,
            });
            dispatch({type: LOADED});
        })
        .catch(error => {
            dispatch({type: LOADED, data: error});
        });
};

export const loadSingleBlogAction = data => dispatch => {
    dispatch({type: LOADING});
    request(`blogs/${data}`)
        .then(res => {
            dispatch({
                type: LOAD_SINGLE_BLOG_SUCCESSFUL,
                data: res.data,
            });
            dispatch({type: LOADED});
        })
        .catch(error => {
            dispatch({type: LOADED, data: error});
        });
};

export const loadServiceAction = data => dispatch => {
    dispatch({type: LOADING});
    request('service')
        .then(res => {
            dispatch({
                type: LOAD_SERVICE_SUCCESSFUL,
                data: res.data,
            });
            dispatch({type: LOADED});
        })
        .catch(error => {
            dispatch({type: LOADED, data: error});
        });
};

export const loadPortfolioAction = data => dispatch => {
    dispatch({type: LOADING});
    request('portfolio')
        .then(res => {
            dispatch({
                type: LOAD_PORTFOLIO_SUCCESSFUL,
                data: res.data,
            });
            dispatch({type: LOADED});
        })
        .catch(error => {
            dispatch({type: LOADED, data: error});
        });
};

export const loadSinglePortfolioAction = data => dispatch => {
    dispatch({type: LOADING});
    request(`portfolio/${data}`)
        .then(res => {
            dispatch({
                type: LOAD_SINGLE_PORTFOLIO_SUCCESSFUL,
                data: res.data,
            });
            dispatch({type: LOADED});
        })
        .catch(error => {
            dispatch({type: LOADED, data: error});
        });
};

export const loadingAction = () => dispatch => {
    dispatch({
        type: LOADING,
    });
};

export const loadedAction = () => dispatch => {
    dispatch({
        type: LOADED,
    });
};
