import { useRouter } from 'next/router';
import data from '../../data';

import EventSummary from '../../components/events/EventSummary';
import EventLogistics from '../../components/events/EventLogistics';
import EventContent from '../../components/events/EventContent';

const EventId = () => {
  const { query: { id }} = useRouter();
  const event = data.filter(ev => ev.id === id);
  console.log(event)
  const { description, title, date, location, image, alt } = event[0];


  if(!event) return <p>No Event found!</p>

  return (
    <>
      <EventSummary title={title} />
      <EventLogistics date={date} location={location} image={image} alt={alt} />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  )
}

export default EventId;