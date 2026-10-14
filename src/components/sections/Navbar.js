'use client';
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import {FiSun, FiMoon, FiMenu, FiX} from 'react-icons/fi';
import {useTheme} from '@/context/ThemeContext';
import {useLanguage} from '@/context/LanguageContext';
const Nav=styled.nav`
  position: fixed; inset: 20px 24px auto; max-width: 900px; margin: auto; z-index: 1000;
  border: 1px solid ${({theme})=>theme.colors.border}; border-radius: 100px;
  background: ${({theme})=>theme.colors.navBg}; backdrop-filter: blur(20px); padding: 10px 12px 10px 22px;
  display: flex; align-items: center; justify-content: space-between; gap: 1rem;
  @media(max-width: 600px) { inset: 14px 16px auto; padding-inline-start: 17px; }
`;
const Brand=styled.a`font-size: 1.3rem; background: linear-gradient(90deg,#f59e0b,#f472b6,#38bdf8); background-clip:text; -webkit-text-fill-color:transparent; font-family: ${({theme})=>theme.fonts.heading}; letter-spacing: -.05em; font-weight: 700; span { color: ${({theme})=>theme.colors.accentDark}; }`;
const Links=styled.div`
  display: flex; align-items: center; gap: 22px; font-size: .85rem; color: ${({theme})=>theme.colors.textSecondary};
  a:hover { color: ${({theme})=>theme.colors.text}; }
  @media(max-width: 1000px) { display: ${({$open})=>$open?'flex':'none'}; position: absolute; top: 70px; inset-inline: 0; padding: 24px; border-radius: 20px; background: ${({theme})=>theme.colors.surface}; border: 1px solid ${({theme})=>theme.colors.border}; flex-direction: column; align-items: stretch; a { padding: 7px; } }
`;
const Actions=styled.div`
  display: flex; align-items: center; gap: 8px;
  button { color: ${({theme})=>theme.colors.text}; width: 38px; height: 38px; display: grid; place-items: center; border-radius: 100px; }
  a { display: inline-flex; align-items: center; gap: 6px; padding: 12px 16px; border-radius: 100px; background: ${({theme})=>theme.colors.text}; color: ${({theme})=>theme.colors.bg}; font-size: .75rem; font-weight: 600; }
  .menu { display: none; } @media(max-width: 1000px) { .menu { display: grid; } } @media(max-width: 450px) { a { display: none; } }
`;
export default function Navbar(){
  const {t}=useLanguage(); const {isDark,toggleTheme}=useTheme(); const [open,setOpen]=useState(false);
  useEffect(()=>{ const close=e=>{if(e.key==='Escape')setOpen(false);}; window.addEventListener('keydown',close); return()=>window.removeEventListener('keydown',close);},[]);
  return <Nav aria-label={t('footer.quickLinks')}><Brand href="#hero" aria-label="Jaideep Mahendra">{t('hero.name')}</Brand><Links id="navigation-links" $open={open}>{['hero','about','experience','projects','skills','contact'].map(id=><a key={id} href={'#'+id} onClick={()=>setOpen(false)}>{id==='hero'?t('ref.home'):id==='highlights'?t('ref.highlights'):t('nav.'+id)}</a>)}</Links><Actions><button type="button" onClick={toggleTheme} aria-label={t('preferences.theme')}>{isDark?<FiSun/>:<FiMoon/>}</button><button className="menu" type="button" aria-label="Toggle navigation" aria-expanded={open} aria-controls="navigation-links" onClick={()=>setOpen(!open)}>{open?<FiX/>:<FiMenu/>}</button></Actions></Nav>;
}
