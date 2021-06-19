import EventItem from "./EventItem";

import classes from './event-list.module.css';

const EventList = ({ events }) => {
  return (
    <ul className={classes.list}>
      { 
        events.map(ev => <EventItem key={ev.id} {...ev} />)
      }
    </ul>
  )
}

export default EventList;