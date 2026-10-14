'use client';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Highlights from '@/components/sections/Highlights';
import ProfessionalOverview from '@/components/sections/ProfessionalOverview';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
export default function Home(){return <><Navbar/><a className="skip-link" href="#main-content">Skip to content</a><main id="main-content" tabIndex={-1}><Hero/><Highlights/><ProfessionalOverview/><Experience/><Projects/><Skills/><Contact/></main><Footer/></>;}
