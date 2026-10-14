 'use client';
import {createContext,useContext,useEffect} from 'react';
import {getTranslation} from '@/i18n';

const englishContext={
  locale:'en',
  dir:'ltr',
  isRTL:false,
  t:key=>getTranslation('en',key),
  // Retain compatibility with unused legacy preference components.
  setLocale:()=>{},
};
const LanguageContext=createContext(englishContext);
export function LanguageProvider({children}){
  useEffect(()=>{
    document.documentElement.setAttribute('lang','en');
    document.documentElement.setAttribute('dir','ltr');
    try{localStorage.removeItem('portfolio-locale');}catch{}
  },[]);
  return <LanguageContext.Provider value={englishContext}>{children}</LanguageContext.Provider>;
}
export function useLanguage(){return useContext(LanguageContext);}
