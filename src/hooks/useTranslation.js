import { useContext } from "react";

import {
  LanguageContext,
  defaultLocale,
  locales,
} from "../contexts/LanguageContext";
import { langStrings } from "../lib/strings";

export default function useTranslation() {
  const [locale, setLocale] = useContext(LanguageContext);

  const t = (key) => {
    return langStrings[locale][key] || langStrings[defaultLocale][key] || "";
  };

  return { t, locale, setLocale, locales };
}
