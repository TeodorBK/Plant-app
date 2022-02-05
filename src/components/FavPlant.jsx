import classes from './FavPlant.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import plantImg from './images/cactus.png';

function FavPlant() {
  return (
    <div className={classes.cards_flex}>
      <div className={classes.card}>
        <div className={classes.card_container}>
          <div className={classes.top_container}>
            <div className={classes.water_icon_container}>
              <FontAwesomeIcon className={classes.water_icon} icon={'tint'} />
            </div>
          </div>
          <div className={classes.bottom_container}>
            <div className={classes.plant_image}>
              <img src={plantImg} alt="Cactus plant" />
            </div>
            <div className={classes.plant_name}>
              <h2 className={classes.title}>Cactus</h2>
            </div>
          </div>
          <div className={classes.info_container}>
            <div className={classes.description}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavPlant;
