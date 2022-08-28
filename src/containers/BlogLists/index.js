import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Footer from "../../components/Footer";
import NewsLetter from "../../components/NewsLetter";
import BlogItem from "../../components/BlogItem";

import './style.scss';
import FontAwesome from "../../components/UiStyle/FontAwesome";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import {loadBlogAction} from "../../store/actions/action";
import searchFilter from "../../utils/commonFunction";

class BlogLists extends Component {
    state = {
        search: '',
        id: ''
    };

    searchHandler = (e) => {
        this.setState({
            search: e.target.value
        })
    };

    submitHandler = (e) => {
        e.preventDefault();
    };

    componentDidMount() {
        this.props.loadBlogAction(this.props.match.params.id);
        this.setState({
            id: this.props.match.params.id
        })
    }

    static getDerivedStateFromProps(props, state) {
        if (state.id !== props.match.params.id) {
            state.id = props.match.params.id
            props.loadBlogAction(props.match.params.id);

        }
        return true;
    }

    render() {

        const {search} = this.state;

        return (
            <Fragment>
                <BreadCrumb
                    pagename="Awesome Blog"
                    title="We have nice blog's"
                />
                <Grid className="allblogs">
                    <Grid className="container" container spacing={4}>
                        <Grid item xs={12} md={8}>
                            {this.props.postList !== undefined ? this.props.postList.filter(row => searchFilter(row, search)).map(item => {
                                return (
                                    <BlogItem key={item.id} item={item}/>
                                )
                            }) : ''}
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Grid className="sidebarArea">
                                {/*widget search */}
                                <Grid className="widget widgetSearch">
                                    <form onSubmit={this.submitHandler}>
                                        <input onChange={this.searchHandler} type="text"
                                               placeholder="Search"/>
                                        <Button><FontAwesome name="search"/></Button>
                                    </form>
                                </Grid>
                                {/*widget category*/}
                                <Grid className="widget widgetCategory">
                                    <h3 className="widgetTitle">Categories</h3>
                                    <ul className="widgetList">
                                        {this.props.catList !== undefined ? this.props.catList.map(item => {
                                            return <li key={item.id}><Link
                                                to={`/blog/${item.encrypt_id}`}>{item.title}<span>{item.total_blogs}</span></Link>
                                            </li>;
                                        }) : ''}
                                    </ul>
                                </Grid>
                                {/*widget recent post*/}
                                <Grid className="widget widgetRecentPost">
                                    <h3 className="widgetTitle">Recent Post</h3>
                                    {this.props.recentPosts !== undefined ? this.props.recentPosts.map(item => {
                                        return (
                                            <Grid key={item.id} className="rcSinglePost">
                                                <div className="thumb">
                                                    <img src={item.image} alt="thumb"/>
                                                </div>
                                                <div className="content">
                                                    <h5><Link to={`/blog-details/${item.encrypt_id}`}>{item.title}</Link></h5>
                                                    <p className="date"><FontAwesome name="calendar"/>{item.created_at}
                                                    </p>
                                                </div>
                                            </Grid>
                                        )
                                    }) : ''}
                                </Grid>
                                {/*widget keyword*/}
                                <Grid className="widget widgetKeywords">
                                    <h3 className="widgetTitle">Keywords</h3>
                                    <Link to="/">business</Link>
                                    <Link to="/">Design</Link>
                                    <Link to="/">Agency</Link>
                                    <Link to="/">Infography</Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <NewsLetter className="pd-mt-40"/>
                <Footer/>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        catList: state.blog.cat_list,
        postList: state.blog.post_list,
        recentPosts: state.blog.recent_posts
    }
};

export default connect(mapStateToProps, {loadBlogAction})(withRouter(BlogLists));