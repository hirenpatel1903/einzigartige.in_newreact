import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import FontAwesome from "../UiStyle/FontAwesome";
import Button from "@material-ui/core/Button";
import {withTranslation} from "react-i18next";
import Joi from "joi-browser";
import {toast} from "react-toastify";
import {postRequest} from "../../utils/request";

import footerBgShape from '../../images/footer-bg.svg';
import logo from '../../images/logo.svg';

import './style.scss';

const sociallinks = [
    {
        id: 1,
        name: 'facebook',
    },
    {
        id: 2,
        name: 'linkedin',
    },
    {
        id: 3,
        name: 'dribbble',
    },
    {
        id: 4,
        name: 'twitter',
    },
];

class Footer extends Component {

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

        const {header} = this.props;
        return (
            <Grid className="footerWrapper">
                <Grid container className="container" spacing={4}>
                    <Grid item xs={12} md={3}>
                        <Grid className="footerContact">
                            <Link to="/home"><img src={header.logo ? header.logo : logo} alt="logo"/></Link>
                            <p>{header.address ? header.address : '1nd Floor, No.21, 80-feet Road, Cadarso 19 bis, loft 2 28008 Madrid (USA)'}</p>
                            <ul>
                                <li>{header.contact_number ? header.contact_number : '202-555-0191'}</li>
                                <li>{header.primary_email ? header.primary_email : 'office23@gmail.com'}</li>
                            </ul>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={3} sm={6}>
                        <Grid className="widget haslpadding">
                            <h4 className="widgetTitle">{this.props.t('Footer.QuickLink')}</h4>
                            <ul className="quickLinks">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/about-us">About us</Link></li>
                                <li><Link to="/contact-us">Contact</Link></li>
                                <li><Link to="/marketing">Marketing</Link></li>
                            </ul>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={2} sm={6}>
                        <h4 className="widgetTitle">{this.props.t('Footer.Services')}</h4>
                        <ul className="quickLinks">
                            <li><Link to="/home">Faq</Link></li>
                            <li><Link to="/home">Customer Support</Link></li>
                            <li><Link to="/home">Privacy Policy</Link></li>
                            <li><Link to="/home">Careers</Link></li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={4} sm={6}>
                        <h4 className="widgetTitle">{this.props.t('Footer.Newsletter')}</h4>
                        <form className="ftNewsletter" onSubmit={this.submitHandler}>
                            <input
                                type="text"
                                name="email"
                                value={this.state.email}
                                onChange={this.changeHandler}
                                placeholder="Your Email"/>
                            <Button type="submit" className="cBtn">Send</Button>
                        </form>
                        <p className="error">{this.state.error.email ? this.state.error.email : ''}</p>
                        <ul className="socialLinks">
                            {sociallinks.map(item => {
                                return <li key={item.id}><Link to="/home"><FontAwesome name={item.name}/></Link></li>;
                            })}
                        </ul>
                    </Grid>
                </Grid>
                <Grid className="container">
                    <Grid className="footerBottom">
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <p>{this.props.t('Footer.Copyright')}</p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <img className="footerBgShape" src={footerBgShape} alt="footerBgShape"/>
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {
        header: state.header
    }
};

export default connect(mapStateToProps)(withTranslation('common')(Footer));