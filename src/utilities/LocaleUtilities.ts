import EnUs from "../../resources/locales/en-us.json";

export class LocaleUtils {
    public static getLocalizedString(key: string) {
        const localeResource = this.selectLocale(SupportedLocales["en-us"]);
        return localeResource[key];
    }

    private static selectLocale(locale: SupportedLocales): Record<string, string> {
        switch (locale) {
            case SupportedLocales[locale]:
            default:
                return EnUs;
        }
    }
}

export enum SupportedLocales {
    "en-us" = "en-us"
}

