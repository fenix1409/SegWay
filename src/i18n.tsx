import i18n from 'i18next';
import { initReactI18next } from "react-i18next";


import uz from './locales/uz/translation.json'
import en from './locales/en/translation.json'

i18n.use(initReactI18next).init({
    resources: {
        en: {translation: en},
        uz: {translation: uz}
    },
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
})

export default i18n