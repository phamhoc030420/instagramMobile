import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import vi from './vi.json';
import en from './en.json';
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'vi',
  resources: {
    vi,
    en,
  },
  react: {
    useSuspense: false,
  },
});
export default i18n;
