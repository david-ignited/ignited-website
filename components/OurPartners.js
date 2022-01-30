import Image from 'next/image';
import styled from 'styled-components';
import { Container, H2 } from './styles/Globals';

const PartnersWrapper = styled.section`
  padding: calc(var(--pd-section) / 2) 0 var(--pd-section);
  .partners-inner{
    position: relative;
    &__heading{
      max-width: 820px;
      margin: auto;
      text-align: center;
    }
    &__grid{
      margin-top: 40px;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      column-gap: 30px;
      margin-left: var(--gap);
      margin-right: var(--gap);
      position: relative;
    }
  }
`

export default function Partners() {
  return(
    <PartnersWrapper>
      <Container>
        <div className='partners-inner'>
          <div className='partners-inner__heading'>
            <H2>Our Partners</H2>
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
