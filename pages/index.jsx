import data from '../data';
import EventList from '../components/home/EventList';

const Home = () => {
  const isFeaturedEvents = data.filter(ev => ev.isFeatured);

  return (
    <EventList events={isFeaturedEvents} />
  )
};

export default Home;