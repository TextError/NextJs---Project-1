import Button from '../common/ui/Button';
import classes from './title.module.css';

const Title = ({ date }) => {

  const isDate = new Date(date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <section className={classes.title}>
      <h1>Events in {isDate}</h1>
      <Button to='/events'>Show all events</Button>
    </section>
  );
}

export default Title;