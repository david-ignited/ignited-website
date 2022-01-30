import Link from 'next/link';
import Image from 'next/image'
import Nav from './Nav';
import HeaderStyles from './styles/HeaderStyles';

import { ConatinerFluid } from './styles/Globals';

export default function Header() {
  return (
    <HeaderStyles>
      <ConatinerFluid>
        <Link href="/">
          <a>
            <Image 
              src="/ignite_logo.png" 
              alt="Ignite Logo" 
              width='100%'
              height={48}
              objectFit='contain'
            />
            <h1>Ignite</h1>
          </a>
        </Link>
        <Nav />
      </ConatinerFluid>
    </HeaderStyles>
  );
}

