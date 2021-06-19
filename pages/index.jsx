import data from '../data';
import EventList from '../components/common/EventList';

const Home = () => {
  const isFeaturedEvents = data.filter(ev => ev.isFeatured);

  return (
    <EventList events={isFeaturedEvents} />
  )
};

export default Home;