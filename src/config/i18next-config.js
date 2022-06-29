import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector"; //Con esto le dejamos a i18next la tarea de definir el lenguaje por defecto
import { initReactI18next } from "react-i18next";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: "es", //Lenguaje por defecto si no existe la traducción para X cadena en el lenguaje actual.
      returnObjects: true,
      joinArrays: "\n",
      resources: {
        //Acá van las traducciones, básicamente.
        es: {},
        en: {}
      }
    })