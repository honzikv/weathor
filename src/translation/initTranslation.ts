import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en'
import cs from './cs'

export default function initTranslation() {
    i18n.use(initReactI18next)
        .init({
            resources: {
                en: en,
                cs: cs,
            },
            lng: "en",
            fallbackLng: "en",
            interpolation: {
                escapeValue: false
            },
        })
}
