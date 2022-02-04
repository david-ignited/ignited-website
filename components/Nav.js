/* import Link from 'next/link'; */
import {Link} from 'react-scroll';
import NavStyles from './styles/NavStyles';

import { BtnLink, Divide } from './styles/Globals';

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to='/' className="nav__link" >What we do</Link>
        </li>
        <li>
          <Link to="nav__link--our_process" className="nav__link" smooth={true} duration={1000} offset={-80}>Our Process</Link>
        </li>
        <li>
          <Link to="nav__link--our_work" className="nav__link" smooth={true} duration={1000} offset={-80}>Our Work</Link>
        </li>
        <li>
          <Link to="nav__link--about_us" className="nav__link" smooth={true} duration={1000} offset={-80}>About Us</Link>
        </li>
      </ul>
      <Divide />
      <BtnLink small>
        <Link to="/">Get in touch</Link> 
      </BtnLink>
    </NavStyles>
  );
}