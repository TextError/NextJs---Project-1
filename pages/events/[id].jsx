import EventSummary from '../../components/events/EventSummary';
import EventLogistics from '../../components/events/EventLogistics';
import EventContent from '../../components/events/EventContent';

const EventId = ({ event }) => {
  // const { query: { id }} = useRouter();
  // const event = data.filter(ev => ev.id === id);
  const { description, title, date, location, image, alt } = event[0];


  if(!event) return (
    <div className='error'>
      <p>No Event found!</p>
    </div>
  );

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

export const getStaticPaths = async () => {
  const url = 'https://nextjs-max-aa84a-default-rtdb.europe-west1.firebasedatabase.app/events.json'
  const data = await (await fetch(url)).json();
  let events = [];
  for(const key in data) events.push({ id: key, ...data[key] });

  const paths = events.map(el => ({ params: { id: el.id }}));

  return { 
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params: { id }}) => {
  const url = 'https://nextjs-max-aa84a-default-rtdb.europe-west1.firebasedatabase.app/events.json'
  const data = await (await fetch(url)).json();

  let events = [];
  for(const key in data) events.push({ id: key, ...data[key] });

  const event = events.filter(ev => ev.id === id);

  return {
    props: { event }
  };
};