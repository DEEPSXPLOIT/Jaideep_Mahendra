import {en} from './en';
export const locales={en};
export const localeList=[{code:'en',name:'English',flag:'/flags/en.svg'}];
export function detectLocale(){return 'en';}
export function getTranslation(_locale,key){
  let value=en;
  for(const part of key.split('.')){
    if(value&&typeof value==='object'&&part in value)value=value[part];
    else return key;
  }
  return value;
}
