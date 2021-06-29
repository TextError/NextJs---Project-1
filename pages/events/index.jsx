import events from '../../data';
import { useRouter } from 'next/router';
import EventList from '../../components/common/EventList';
import EventSearch from '../../components/events/EventSearch';

const Events = ({ events }) => {

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

export const getStaticProps = async () => {
  const url = 'https://nextjs-max-aa84a-default-rtdb.europe-west1.firebasedatabase.app/events.json'
  const data = await (await fetch(url)).json();

  let events = [];
  for(const key in data) events.push({ id: key, ...data[key] });

  return {
    props: { events },
    revalidate: 60
  }
};