import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router';

import classes from './StoreCard.module.css';

export default function StoreCard(props) {
  const history = useHistory();

  function buyPlant(plantData) {
    fetch('https://plant-app-3bea9-default-rtdb.firebaseio.com/plants.json', {
      method: 'POST',
      body: JSON.stringify(plantData),
      header: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      history.replace('/');
    });
  }
  return (
    <div className={classes.cards_flex}>
      {props.data.map(data => {
        return (
          <div key={data.id} className={classes.card}>
            <div className={classes.card_container}>
              <div className={classes.top_container}>
                <div className={classes.water_icon_container}>
                  <FontAwesomeIcon
                    className={classes.water_icon}
                    icon={'tint'}
                  />
                </div>
              </div>
              <div className={classes.bottom_container}>
                <div className={classes.plant_image}>
                  <img src={data.image} alt="Cactus plant" />
                </div>
                <div className={classes.plant_name}>
                  <h2 className={classes.title}>{data.title}</h2>
                </div>
              </div>
              <div className={classes.info_container}>
                <div className={classes.description}>
                  <p>{data.description}</p>
                  <div className={classes.getContainer}>
                    <p>{data.price}</p>
                    <button
                      className={classes.buy_btn}
                      onClick={() => {
                        const plantData = {
                          title: data.title,
                          image: data.image,
                          description: data.description,
                          watered: data.watered,
                        };
                        buyPlant(plantData);
                      }}
                    >
                      Buy plant
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
