import countries from 'i18n-iso-countries';

import en from 'i18n-iso-countries/langs/en.json';
import cs from 'i18n-iso-countries/langs/cs.json';

export const useCountries = (code: string | null) => {
  countries.registerLocale(en);
  countries.registerLocale(cs);
  const locale = navigator.languages[0].substring(0, 2);
  return code ? countries.getName(code.toLocaleLowerCase(), locale) : undefined;
};
