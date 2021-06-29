import { useRouter } from 'next/router';
import data from '../../data';

import Button from '../../components/common/ui/Button';
import EventList from '../../components/common/EventList';
import Title from '../../components/events/Title';

const Slug = ({ hasError, events, date }) => {
  // const { query: { slug }} = useRouter();

  // if(!slug) return <p className='center'>Loading</p>

  // const [year, month] = slug;
  // const numYear = +year;
  // const numMonth = +month;

  if(hasError) return (
    <>
      <div className='alert'>
        <p>Invalid Dates</p>
      </div>
      <div className='center'>
        <Button to='/events'>Show all Events.</Button>
      </div>
    </>
  );

  // const events = data.filter(ev => {
  //   const date = new Date(ev.date);
  //   return date.getFullYear() === numYear && date.getMonth() === numMonth - 1
  // });

  if(!events || events.length === 0) return (
    <>
      <div className='alert'>
        <p>No Events!</p>
      </div>
      <div className='center'>
        <Button to='/events'>Show all Events.</Button>
      </div>
    </>
  );

  // const date = new Date(numYear, numMonth-1);

  return (
    <>
      <Title date={date} />
      <EventList events={events} />
    </>
  )
}

export default Slug;

export const getServerSideProps = async ({ params: { slug }}) => {
  const [year, month] = slug;
  const numYear = +year;
  const numMonth = +month;

  if(isNaN(numYear) || isNaN(numMonth) || numMonth < 1 || numMonth > 12) 
    return { 
      // notFound: true
      // redirect: { destination: '/404' }
      props: { hasError: true }
    };
  
  const url = 'https://nextjs-max-aa84a-default-rtdb.europe-west1.firebasedatabase.app/events.json'
  const data = await (await fetch(url)).json();

  let events = [];
  for(const key in data) events.push({ id: key, ...data[key] });

  const filterEvts = events.filter(ev => {
    const date = new Date(ev.date);
    return date.getFullYear() === numYear && date.getMonth() === numMonth - 1
  });



  return {
    props: { events: filterEvts, date: new Date(numYear, numMonth-1) }
  }
};