import i18next from 'i18next';
import Cookies from 'js-cookie'
import common_br from "./translations/br/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
    interpolation: {escapeValue: false},  // React already does escaping
    lng: Cookies.get('lang') || 'en',                              // language to use
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        br: {
            common: common_br
        },
    },
});