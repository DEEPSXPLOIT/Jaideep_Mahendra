'use client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: clip;
    max-width: 100%;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    overflow-x: clip;
    max-width: 100%;
    transition: background-color 0.4s ease, color 0.4s ease;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 700;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.accent};
    color: #151710;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.bgSecondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.accentLight};
  }

  body::before {
    content: ''; position: fixed; inset: 0; z-index: -1; pointer-events: none;
    background-image: radial-gradient(${({theme})=>theme.colors.border} 1px, transparent 1px);
    background-size: 28px 28px; opacity: .25;
  }
  /* Noise overlay */
  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.015;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  }

  :focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.accentDark};
    outline-offset: 5px;
  }
  section[id], main[id] { scroll-margin-top: 100px; }
  .skip-link {
    position: fixed; top: 12px; left: 12px; z-index: 100002;
    padding: .75rem 1rem; border-radius: 8px;
    background: ${({ theme }) => theme.colors.surface};
    transform: translateY(-200%);
  }
  .skip-link:focus { transform: translateY(0); }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: .01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: .01ms !important;
    }
  }

  /* Section base styles */
  section {
    position: relative;
    overflow: hidden;
  }
`;

export default GlobalStyles;
