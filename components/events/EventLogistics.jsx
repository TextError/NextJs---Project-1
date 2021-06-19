import LogisticsItem from './LogisticsItem';
import AddressIcon from '../common/icons/address-icon';
import DateIcon from '../common/icons/date-icon';


import classes from './event-logistics.module.css';

const EventLogistics = ({ date, location, image, alt }) => {

  const isDate = new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={alt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{isDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
        <address>{location.replace(', ', '\n')}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
