import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { Container, EyeBrow, H2, Group, BtnLink } from './styles/Globals';

const DATA = [
  {
    id: 1,
    image: {
      path: '/images_work1_2x.png',
      title: 'Primo Impression'
    },
    title: 'Primo Impression',
    text: "I'm baby subway tile bitters photo booth viral franzen, raclette chillwave knausgaard VHS tattooed. Organic sartorial banjo ramps knausgaard brunch gastropub leggings.",
    tags: ["#design", "#web"]
  },
  {
    id: 2,
    image: {
      path: '/images_work2_2x.png',
      title: 'Onboard App'
    },
    title: 'Onboard App',
    text: 'Master cleanse stumptown hot chicken art party lo-fi, jianbing ennui four dollar toast glossier small batch PBR&B. La croix meditation coloring book, crucifix kombucha cray everyday carry retro photo booth.',
    tags: ["#design", "#app"]
  }
]

const WorkWrapper = styled.section`
  --wText: 390px;
  --pdRow: 20px;
  --colGapRow: 60px;
  padding: var(--pd-section) 0 var(--pd-section);
  .work-heading{
    max-width: 820px;
    margin: auto;
    text-align: center;
  }
  .work-inner{
    position: relative;
    &__row{
      display: grid;
      grid-template-columns: var(--wText) 1fr;
      column-gap: var(--colGapRow);
      padding: 0 var(--pdRow);
      &:nth-child(even){
        grid-template-columns: 1fr var(--wText);
        .work-inner__row--text{
          order: 2;
        }
        .work-inner__row--img{
          order: 1;
        }
      }
      &--text {
        align-self: center;
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
      &--img {
        align-self: center;
        position: relative;
        > div:last-child{
          width: 100%;
          max-width: 400px;
          position: absolute;
          left: 50%;
          top: 25%;
          transform: translate(-50%);
        }
      }
    }
  }
`

export default function Work() {
  return(
    <WorkWrapper>
      <Container>
        <div className='work-heading'>
          <EyeBrow>AWESOME WORK</EyeBrow>
          <H2 id="nav__link--our_work">Our Work</H2>
        </div>
        <div className='work-inner'>
          {DATA.map(({id, image, title, text, tags}) => (
            <div key={id} className='work-inner__row'>
              <div className='work-inner__row--text'>
                {tags.length > 1 
                  ? (
                  <Group>
                    {tags.map(id => <EyeBrow key={id} pill ghost>{id}</EyeBrow> )}
                  </Group>
                  )
                  : <EyeBrow pill>{tags[0]}</EyeBrow>}
                <h3>{title}</h3>
                <p>{text}</p>
                <BtnLink>
                  <Link href="/"><a>Learn More</a></Link> 
                </BtnLink>
              </div>
              <div className='work-inner__row--img'>
                <Image 
                  src="/bgblur-hero.png"
                  alt="Blur image"
                  layout="responsive"
                  width={1400}
                  height={1400} 
                />
                <div>
                  <Image 
                    src={image.path}
                    alt={image.title}
                    layout="intrinsic"
                    width={812}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </WorkWrapper>
  )
}
