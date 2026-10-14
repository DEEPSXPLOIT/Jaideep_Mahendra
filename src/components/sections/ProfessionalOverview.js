'use client';
import styled from 'styled-components';
import { useLanguage } from '@/context/LanguageContext';
import { FiArrowUpRight } from 'react-icons/fi';

const Section = styled.section`
  padding: clamp(4rem, 8vw, 7rem) 1.5rem;
  background: ${({ theme }) => theme.colors.bg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;
const Container = styled.div`max-width: 1120px; margin: auto;`;
const Eyebrow = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.accentDark};
  font-size: .8rem; letter-spacing: .14em; text-transform: uppercase; margin-bottom: 1rem;
`;
const Intro = styled.div`
  display: grid; grid-template-columns: 1.2fr 1fr; gap: 3rem; align-items: start;
  h2 { font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 500; letter-spacing: -.04em; max-width: 650px; }
  p { color: ${({ theme }) => theme.colors.textSecondary}; }
  @media(max-width: 768px) { grid-template-columns: 1fr; gap: 1.5rem; }
`;
const Bottom = styled.div`
  display: flex; justify-content: space-between; gap: 1.5rem; flex-wrap: wrap;
  margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  a { display: inline-flex; align-items: center; gap: .6rem; font-weight: 600; color: ${({ theme }) => theme.colors.accentDark}; }
`;
export default function ProfessionalOverview() {
  const { t } = useLanguage();
  return <Section id="about" aria-labelledby="overview-heading">
    <Container>
      <Eyebrow>{t('about.label')}</Eyebrow>
      <Intro><h2 id="overview-heading">{t('overview.title')}</h2><p>{t('about.bio1').replace('{name}', 'Jaideep Mahendra')}</p></Intro>
      <Bottom><span>{t('overview.focus')}</span><a href="#projects">{t('hero.viewWork')}<FiArrowUpRight aria-hidden="true" /></a></Bottom>
    </Container>
  </Section>;
}
