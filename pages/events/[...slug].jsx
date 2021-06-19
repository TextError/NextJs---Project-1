import { useRouter } from 'next/router';
import data from '../../data';

const Slug = () => {
  const { query: { slug }} = useRouter();

  if(!slug) return <p className='center'>Loading</p>

  const [year, month] = slug;
  const numYear = +year;
  const numMonth = +month;

  if(isNaN(numYear) || isNaN(numMonth) || numMonth < 1 || numMonth > 12) return <p>Invalid Dates</p>

  const events = data.filter(ev => {
    const date = new Date(ev.date);
    return date.getFullYear() === numYear && date.getMonth() === numMonth - 1
  });

  if(!events || events.length === 0) return <p>No Events!</p>

  return (
    <div>
      
    </div>
  )
}

export default Slug;