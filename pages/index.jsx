import Head from 'next/head';
import EventList from '../components/common/EventList';

const Home = ({ isFeaturedEvents }) => (
  <>
    <Head>
      <title>index page</title>
      <meta name='description' content='lorem ipsum' />
    </Head>
    <EventList events={isFeaturedEvents} />
  </>
);

export default Home;

export const getStaticProps = async () => {
  const url = 'https://nextjs-max-aa84a-default-rtdb.europe-west1.firebasedatabase.app/events.json'
  const data = await (await fetch(url)).json();

  let events = [];
  for(const key in data) events.push({ id: key, ...data[key] });
  const isFeaturedEvents = events.filter(el => el.isFeatured);

  return {
    props: { isFeaturedEvents },
    revalidate: 1800
  }
};