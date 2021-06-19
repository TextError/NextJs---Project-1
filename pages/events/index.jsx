import events from '../../data';
import EventList from '../../components/common/EventList';
import EventSearch from '../../components/events/EventSearch';

const Events = () => (
  <>
    <EventList events={events} />
    <EventSearch />
  </>
);

export default Events;