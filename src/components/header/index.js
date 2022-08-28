import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';
import {Grid} from "@material-ui/core";
import {Link, NavLink, withRouter} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import MobileMenu from "../MobileMenu";
import Hidden from "@material-ui/core/Hidden";
import Logo from "../Logo";

import {useTranslation} from 'react-i18next';
import Cookies from 'js-cookie'

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import logo from '../../images/logo.svg';
import en from '../../images/icon/flags/en.svg';
import br from '../../images/icon/flags/br.svg';

import './style.scss';

const Header = (props) => {
    const [showMobile, setShowMobile] = useState(false);

    useEffect(() => {

        let cookie = Cookies.get('lang');
        if (!cookie) {
            cookie = 'en';
            Cookies.set('lang', cookie);
            setLang(cookie);
        } else {
            setLang(Cookies.get('lang'));
        }

    }, []);
    const {t, i18n} = useTranslation();

    function handleClick(lang) {
        i18n.changeLanguage(lang);
        i18n.changeLanguage(lang);
    }

    const [lang, setLang] = React.useState('en');
    const handleChange = event => {
        i18n.changeLanguage(event.target.value);
        Cookies.set('lang', event.target.value);
        setLang(Cookies.get('lang'));
    };

    return (
        <Grid className={`header ${!props.fixHeader ? 'fixedHeader' : ''}`}>
            <Grid
                container
                alignItems="center">
                <Grid item xs={6} lg={2}>
                    <Logo
                        logo={props.header.logo ? props.header.logo : logo}
                        alt="Logo"
                        link="/home"
                        isHeaderFix={!props.fixHeader}
                    />
                </Grid>
                <Hidden mdDown>
                    <Grid item xs={12} md={7}>
                        <Grid className="mainMenu">
                            <List>
                                {props.menus !== undefined ? props.menus.map((item, i) => {
                                    return (
                                        <ListItem key={i}>
                                            <NavLink to={`/${item.slug}`} exact
                                                     className={props.location.pathname === '/' ? item.component === 'HomePage' ? 'active' : '' : ''}
                                                     activeClassName="active">{item.title}</NavLink>
                                        </ListItem>
                                    )
                                }) : ''}
                            </List>
                        </Grid>
                    </Grid>
                </Hidden>
                <Hidden xsDown>
                    <Grid item xs={3} lg={3} sm={4} container alignItems="center"
                          className="justify-md-flex-space-between" justify="flex-end">
                        <Button component={Link} to="/contact-us" className="cBtn cBtnOutline cBtnUppercase">Contact
                            Us</Button>
                        <FormControl className="languageSelector">
                            <Select value={lang} onChange={handleChange} displayEmpty className="languageSelect">
                                <MenuItem value="en"><img src={en} alt="language"/>en</MenuItem>
                                <MenuItem value="br"><img src={br} alt="language"/>br</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Hidden>
                <Hidden lgUp>
                    <Grid item xs={6} sm={2} className="text-right">
                        <Grid className={`humbergur ${showMobile ? 'show' : ''}`}
                              onClick={() => setShowMobile(!showMobile)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </Grid>
                    </Grid>
                </Hidden>
            </Grid>
            <MobileMenu showMobile={showMobile} setShowMobile={setShowMobile}/>
        </Grid>
    )
};

const mapStateToProps = state => {
    return {
        header: state.header,
        menus: state.header.menu_list,
    }
};

export default connect(mapStateToProps)(withRouter(Header));