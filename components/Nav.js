import Link from 'next/link';
import NavStyles from './styles/NavStyles';

import { BtnLink, Divide } from './styles/Globals';

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link href="/"><a>What we do</a></Link>
        </li>
        <li>
          <Link href="/"><a>Our Process</a></Link>
        </li>
        <li>
          <Link href="/"><a>Our Work</a></Link>
        </li>
        <li>
          <Link href="/"><a>About Us</a></Link>
        </li>
      </ul>
      <Divide />
      <BtnLink small>
        <Link href="/"><a>Get in touch</a></Link> 
      </BtnLink>
    </NavStyles>
  );
}