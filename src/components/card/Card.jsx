import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IoTrashOutline } from 'react-icons/io5';

import classes from './Card.module.css';
import FavoritesContext from '../../store/Favorites-context';

export default function Card(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        description: props.description,
        watered: props.watered,
      });
    }
  }

  function removePlant(plant) {
    favoritesCtx.removePlantHandler(plant);
  }

  return (
    <div className={classes.cards_flex}>
      <div key={props.id} className={classes.card}>
        <div className={classes.card_container}>
          <div className={classes.top_container}>
            <div className={classes.water_icon_container}>
              <FontAwesomeIcon className={classes.water_icon} icon={'tint'} />
            </div>
            <div>
              <p className={classes.deleteMesage} id="deleteMesage">
                Dobbelttrykk for å slette
              </p>
              <IoTrashOutline
                className={classes.removeBtn}
                onClick={() => removePlant(props.id)}
              />
            </div>
          </div>
          <div className={classes.bottom_container}>
            <div className={classes.plant_image}>
              <img src={props.image} alt="Plant" />
            </div>
            <div className={classes.plant_name}>
              <h2 className={classes.title}>{props.title}</h2>
            </div>
          </div>
          <div className={classes.info_container}>
            <div className={classes.description}>
              <p>{props.description}</p>
              <button
                className={classes.favorite_btn}
                onClick={toggleFavoriteStatusHandler}
              >
                {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
