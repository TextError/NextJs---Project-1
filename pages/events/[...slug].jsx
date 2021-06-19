import { useRouter } from 'next/router';
import data from '../../data';

import Button from '../../components/common/ui/Button';
import EventList from '../../components/common/EventList';
import Title from '../../components/events/Title';

const Slug = () => {
  const { query: { slug }} = useRouter();

  if(!slug) return <p className='center'>Loading</p>

  const [year, month] = slug;
  const numYear = +year;
  const numMonth = +month;

  if(isNaN(numYear) || isNaN(numMonth) || numMonth < 1 || numMonth > 12) return (
    <>
      <div className='alert'>
        <p>Invalid Dates</p>
      </div>
      <div className='center'>
        <Button to='/events'>Show all Events.</Button>
      </div>
    </>
  );

  const events = data.filter(ev => {
    const date = new Date(ev.date);
    return date.getFullYear() === numYear && date.getMonth() === numMonth - 1
  });

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

  const date = new Date(numYear, numMonth-1);

  return (
    <>
      <Title date={date} />
      <EventList events={events} />
    </>
  )
}

export default Slug;