import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {ToastContainer} from 'react-toastify';
import Cookies from 'js-cookie'
import 'react-toastify/dist/ReactToastify.css';
import Routes from "../__Routes";
import CookieAlert from "../../components/CookieAlert";
import styled from 'styled-components';
import {loadHeaderAction} from "../../store/actions/action";

import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';


function colorFunc(color, secondpam = '') {
    if (color === '' || color === undefined) {
        return `#0EC64E${secondpam}!important`
    }
    return `${color}${secondpam}!important`;
}

function colorTextFunc(color, secondpam = '') {
    if (color === '' || color === undefined) {
        return `#0EC64E${secondpam}`
    }
    return `${color}${secondpam}`;
}

const StyledComponent = styled.div`
        & .heroAreaWapper .heroContent strong,
        & .header .mainMenu ul li a:hover,
        & .header .mainMenu ul li a.active,
        & .cBtnOutline,
        & .textContent strong,
        & .sectionTitle strong,
        & .expertTeam:hover .content h4,
        & .BlogSection .singleBlog .content h4 a:hover,
        & .footerWrapper .quickLinks li a:hover,
        & .footerWrapper .quickLinks li a.active,
        & .portfolioListArea .portfolioList .portSingle .content h2 a:hover,
        & .portfolioListArea .portfolioList .portSingle .content span,
        & .newsLetter .content strong,
        & .newsLetter .content h2 span,
        & .newsLetter .nwslRight h5 span,
        & .header.fixedHeader .mainMenu .hasSubMenu.active, .header.fixedHeader .mainMenu .hasSubMenu li a:hover,
        & .header.fixedHeader .mainMenu .hasSubMenu.active, .header.fixedHeader .mainMenu .hasSubMenu li a.active,
        & .sidebarArea .widgetSearch form button,
        & .sidebarArea .widgetCategory .widgetList li a:hover,
        & .sidebarArea .widgetRecentPost .rcSinglePost h5 a:hover,
        & .sidebarArea .widgetKeywords a:hover,
        & .blogItem .content h2 a:hover,
        & .shareBlogPost .socials li div
        {
            color: ${props => colorFunc(props.primaryColor)};
        }
        
        & .cBtn,
        & .header .languageSelector,
        & .featuredWrapper .featuredItem .icon:before,
        & .inputStyleBasic > div.Mui-focused fieldset,
        & .newsLetter .nwslRight a,
        & .sidebarArea .widgetSearch form input,
        & .sidebarArea .widgetKeywords a:hover,
        & .shareBlogPost .socials li div
        {
            border-color: ${props => colorFunc(props.primaryColor)};
        }
        
        & .featuredWrapper .featuredItem:hover,
        & .featuredWrapper .featuredItem.active,
        & .aboutIntroWrapper .introList:hover > span,
        & .newsLetter .nwslRight form button,
        & .sidebarArea .widgetCategory .widgetList li a span,
        & .shareBlogPost .socials li div:hover,
        & .commentArea .commentList .commentCard .thumb
        {
            background: ${props => colorFunc(props.primaryColor)};
        }
        
        & .shareBlogPost .socials li div:hover{
            color: #ffffff!important;
        }
        
        & .portfolioFilter button:hover,
        & .portfolioFilter button.active{
            background: linear-gradient(45deg, ${props => colorTextFunc(props.primaryColor, 'b3')}, ${props => colorTextFunc(props.primaryColor)})!important;
        }
        
        & .header.fixedHeader .cBtn{
            background: #ffffff!important;
            color: ${props => colorFunc(props.primaryColor)};
            &:hover{
                color: #ffffff!important;
                border-color: #ffffff!important;
                background: ${props => colorFunc(props.primaryColor)};
            }
        }
        
        & .newsLetter .nwslRight a
        {
            color:  ${props => colorFunc(props.primaryColor, 'b3')};
        }
        
        & .header.fixedHeader .mainMenu ul li a.active, .header.fixedHeader .mainMenu ul li a:hover {
            color: #0b0b29 !important;
        }
        
        & .breadCrumb{
            background: linear-gradient(45deg, ${props => colorTextFunc(props.primaryColor, 'b3')}, ${props => colorTextFunc(props.primaryColor)})!important;
        }
        
        & .featuredWrapper .featuredItem {
            & .icon{
                background: ${props => colorFunc(props.primaryColor, '26')};
            }
            &:hover .icon{
                background: #ffffff!important;
            }
        }
        
        & .cBtn{
            background: ${props => colorFunc(props.primaryColor)};
            &:hover{
                background: #ffffff!important;
                color: ${props => colorFunc(props.primaryColor)};
            }
        }
        & .cBtnOutline {
            background: transparent!important;
            &:hover{
                background: ${props => colorFunc(props.primaryColor)};
                color: #ffffff!important;
            }
        }
    `;

const theme = createMuiTheme({
    direction: 'rtl',
});


const App = (props) => {

    const [cookieAlert, setAlertVisible] = useState(true);

    useEffect(() => {
        props.loadHeaderAction();
        const cookieA = Cookies.get('cookie_alert');
        if (cookieA === 'false') {
            setAlertVisible(false)
        }
    }, []);

    function dissableAlertCookie() {
        setAlertVisible(false);
        Cookies.set('cookie_alert', false);
    }


    return (
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <StyledComponent primaryColor={props.themeColor}>
                    <div className="App">
                        <Switch>
                            <Routes menus={props.menus}/>
                        </Switch>
                        <ToastContainer/>
                        {cookieAlert ?
                            <CookieAlert dissableAlertCookie={dissableAlertCookie}
                                         setAlertVisible={setAlertVisible}/> : ''}
                    </div>
                </StyledComponent>
            </BrowserRouter>
        </MuiThemeProvider>
    );
}

const mapStateToProps = state => {
    return {
        isLoading: state.app.loading,
        themeColor: state.header.front_base_color,
        menus: state.header.menu_list,
    }
};

export default connect(mapStateToProps, {loadHeaderAction})(App);
