import { createGlobalStyle } from 'styled-components'
import Header from './Header'
import Hero from './Hero';
import Process from './OurProcess';
import Work from './OurWork';
import Partners from './OurPartners'
import AboutUs from './AboutUs';
import NewsLetter from './Newsletter';
import Footer from './Footer';
import Expertise from './OurExpertise';

const GlobalStyles = createGlobalStyle`
  html{
    /* Fonts */
    --h1-fs: 9.2rem;
    --h1-lh: 10rem;
    --h2-fs: 5.2rem;
    --h2-lh: 6rem;
    --h3-fs: 3.2rem;
    --h3-lh: 4.2rem;
    --h4-fs: 2.4rem;
    --h4-lh: 3.2rem;
    --h5-fs: 2rem;
    --h5-lh: 3rem;
    --body16-fs: 1.6rem;
    --body16-lh: 2.6rem;
    --body14-fs: 1.4rem;
    --body14-lh: 2.2rem;
    --body12-fs: 1.2rem;
    --body12-lh: 2rem;
    --body10-fs: 1rem;
    --body10-lh: 1.8rem;
    /* Base colors */
    --dark-blue: #100d26;
    --light-blue: #0033D3;
    --purple: #9B03F3;
    --black: #06071b;
    /* Backgrounds colors */
    --bg: var(--dark-blue);
    --fg: var(--light-blue);
    /* Layout */
    --header-height: 80px;
    --max-width: 1300px;
    --button-height: 56px;
    --pd-section: 120px;
    --gap: 30px;
    font-size: 62.5%;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
    font-kerning: none;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  body {
    background-color: var(--bg);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: var(--body16-fs);
    line-height: var(--body16-lh);
    color: #938ca7;
    padding: 0;
    margin: 0;
    width: 100%;
    max-width: 100%;
    margin: auto;
    overflow-x: hidden;
    text-transform: none;
  }
  body::-webkit-scrollbar {
    width: 10px;
  }
  body::-webkit-scrollbar-thumb {
    background: var(--purple);
    border-radius: 20px;
  }
  body::-webkit-scrollbar-track {
    background: var(--black);
  }
  a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.6);
  }
  ol, ul {
    list-style: none;
  }
  .sr-only{
    position: absolute;
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: fixed!important;
    clip: rect(1px,1px,1px,1px);
  }
`;

export default function Page({children}){
  return(
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Process />
      <Work />
      <Partners />
      <AboutUs />
      <Expertise />
      <NewsLetter />
      <main>{children}</main>
      <Footer />
    </>
  )
}