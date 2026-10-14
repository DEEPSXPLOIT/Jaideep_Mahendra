'use client';
import styled from 'styled-components';
import {useLanguage} from '@/context/LanguageContext';
const Section=styled.section`max-width: 1200px; margin: auto; padding: 80px 32px; @media(max-width: 600px){padding: 60px 24px;}`;
const Top=styled.div`display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; margin-bottom: 32px; h2 {font-size: clamp(2.2rem,5vw,4rem); font-weight: 500; letter-spacing: -.055em;} span {font-size: .7rem; color: ${({theme})=>theme.colors.accentDark}; font-family: ${({theme})=>theme.fonts.mono};}`;
const Row=styled.article`
  display: grid; grid-template-columns: 40px 1fr 1fr; gap: 24px; padding: 28px 0; border-top: 1px solid ${({theme})=>theme.colors.border};
  >span {font-family: ${({theme})=>theme.fonts.mono}; font-size:.75rem; color: ${({theme})=>theme.colors.textMuted};} h3{font-size:1.2rem; font-weight:500; margin-bottom:10px;} p{font-size:.9rem; color:${({theme})=>theme.colors.textSecondary}; max-width:460px;}
  @media(max-width: 700px){grid-template-columns: 28px 1fr; gap:12px; >div:last-child{grid-column:2;}}
`;
const Tags=styled.div`display:flex; flex-wrap:wrap; align-content:center; gap:8px; span{padding:8px 12px; border:1px solid ${({theme})=>theme.colors.border}; border-radius:100px; font-size:.75rem; color:${({theme})=>theme.colors.textSecondary};}`;
export default function Skills(){const {t}=useLanguage();const tools=[['Troubleshooting','IT Infrastructure','Asset Management','Customer Support'],['ERP Administration','Inventory','Vendor Coordination','Process Automation'],['Python','SQL','REST APIs','Database Design','Reporting']];return <Section id="skills"><Top><h2>{t('skills.title')}</h2><span>03 / {t('skills.label')}</span></Top>{['frontend','backend','devops'].map((key,i)=><Row key={key}><span>0{i+1}</span><div><h3>{t('skills.'+key)}</h3><p>{t('skills.'+key+'Desc')}</p></div><Tags>{tools[i].map(tool=><span key={tool}>{tool}</span>)}</Tags></Row>)}</Section>;}
