import {Link} from 'react-scroll';
import NavStyles from './styles/NavStyles';

import { BtnLink, Divide } from './styles/Globals';

export default function Nav() {
  return (
    <NavStyles>
       <ul>
        {/*<li>
        <Link to='/'>What we do</Link>
        </li> */}
        <li>
          <Link to="nav__link--our_process" smooth={true} duration={1000} offset={-140}>Our Process</Link>
        </li>
        <li>
          <Link to="nav__link--our_work"  smooth={true} duration={1000} offset={-140}>Our Work</Link>
        </li>
        <li>
          <Link to="nav__link--about_us" smooth={true} duration={1000} offset={-140}>About Us</Link>
        </li>
      </ul>
      <Divide />
      <BtnLink small>
        <Link to="/">Get in touch</Link> 
      </BtnLink>
    </NavStyles>
  );
}