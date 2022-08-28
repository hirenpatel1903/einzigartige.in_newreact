import React, {Fragment, Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Grid from "@material-ui/core/Grid";
import Footer from "../../components/Footer";
import NewsLetter from "../../components/NewsLetter";
import Comments from "../../components/Comments";
import CommentForm from "../../components/CommentForm";
import FontAwesome from "../../components/UiStyle/FontAwesome";
import {Link} from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import {loadSingleBlogAction} from "../../store/actions/action";
import {
    FacebookShareButton, LinkedinShareButton, TwitterShareButton
} from 'react-share';

import './style.scss';

class BlogSingle extends Component {

    state = {
        id: ''
    };

    componentDidMount() {
        this.props.loadSingleBlogAction(this.props.match.params.id);
        this.setState({
            id: this.props.match.params.id
        })
    }

    static getDerivedStateFromProps(props, state) {
        if (state.id !== props.match.params.id) {
            state.id = props.match.params.id
            props.loadSingleBlogAction(props.match.params.id);

        }
        return true;
    }

    render() {
        const {singleBlog} = this.props;
        return (
            <Fragment>
                <BreadCrumb
                    title="Blog Details"
                />
                <Grid className="blogListsBanner pb-70">
                    <Grid className="container" container spacing={4}>
                        <Grid item xs={12} md={8}>
                            <div className="content textLeft">
                                <h2>{singleBlog.post && singleBlog.post.title}</h2>
                                <span className="date"><FontAwesome
                                    name="calendar"/>{singleBlog.post && singleBlog.post.created_at}</span>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className="container" container spacing={4}>
                    <Grid item xs={12} md={8}>
                        <Grid className="postDetails">
                            <img src={singleBlog.post && singleBlog.post.image} alt=""/>

                            <div dangerouslySetInnerHTML={{__html: singleBlog.post && singleBlog.post.description}}/>

                            <Grid className="shareBlogPost">
                                <h5>Share The Post</h5>
                                <ul className="socials">
                                    <li><FacebookShareButton url={window.location.href}><FontAwesome
                                        name="facebook"/></FacebookShareButton></li>
                                    <li><LinkedinShareButton url={window.location.href}><FontAwesome
                                        name="linkedin"/></LinkedinShareButton></li>
                                    <li><TwitterShareButton url={window.location.href}><FontAwesome
                                        name="twitter"/></TwitterShareButton></li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid className="sidebarArea">
                            {/*widget category*/}
                            <Grid className="widget widgetCategory">
                                <h3 className="widgetTitle">Categories</h3>
                                <ul className="widgetList">
                                    {singleBlog.cat_list !== undefined ? singleBlog.cat_list.map(item => {
                                        return <li key={item.id}><Link
                                            to={`/blog/${item.encrypt_id}`}>{item.title}<span>{item.total_blogs}</span></Link>
                                        </li>;
                                    }) : ''}
                                </ul>
                            </Grid>
                            {/*widget recent post*/}
                            <Grid className="widget widgetRecentPost">
                                <h3 className="widgetTitle">Recent Post</h3>
                                {singleBlog.recent_posts !== undefined ? singleBlog.recent_posts.map(item => {
                                    return (
                                        <Grid key={item.id} className="rcSinglePost">
                                            <div className="thumb">
                                                <img src={item.image} alt="thumb"/>
                                            </div>
                                            <div className="content">
                                                <h5><Link to={`/blog-details/${item.encrypt_id}`}>{item.title}</Link>
                                                </h5>
                                                <p className="date"><FontAwesome name="calendar"/>{item.created_at}</p>
                                            </div>
                                        </Grid>
                                    )
                                }) : ''}
                            </Grid>
                            {/*widget keyword*/}
                            <Grid className="widget widgetKeywords">
                                <h3 className="widgetTitle">Keywords</h3>
                                <Link to="/blog-details/1">business</Link>
                                <Link to="/blog-details/1">Design</Link>
                                <Link to="/blog-details/1">Agency</Link>
                                <Link to="/blog-details/1">Infography</Link>
                                <Link to="/blog-details/1">Design</Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container className="container" spacing={4}>
                    <Grid item xs={12} md={7}>
                        <Comments comments_list={singleBlog.comments_list}/>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <CommentForm blogId={singleBlog.post !== undefined ? singleBlog.post.id : ''}/>
                    </Grid>
                </Grid>
                <NewsLetter/>
                <Footer/>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        singleBlog: state.single_blog
    }
};

export default connect(mapStateToProps, {loadSingleBlogAction})(withRouter(BlogSingle));