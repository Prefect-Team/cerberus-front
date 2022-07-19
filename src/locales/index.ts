import { i18n } from "@lingui/core";
import { OHMLocaleSwitcherProps } from "@olympusdao/component-library";
import { en, ko } from "make-plural/plurals";
// import { en, ko, ja, th } from "make-plural/plurals";

// Declare locales
interface ILocale {
  flag: OHMLocaleSwitcherProps["locales"]["locale"]["flag"];
  plurals: (n: number | string, ord?: boolean) => "zero" | "one" | "two" | "few" | "many" | "other";
  direction: "inherit" | "rtl";
}
interface ILocales {
  [locale: string]: ILocale;
}
export const locales: ILocales = {
  en: { flag: "gb", plurals: en, direction: "inherit" },
  ko: { flag: "kr", plurals: ko, direction: "inherit" },
  // ja: { flag: "ja", plurals: ja, direction: "inherit" },
  // th: { flag: "th", plurals: th, direction: "inherit" },
};
// Create translations style element
const translations_style_dom = document.createElement("style");
translations_style_dom.type = "text/css";
document.getElementsByTagName("head")[0].appendChild(translations_style_dom);

// Load locale data
for (const [key, locale] of Object.entries(locales)) {
  i18n.loadLocaleData(key, { plurals: locale.plurals });
}

export async function fetchLocale(locale = "en") {
  const { messages } = await import(
    /* webpackChunkName: "[request]" */ `../locales/translations/mbtc-frontend/${locale}/messages`
  );
  i18n.load(locale, messages);
  i18n.activate(locale);
  translations_style_dom.innerHTML = `.MuiTypography-root { direction: ${locales[locale].direction}; !important}`;
}
export function selectLocale(locale: string) {
  window.localStorage.setItem("locale", locale);
  return fetchLocale(locale);
}
export function initLocale() {
  let locale = window.localStorage.getItem("locale") as string;
  if (!Object.keys(locales).includes(locale)) locale = "en";
  fetchLocale(locale);
}
