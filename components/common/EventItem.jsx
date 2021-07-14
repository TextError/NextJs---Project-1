import Image from 'next/image';
import Button from './ui/Button';
import DateIcon from './icons/date-icon';
import AddresIcon from './icons/address-icon';
import Arrow from './icons/arrow-right-icon';

import classes from './event-item.module.css';

const EventItem = ({ title, image,  date, location, id }) => (
  <li className={classes.item}>
    <Image src={`/${image}`} alt={title} width={250} height={160} />
    <div className={classes.content}>
      <div className={classes.summary}>
        <h2>{title}</h2>
      </div>
      <div className={classes.date}>
        <DateIcon />
        <time>{new Date(date).toLocaleDateString('en-US', { day:'numeric', month:'long', year:'numeric' })}</time>
      </div>
      <div className={classes.address}>
        <AddresIcon />
        <address>{location.replace(', ', '\n')}</address>
      </div>
      <div className={classes.actions}>
        <Button to={`/events/${id}`}>
          <span>Explore Event</span>
          <span className={classes.icon}><Arrow /></span>
          </Button>
      </div>
    </div>
  </li>
);

export default EventItem;