import Link from 'next/link';

import classes from '../../../styles/button.module.css';

const Button = ({ children, to }) => (
  <Link href={to}>
    <a className={classes.btn}>
      {children}
    </a>
  </Link>
);

export default Button;