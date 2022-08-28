import React, {Fragment} from 'react';
import Grid from "@material-ui/core/Grid";
import FontAwesome from "../UiStyle/FontAwesome";

import './style.scss';

const Comments = ({comments_list}) => {
    return (
        <Grid className="commentArea">
            <h2>{comments_list !== undefined ? comments_list.length > 0 ? `${comments_list.length} Comments on this` : 'No Comments' : ''}</h2>
            {comments_list !== undefined ? comments_list.map(item => {
                return (
                    <Grid key={item.id} className="commentList">
                        <Grid className="commentCard">
                            <Grid className="thumb">
                                {item.name.split(' ').map(function (item) {
                                    return item[0]
                                }).join('')}
                            </Grid>
                            <Grid className="content">
                                <Grid className="cmntMetaTop">
                                    <h4>{item.name}</h4>
                                    <span>{item.created_at}</span>
                                </Grid>
                                <p>{item.comment}</p>
                            </Grid>
                        </Grid>
                    </Grid>
                )
            }) : ''}
        </Grid>
    )
};

export default Comments;