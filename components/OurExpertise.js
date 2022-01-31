import Image from 'next/image';
import styled from 'styled-components';
import { Container, H2 } from './styles/Globals';

const ExpertiseWrapper = styled.section`
  padding: var(--pd-section) 0 var(--pd-section);
  .expertise-inner{
    position: relative;
    &__heading{
      max-width: 820px;
      margin: auto;
      text-align: center;
    }
    &__grid{
      margin-top: 40px;
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      column-gap: 50px;
      margin-left: var(--gap);
      margin-right: var(--gap);
      position: relative;
      span img{
        opacity: 0.6;
      }
      .mb-24{
        margin-bottom: 24px;
      }
    }
  }
`

export default function Expertise() {
  return(
    <ExpertiseWrapper>
      <Container>
        <div className='expertise-inner'>
          <div className='expertise-inner__heading'>
            <H2>Our Expertise</H2>
          </div>
          <div className='expertise-inner__grid'>
            <Image 
              src="/logos_mongoDB.svg" 
              alt="Mongo DB" 
              objectFit='contain'
              width={80}
              height={60}
            />
            <Image 
              src="/logos_angular.svg" 
              alt="Angular JS" 
              objectFit='contain'
              width={80}
              height={60}
            />
            <Image 
              src="/logos_react.svg" 
              alt="React" 
              objectFit='contain'
              width={80}
              height={60}
            />
            <Image 
              src="/logos_mysql.svg" 
              alt="MySQL" 
              objectFit='contain'
              width={80}
              height={60}
              className='mb-24'
            />
            <Image 
              src="/logos_php.svg" 
              alt="Php" 
              objectFit='contain'
              width={80}
              height={60}
            />
            <Image 
              src="/logos_ruby.svg"
              alt="Ruby" 
              objectFit='contain'
              width={80}
              height={60}
            />
          </div>
        </div>
      </Container>
    </ExpertiseWrapper>
  )
}