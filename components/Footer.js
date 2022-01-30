import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { ConatinerFluid } from './styles/Globals';

const FooterWrapper = styled.footer`
  padding: var(--pd-section) 0 60px 0;
  background: #090909;
  position: relative;
  z-index: 1;
  .footer__brand{
    text-align: center;
    font-size: var(--body14-fs);
    line-height: var(--body14-lh);
    grid-column: 1/4;
    margin-top: -158px;
    p {
      margin-bottom: 18px;
      color: rgba(255, 255, 255, 0.5);
    }
    ul {
      display: flex;
      justify-content: center;
      li {
        padding: 0 10px;
        a {
          opacity: 0.5;
          transition: 0.3s;
        }
      }
    }
  }
  .footer__right{
    grid-column: 4/13;
    &--top{
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      padding-bottom: 55px;
      margin-bottom: 55px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      .colfooter{
        font-size: var(--body14-fs);
        line-height: var(--body14-lh);
        .title{
          color: #fff;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 20px;
          position: relative;
          pointer-events: none;
        }
        .submenu{
          width: 100%;
          ul li:not(:last-child) a {
            padding-bottom: 15px;
            display: inline-block;
          }
          &.two-column ul li {
            float:left; 
            width:50%;
          }
        }
      }
    }
    &--bottom{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      .itemcontact{
        color: rgba(255, 255, 255, 0.5);
        max-width: 280px;
        label {
          color: rgba(255, 255, 255, 0.5);
          font-size: var(--body12-fs);
          line-height: var(--body12-lh);
          margin-bottom: 5px;
          display: block;
        }
        p {
          font-size: var(--body14-fs);
          line-height: var(--body14-lh);
        }
      }
    }
  }
`

export default function Footer(){
  return(
    <FooterWrapper>
      <ConatinerFluid isGrid>
        <div className='footer__brand'>
          <Link href="/">
            <a>
              <Image 
                src="/ignite_logo-v2.png" 
                alt="Ignite Logo" 
                objectFit='contain'
                width='100%'
                height={68}
              />
            </a>
          </Link>
          <p>{new Date().getFullYear()}  ©Copyright Ignite Labs<br/>All rights Reserved</p>
          <ul>
            <li>
              <a href="https://www.facebook.com/" target="__blank" aria-label="Instagram" rel="noopener">
                <Image 
                  src="/icons__facebook.svg" 
                  alt="Ignite Facebook"   
                  width={8}
                  height={16}
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="__blank" aria-label="Twitter" rel="noopener">
                <Image 
                  src="/icons__twitter.svg" 
                  alt="Ignite Twitter"
                  width={20}
                  height={16}
                />
              </a>
            </li>
          </ul>
        </div>
        <div className='footer__right'>
          <div className='footer__right--top'>
            <div className='colfooter'>
              <p className="title">Get in touch</p>
              <div className="submenu">
                <ul>
                  <li><a href="mailto:hello@phase3commerce.com">hello@phase3commerce.com</a></li>
                  <li><a href="tel:800-542-7162">Tel: 800-542-7162 </a></li>
                </ul>
              </div>
            </div>
            <div className='colfooter'>
              <p className="title">Meet Our Sister Companies</p>
              <div className="submenu two-column">
                <ul>
                  <li><a href="#" target="__blank" rel="noopener">The Plum Tree Group</a></li>
                  <li><a href="#" target="__blank" rel="noopener">Phase3 Commerce</a></li>
                  <li><a href="#" target="__blank" rel="noopener">WyzeFox</a></li>
                  <li><a href="#" target="__blank" rel="noopener">Fuse Digital</a></li>
                  <li><a href="#" target="__blank" rel="noopener">CommerceBlend</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='footer__right--bottom'>
            <div className='itemcontact'>
              <label>Head Office</label>
              <p>515 N State St, Chicago, IL 60654, EE. UU.</p>
            </div>
            <div className='itemcontact'>
              <label>San Jose, Costa Rica</label>
              <p>1209 Orange Street. Wilmington, DE 19801, United States</p>
            </div>
          </div>
        </div>
      </ConatinerFluid>
    </FooterWrapper>
  )
}