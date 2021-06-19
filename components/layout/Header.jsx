import Link from 'next/link';

import classes from './header.module.css';

const Header = () => (
  <header className={classes.header}>
    <div className={classes.logo}>
      <Link href='/'>Next Events</Link>
    </div>
    <nav>
      <ul>
        <li className={classes.navigation}>
         <Link href='/events'>Borwse All Events</Link> 
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;