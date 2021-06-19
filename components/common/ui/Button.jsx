import Link from 'next/link';

import classes from './button.module.css';

const Button = ({ children, to, onClick }) => {

  if(to) return (
    <Link href={to}>
      <a className={classes.btn}>
        {children}
      </a>
    </Link>
  );

  return (
    <button onClick={onClick} className={classes.btn}>
      {children}
    </button>
  )
};

export default Button;