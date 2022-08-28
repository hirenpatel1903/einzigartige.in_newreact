import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Joi from "joi-browser";
import {toast} from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import './style.scss';
import {postRequest} from "../../utils/request";

class CommentForm extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        error: {},
    };

    schema = {
        name: Joi.string()
            .required(),
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
        message: Joi.string()
            .required()
            .error(errors => ({
                message: 'Please Provide a Message',
            })),
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
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
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

        let comment = {
            blog_id: this.props.blogId,
            name: this.state.name,
            email: this.state.email,
            comment: this.state.message,
        };

        if (!error) {
            postRequest('save-blog-comment', comment)
                .then(res => {
                    toast.success(res.data.message);
                    this.setState({
                        name: '',
                        email: '',
                        message: '',
                    })
                })
                .catch(error => console.log(error));
        }
    };

    render() {
        const {name, email, message} = this.state;
        return (
            <Grid className="commentForm">
                <h2>Leave a comment here</h2>
                <form onSubmit={this.submitHandler}>
                    <Grid
                        spacing={2}
                        container>
                        <Grid item xs={12}>
                            <TextField
                                name="name"
                                value={name}
                                helperText={
                                    this.state.error.name ? this.state.error.name : ''
                                }
                                placeholder="Name"
                                className="inputStyleBasic"
                                variant="outlined"
                                onChange={this.changeHandler}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="email"
                                helperText={
                                    this.state.error.email ? this.state.error.email : ''
                                }
                                value={email}
                                placeholder="Email"
                                className="inputStyleBasic"
                                variant="outlined"
                                onChange={this.changeHandler}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                multiline
                                helperText={
                                    this.state.error.message ? this.state.error.message : ''
                                }
                                value={message}
                                className="inputStyleBasic"
                                name="message"
                                placeholder="Your comment"
                                variant="outlined"
                                onChange={this.changeHandler}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" className="cBtn mt-20">Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        );
    }
}

export default CommentForm;