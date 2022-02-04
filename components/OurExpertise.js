import Image from 'next/image';
import styled from 'styled-components';
import { Container, H2 } from './styles/Globals';
import { device } from './utils/breakpoints'

const ExpertiseWrapper = styled.section`
  padding: calc(var(--pd-section) / 2) 0 var(--pd-section);
  .expertise-inner{
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
  }
`

const LogoContainer = styled.div`
  --nl-border-opacity: 0.05;
  --nl-bg-opacity: 0.05;
  width: 100%;
  padding: 4rem;
  .logos__grid{
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 60px;
    margin-left: var(--gap);
    margin-right: var(--gap);
    position: relative;
    place-items: center;
  }
  @media ${device.mobileL}{
    .logos__grid{
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media ${device.laptop}{
    .logos__grid{
      grid-template-columns: repeat(6, 1fr);
    }
  }
`

export default function Expertise() {
  return(
    <ExpertiseWrapper>
      <Container>
        <div className='expertise-inner'>
          <div className='expertise-inner__heading'>
            <h3>Our Expertise</h3>
          </div>
          <LogoContainer>
            <div className='logos__grid'>
              <Image 
                src="/logos_mongoDB.svg" 
                alt="Mongo DB" 
                objectFit='contain'
                width={120}
                height={60}
              />
              <Image 
                src="/logos_angular.svg" 
                alt="Angular JS" 
                objectFit='contain'
                width={120}
                height={60}
              />
              <Image 
                src="/logos_react.svg" 
                alt="React" 
                objectFit='contain'
                width={120}
                height={60}
              />
              <Image 
                src="/logos_php.svg" 
                alt="Php" 
                objectFit='contain'
                width={120}
                height={60}
              />
              <Image 
                src="/logos_ruby.svg"
                alt="Ruby" 
                objectFit='contain'
                width={120}
                height={60}
              />
              <Image 
                src="/logos_mysql.svg" 
                alt="MySQL" 
                objectFit='contain'
                width={120}
                height={60}
                className='mb-24'
              />
            </div>
          </LogoContainer>
        </div>
      </Container>
    </ExpertiseWrapper>
  )
}
