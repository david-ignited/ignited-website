import Image from 'next/image';
import styled from 'styled-components';
import { Container } from './styles/Globals';

const NewsLetterWrapper = styled.section`
  --nl-border-opacity: 0.05;
  --nl-bg-opacity: 0.05;
  padding: var(--pd-section) 0 var(--pd-section);
  background: rgba(43, 27, 78, 0.4);
  padding-bottom: 100px;
  position: relative;
  z-index: 5;
  .newsletter-inner{
    position: relative;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(12,1fr);
    grid-gap: var(--gap);
    gap: var(--gap);
    align-items: center;
    width: 100%;
    &__heading{
      grid-column: 2/span 3;
      h2{
        color: #fff;
        font-size: var(--h3-fs);
        line-height: var(--h3-lh);
        font-weight: 300;
        max-width: 300px;
      }
    }
    &__img{
      grid-column: 5/span 2;
    }
    &__form{
      grid-column: 7/span 5;
      display: flex;
      position: relative;
      align-items: center;
      justify-content: center;
      input {
        color: #fff;
        font-size: 2rem;
        outline: none;
        width: 100%;
        border: none;
        border-radius: 50px;
        padding: 1.6rem 6.4rem 1.6rem 3rem;
        background: rgba(255, 255, 255, 0.1);
        line-height: 3.2rem;
        &::placeholder{
          transition: color .15s ease-out;
          color: rgba(255, 255, 255, 0.5);
        }
        &:hover::placeholder{
          color: rgba(255, 255, 255, 1);
        }
      }
      button{
        position: absolute;
        right: 0;
        width: 6.4rem;
        appearance: none;
        background: none;
        border: none;
        padding: 1.6rem ;
        border-radius: 0.5rem;
        cursor: pointer;
        outline: none;
        svg{
          display: block;
          height: 3.2rem;
          fill: #666;
          transition: fill .15s ease-out, transform .15s ease-out;
        }
        &:hover svg{
          fill: #fff;
        }
      }
    }
  }
`

export default function NewsLetter() {
  return(
    <NewsLetterWrapper>
      <Container>
        <div className='newsletter-inner'>
          <div className='newsletter-inner__heading'>
            <h2>Make your projects a reality with us!</h2>
          </div>
          <div className='newsletter-inner__img'>
            <Image 
              src="/mail-dynamic-premium.png" 
              alt="News letter" 
              objectFit='contain'
              width={150}
              height={118}
            />
          </div>
          <div className="newsletter-inner__form">
            <input id="field-email" name="email" type="email" placeholder="Your email here" required="required" />
            <button type="submit">
              <svg width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 13C0.947715 13 0.499999 12.5523 0.499999 12C0.499999 11.4477 0.947714 11 1.5 11L1.5 13ZM22.25 12L22.9571 11.2929L23.6642 12L22.9571 12.7071L22.25 12ZM15.4571 20.2071C15.0666 20.5976 14.4334 20.5976 14.0429 20.2071C13.6524 19.8166 13.6524 19.1834 14.0429 18.7929L15.4571 20.2071ZM14.0429 5.20711C13.6524 4.81658 13.6524 4.18342 14.0429 3.79289C14.4334 3.40237 15.0666 3.40237 15.4571 3.79289L14.0429 5.20711ZM1.5 11L22.25 11L22.25 13L1.5 13L1.5 11ZM22.9571 12.7071L15.4571 20.2071L14.0429 18.7929L21.5429 11.2929L22.9571 12.7071ZM15.4571 3.79289L22.9571 11.2929L21.5429 12.7071L14.0429 5.20711L15.4571 3.79289Z"></path>
              </svg>
              <span className="sr-only">Submit</span>
            </button>
          </div>
        </div>
      </Container>
    </NewsLetterWrapper>
  )
}
