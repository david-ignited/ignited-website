import Image from 'next/image';
import styled from 'styled-components';
import { Container, EyeBrow, H2 } from './styles/Globals';
import { Grid, Card } from './styles/Grid';
import { device } from './utils/breakpoints';

const DATA = [
  {
    id: 1,
    icon: {
      path: '/icons_ideation.svg',
      title: 'Ideation'
    },
    title: 'Ideation',
    text: 'Our team ideates cocept to determine key hypothesis and leadership determines investment encessary to validate assumptions'
  },
  {
    id: 2,
    icon: {
      path: '/icons_innovation.svg',
      title: 'Innovation'
    },
    title: 'Innovation',
    text: 'The Process of lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at nibh eu quam finibus euismod. Duis ut hendrerit.'
  },
  {
    id: 3,
    icon: {
      path: '/icons_acceleration.svg',
      title: 'Acceleration'
    },
    title: 'Acceleration',
    text: 'The Process of lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at nibh eu quam finibus euismod. Duis ut hendrerit.'
  },
]

const ProcessWrapper = styled.section`
  padding: calc(var(--pd-section) * 2) 0 var(--pd-section);
  .process-inner{
    position: relative;
    &__heading{
      max-width: 820px;
      margin: auto;
      text-align: center;
      margin-bottom: 80px;
    }
  }
  @media ${device.desktop}{
    padding: var(--pd-section) 0 var(--pd-section);
  }
`

export default function Process() {
  return(
    <ProcessWrapper>
      <Container>
        <div className='process-inner'>
          <div className='process-inner__heading'>
            <EyeBrow>AWESOME FEATURES</EyeBrow>
            <H2>Our Process</H2>
          </div>
          <Grid>
          {DATA.map(({id, icon, title, text}) => (
            <Card key={id}>
              <div className='card__content'>
                <Image 
                  src={icon.path}
                  alt={icon.title}
                  width={80}
                  height={80}
                />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
              <div className='card__glow' />
              <div className='card__mask' />
              <div className='card__outline' />
            </Card>
          ))}
          </Grid>
        </div>
      </Container>
    </ProcessWrapper>
  )
}
