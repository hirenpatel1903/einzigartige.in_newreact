import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import store from './store';

import './css/font-awesome.min.css';
import './fonts/futura.css';
import './common.scss';
import 'react-modal-video/scss/modal-video.scss';
import "slick-carousel/slick/slick.css";
import 'react-id-swiper/lib/styles/scss/swiper.scss';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import './i18n';

ReactDOM.render(
    <Provider store={store}>
        <I18nextProvider i18n={i18next}>
            <App/>
        </I18nextProvider>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
