import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classes from './AddCard.module.css';

export default function addCard() {
  return (
    <div className={classes.card}>
      <Link className={classes.link} to="/addPlant">
        <div className={classes.card_container}>
          <FontAwesomeIcon className={classes.plus} icon="plus" />
          <h3 className={classes.title}>Add Plant</h3>
        </div>
      </Link>
    </div>
  );
}
