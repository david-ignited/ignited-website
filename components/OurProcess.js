import Image from 'next/image';
import styled from 'styled-components';
import { Container, EyeBrow, H2 } from './styles/Globals';

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
    }
    &__grid{
      margin-top: 80px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 42px;
      position: relative;
      &--card{
        background: rgba(43, 27, 78, 0.4);
        backdrop-filter: blur(10px);
        border-radius: 10px;
        padding: 40px;
        text-align: center;
        color: rgba(255, 255, 255, 0.5);
        position: relative;
        .card__content{
          position: relative;
          z-index: 140;
          h3{
            color: #fff;
            font-size: var(--h3-fs);
            line-height: var(--h3-lh);
            margin-top: 10px;
            margin-bottom: 26px;
          }
          p{
            margin-bottom: 20px;
          }
        }
        .card__glow{
          position: absolute;
          top: 0%;
          left: 5%;
          z-index: 130;
          width: 90%;
          height: 2px;
          background-image: linear-gradient(90deg, rgba(118, 110, 245, 0), #766ef5 35%, #2da9f5 65%, rgba(45, 169, 245, 0));
          opacity: 0.95;
        }
        .card__mask{
          position: absolute;
          left: 0%;
          top: 0%;
          right: 0%;
          bottom: 0%;
          z-index: 120;
          background-image: linear-gradient(180deg, rgba(43, 27, 78, 0), var(--dark-blue));
          border-radius: 10px;
        }
        .card__outline{
          position: absolute;
          left: 0%;
          top: 0%;
          right: 0%;
          bottom: 0%;
          z-index: 110;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          box-shadow: inset 0 0 0 2px #181e3c;
          border-radius: 10px;
        }
      }
    }
    &__img{
      width: 100%;
      position: absolute;
      top: -80px;
      z-index: 2;
      pointer-events: none;
      text-align: center;
    }
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
          <div className='process-inner__grid'>
          {DATA.map(({id, icon, title, text}) => (
            <div key={id} className='process-inner__grid--card'>
              <div className='card__content'>
                <Image 
                  src={icon.path}
                  alt={icon.title}
                  width={80}
                  height={80}
                />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <div className='card__glow' />
              <div className='card__mask' />
              <div className='card__outline' />
            </div>
          ))}
          </div>
        </div>
      </Container>
    </ProcessWrapper>
  )
}
