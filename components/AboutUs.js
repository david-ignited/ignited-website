import Image from 'next/image';
import styled from 'styled-components';
import { Container, EyeBrow, H2 } from './styles/Globals';
import { Card, Grid } from './styles/Grid';
import { device } from './utils/breakpoints';

const DATA = [
  {
    id: 1,
    icon: {
      path: '/zoom-dynamic-gradient.png',
      title: 'Exploration'
    },
    title: 'Exploration',
    text: 'Ignite Labs is a platform space which encourages the exploration of business solutions in an agile setting.'
  },
  {
    id: 2,
    icon: {
      path: '/flash-dynamic-gradient.png',
      title: 'Source'
    },
    title: 'Source',
    text: 'Our projects can be sourced externally through our clients or be inspired by internal employees and stakeholders.'
  },
  {
    id: 3,
    icon: {
      path: '/medal-dynamic-gradient.png',
      title: 'Goals'
    },
    title: 'Goals',
    text: 'Our goal is to invest with our clients, employees and start-ups, resulting in accelerated innovation and shared success.'
  },
]

const ProcessWrapper = styled.section`
  padding: calc(var(--pd-section) / 2) 0 calc(var(--pd-section) / 2);
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

export default function AboutUs() {
  return(
    <ProcessWrapper>
      <Container>
        <div className='process-inner'>
          <div className='process-inner__heading'>
            <EyeBrow>who we are</EyeBrow>
            <H2>About Us</H2>
          </div>
          <Grid>
          {DATA.map(({id, icon, title, text}) => (
            <Card key={id}>
              <div className='card__content'>
                <Image 
                  src={icon.path}
                  alt={icon.title}
                  width={120}
                  height={120}
                />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
              <div className="card__blur">
                <div className="s2-blur is-blur-2" />
              </div>
              {/* <div className='card__glow' /> */}
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