'use client';
import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { projects } from '@/data/projects';
import { FiArrowUpRight } from 'react-icons/fi';

const Section = styled.section`padding: clamp(4rem, 8vw, 7rem) 1.5rem; background: ${({ theme }) => theme.colors.bg};`;
const Container = styled.div`max-width: 1120px; margin: auto;`;
const Label = styled.p`color: ${({ theme }) => theme.colors.accentDark}; font-family: ${({ theme }) => theme.fonts.mono}; font-size: .8rem; text-transform: uppercase; letter-spacing: .14em; margin-bottom: 1rem;`;
const Heading = styled.h2`font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 650; letter-spacing: -.04em; margin-bottom: 1rem;`;
const Description = styled.p`color: ${({ theme }) => theme.colors.textSecondary}; max-width: 650px;`;
const Filters = styled.div`
  display: flex; flex-wrap: wrap; gap: .5rem; margin: 2rem 0;
  button { padding: .75rem 1rem; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: 999px; color: ${({ theme }) => theme.colors.textSecondary}; min-height: 44px; }
  button[aria-pressed="true"] { background: ${({ theme }) => theme.colors.text}; color: ${({ theme }) => theme.colors.bg}; }
`;
const Grid = styled.div`
  display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.25rem;
  @media(max-width: 1000px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media(max-width: 640px) { grid-template-columns: 1fr; }
`;
const Card = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: 14px; overflow: hidden;
  background: ${({ theme }) => theme.colors.surface}; display: flex; flex-direction: column;
  transition: transform .2s ease, box-shadow .2s ease;
  &:hover { transform: translateY(-4px); box-shadow: ${({ theme }) => theme.colors.shadowLg}; }
`;
const Picture = styled.div`position: relative; aspect-ratio: 16/11; background: ${({ theme }) => theme.colors.bgSecondary}; img { object-fit: cover; object-position: top; }`;
const Content = styled.div`
  padding: 1.5rem; display: flex; flex-direction: column; flex: 1; gap: 1rem;
  h3 { font-size: 1.3rem; }
  p { color: ${({ theme }) => theme.colors.textSecondary}; font-size: .95rem; }
`;
const Meta = styled.div`display: flex; justify-content: space-between; gap: .5rem; color: ${({ theme }) => theme.colors.textSecondary}; font-size: .75rem;`;
const Tags = styled.div`
  display: flex; gap: .4rem; flex-wrap: wrap; margin-top: auto;
  span { border-radius: 6px; padding: .3rem .55rem; background: ${({ theme }) => theme.colors.bgSecondary}; color: ${({ theme }) => theme.colors.textSecondary}; font-size: .75rem; }
`;
const Link = styled.a`display: inline-flex; align-items: center; gap: .5rem; min-height: 44px; font-size: .9rem; font-weight: 600; color: ${({ theme }) => theme.colors.accentDark};`;
export default function Projects() {
  const { t } = useLanguage();
  const [category, setCategory] = useState('all');
  const categories = ['all', ...new Set(projects.map(project => project.category))];
  const visible = category === 'all' ? projects : projects.filter(project => project.category === category);
  return <Section id="projects" aria-labelledby="projects-heading"><Container>
    <Label>{t('projects.label')}</Label><Heading id="projects-heading">{t('projects.title')}</Heading><Description>{t('projects.description')}</Description>
    <Filters role="group" aria-label={t('overview.filterLabel')}>{categories.map(item => <button type="button" key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item === 'all' ? t('projects.all') : item}</button>)}</Filters>
    <Grid>{visible.map(project => {
      const realLink = project.link && project.link !== '#';
      return <Card key={project.id} lang="en">
        <Picture><Image src={project.image} alt={project.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 50vw" /></Picture>
        <Content><Meta><span>{project.category}</span><span>{project.year === 'Academic' ? t('overview.academic') : project.year}</span></Meta><h3>{project.title}</h3><p>{project.description}</p>
          <Tags>{project.tech.map(tech => <span key={tech}>{tech}</span>)}</Tags>
          <Link href={realLink ? project.link : '#contact'}>{realLink ? 'Open working demo' : t('overview.discuss')}<FiArrowUpRight aria-hidden="true" /></Link>
        </Content>
      </Card>;
    })}</Grid>
  </Container></Section>;
}
