import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { BtnLink, Container } from './styles/Globals';

const HeroWrapper = styled.section`
  padding-top: var(--header-height);
  .hero-inner{
    display: grid;
    grid-template-columns: 1fr 1fr;
    &__content{
      align-self: center;
      margin-top: -20px;
      h2{
        font-size: var(--h1-fs);
        line-height: var(--h1-lh);
        display: block;
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(98.94deg, var(--purple) 0.87%,  var(--light-blue) 57.85%);
        /* background: linear-gradient(90deg,#ffc83a,#ff008a 55%,#6100ff); */
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      } 
      p{
        max-width: 440px;
        margin: 20px 0 30px 0;
        color: #fff;
        font-weight: 300;
      }
    }
    &__img{
      position: relative;
      &--hnd{
        width: 400px;
        height: 600px;
        position: relative;
        mix-blend-mode: screen;
        z-index: 20;
        margin: auto;
      }
      &--bg{
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 2;
      }
    }
  }
  .hero-logo{
    margin-top: 50px;
    position: relative;
    z-index: 20;
    &__title{
      color: #938ca7;
      font-size: var(--body14-fs);
      line-height: var(--body14-lh);
      margin-bottom: 20px;
    }
    &__list{
      li {
        display: inline-block;
        &:not(:last-child){
          margin-right: 50px;
        }
      }
    }
  }
`



export default function Hero() {
  return(
    <HeroWrapper>
      <Container>
        <div className='hero-inner'>
          <div className='hero-inner__content'>
            <h2>We Ignite <br />Your Ideas</h2>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ut viverra velit urna, a posuere libero vestibulum eget, orci varius natoque penatibus et magnis dis parturient.</p>
              <BtnLink>
                <Link href="/"><a>Learn More</a></Link> 
              </BtnLink>
            </div>
          </div>
          <div className='hero-inner__img'>
            <div className='hero-inner__img--hnd'>
              <Image 
                src="/hand.png"
                alt="We ignite your future"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className='hero-inner__img--bg'>
              <Image 
                src="/bgblur-hero.png"
                alt="Blur image"
                width={1800}  
                height={1800} 
              />
            </div>
          </div>
        </div>
        <div className='hero-logo'>
          <p className="hero-logo__title">Our supporters work at amazing companies</p>
          <ul className="hero-logo__list">
            <li>
              <Image 
                src="/logos_saleforce.png" 
                alt="Ruby" 
                width={32}
                height={32}
              />
            </li>
            <li>
              <Image 
                src="/logos_shopify.png" 
                alt="Shopify" 
                width={120}
                height={32}
              />
            </li>
            <li>
              <Image 
                src="/logos_bigcommerce.png" 
                alt="Php" 
                width={120}
                height={32}
              />
            </li>
            <li>
              <Image 
                src="/logos_magento.png" 
                alt="React JS" 
                width={120}
                height={32}
              />
            </li>
            <li>
              <Image 
                src="/logos_kibo.png" 
                alt="Php" 
                width={120}
                height={32}
              />
            </li>
          </ul>
        </div>
      </Container>
    </HeroWrapper>
  )
}
