import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { DEFAULT_LANGUAGE } from './constants';
import translationEN from './locales/en/translation.json';
import translationSW from './locales/sw/translation.json';

// the translations
const resources = {
    en: {
        translation: translationEN
    },
    sw: {
        translation: translationSW
    }
};

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: DEFAULT_LANGUAGE,
        debug: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
