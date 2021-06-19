import events from '../../data';
import { useRouter } from 'next/router';
import EventList from '../../components/common/EventList';
import EventSearch from '../../components/events/EventSearch';

const Events = () => {

  const { push } = useRouter();

  const onSearch = ({ year, month }) => push(`/events/${year}/${month}`);

  return (
    <>
      <EventSearch onSearch={onSearch} />
      <EventList events={events} />
    </>
  );
}

export default Events;