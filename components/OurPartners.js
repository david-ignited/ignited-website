import Image from 'next/image';
import styled from 'styled-components';
import { Container, H2 } from './styles/Globals';
import { device } from './utils/breakpoints';

const PartnersWrapper = styled.section`
  padding: calc(var(--pd-section) / 2) 0 var(--pd-section);
  .partners-inner{
    position: relative;
    &__heading{
      max-width: 820px;
      margin: auto;
      text-align: center;
      h3{
        color: #fff;
        font-weight: 500;
        font-size: var(--h3-fs);
        line-height: var(--h3-lh);
        opacity: .5;
      }
    }
    &__grid{
      display: grid;
      grid-template-columns: repeat(2, auto);
      grid-gap: 60px;
      margin-left: var(--gap);
      margin-right: var(--gap);
      position: relative;
      place-items: center;
    }
  }
  @media ${device.mobileL}{
    .partners-inner{
      &__grid{
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
  @media ${device.laptop}{
    .partners-inner{
      &__grid{
        grid-template-columns: repeat(5, 1fr);
      }
    }
  }
`

export default function Partners() {
  return(
    <PartnersWrapper>
      <Container>
        <div className='partners-inner'>
          <div className='partners-inner__heading'>
            <h3>Our Partners</h3>
          </div>
          <div className='partners-inner__grid'>
            <Image 
              src="/logos_saleforce.png" 
              alt="Saleforce" 
              objectFit='contain'
              width={150}
              height={116}
            />
            <Image 
              src="/logos_shopify.png" 
              alt="Ruby" 
              objectFit='contain'
              width={250}
              height={52}
            />
            <Image 
              src="/logos_bigcommerce.png" 
              alt="Ruby" 
              objectFit='contain'
              width={250}
              height={52}
            />
            <Image 
              src="/logos_magento.png" 
              alt="Ruby" 
              objectFit='contain'
              width={250}
              height={52}
            />
            <Image 
              src="/logos_kibo.png"
              alt="Ruby" 
              objectFit='contain'
              width={250}
              height={52}
            />
          </div>
        </div>
      </Container>
    </PartnersWrapper>
  )
}
