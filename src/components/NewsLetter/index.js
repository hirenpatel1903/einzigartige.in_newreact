import React, {Component} from 'react';
import axios from 'axios';
import Grid from "@material-ui/core/Grid";
import './style.scss';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import Joi from "joi-browser";
import {toast} from "react-toastify";
import Hidden from "@material-ui/core/Hidden";
import {withTranslation} from 'react-i18next';
import {postRequest} from "../../utils/request";

class NewsLetter extends Component {

    state = {
        email: '',
        error: {},
    };

    schema = {
        email: Joi.string()
            .required()
            .email()
            .error(errors => {
                errors.forEach(err => {
                    switch (err.type) {
                        case 'string.email':
                            err.message = 'Email Must be Email Format';
                            break;
                        case 'any.required':
                            err.message = 'Email is Requared';
                            break;
                        default:
                            break;
                    }
                });
                return errors;
            }),
    };

    changeHandler = event => {
        const error = {...this.state.error};
        const errorMassage = this.validationProperty(event);
        if (errorMassage) {
            error[event.target.name] = errorMassage;
        } else {
            delete error[event.target.name];
        }
        this.setState({
            [event.target.name]: event.target.value,
            error,
        });
    };


    validationProperty = event => {
        const Obj = {[event.target.name]: event.target.value};
        const schema = {[event.target.name]: this.schema[event.target.name]};
        const {error} = Joi.validate(Obj, schema);
        return error ? error.details[0].message : null;
    };

    validate = () => {
        const options = {abortEarly: false};
        const form = {
            email: this.state.email,
        };
        const {error} = Joi.validate(form, this.schema, options);
        if (!error) return null;

        const errors = {};
        for (const item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };

    submitHandler = event => {
        event.preventDefault();
        const error = this.validate();
        this.setState({
            error: error || {},
        });
        if (!error) {

            postRequest('subscription-process', {
                email: this.state.email
            })
                .then(res => {
                    if (res.data.success !== false) {
                        toast.success(res.data.message);
                        this.setState({
                            email: '',
                        })
                    } else {
                        toast.error(res.data.message);
                    }
                })
                .catch(error => {
                    console.log(error)
                    toast.error('Not Send!');
                });
        }
    };

    render() {
        const {email} = this.state;
        const {className} = this.props;
        return (
            <Grid className={`newsLetter ${className}`}>
                <Grid container className="container" spacing={4}>
                    <Hidden smDown><Grid item xs={12} md={2}></Grid></Hidden>
                    <Grid item xs={12} md={8}>
                        <Grid className="content">
                            <strong>{this.props.t('newsLetter.SubTitle')}</strong>
                            <h2>{this.props.t('newsLetter.Title1')} <span>{this.props.t('newsLetter.Title2')}</span>
                            </h2>
                            <p>{this.props.t('newsLetter.Description')}</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container className="container" spacing={4}>
                    <Hidden smDown><Grid item xs={12} md={2}></Grid></Hidden>
                    <Grid item xs={12} md={8}>
                        <Grid className="nwslRight">
                            <h5>{this.props.t('newsLetter.SubscribtionNotice')}<span>{this.props.t('newsLetter.SubscribtionNoticeDay')}</span>
                            </h5>
                            <form onSubmit={this.submitHandler}>
                                <input
                                    name="email"
                                    onChange={this.changeHandler}
                                    type="text"
                                    value={email}
                                    placeholder="Your email"/>
                                <p className="error">{this.state.error.email ? this.state.error.email : ''}</p>
                                <Button type="submit">Subscribe</Button>
                            </form>
                            <Link to="/">Discover More work</Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withTranslation('common')(NewsLetter);