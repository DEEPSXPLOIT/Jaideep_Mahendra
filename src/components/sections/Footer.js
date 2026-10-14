'use client';
import styled from 'styled-components';
import {FiArrowUpRight,FiArrowUp} from 'react-icons/fi';
import {useLanguage} from '@/context/LanguageContext';
const Footer=styled.footer`
  max-width:1200px; margin:auto; padding:40px 32px 28px; border-top:1px solid ${({theme})=>theme.colors.border};
  >a{display:flex;align-items:center;justify-content:space-between;gap:1rem;font-size:clamp(2rem,6vw,5rem);letter-spacing:-.055em;font-weight:500;padding-bottom:40px;} >a svg{color:${({theme})=>theme.colors.accentDark};}
  div{display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap;color:${({theme})=>theme.colors.textMuted};font-size:.75rem;} button{color:inherit;display:flex;align-items:center;gap:8px;padding:10px;}
  @media(max-width:600px){padding-inline:24px;}
`;
export default function SiteFooter(){const {t}=useLanguage();return <Footer><a href="mailto:jaideepmahendrababu@gmail.com">{t('nav.letsTalk')}<FiArrowUpRight aria-hidden="true"/></a><div><span>© {new Date().getFullYear()} Jaideep Mahendra</span><span>IT Operations / Supply Chain</span><button type="button" onClick={()=>document.getElementById('hero')?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}>{t('footer.backToTop')}<FiArrowUp aria-hidden="true"/></button></div></Footer>;}
