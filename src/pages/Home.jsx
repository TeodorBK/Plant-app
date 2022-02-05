import { useState, useEffect, useContext } from 'react';

import classes from './Home.module.css';
import CardContainer from '../components/card/CardContainer';
import Loader from '../components/Loader';
import FavoritesContext from '../store/Favorites-context';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPlants, setLoadedPlants] = useState([]);

  const favoriteCtx = useContext(FavoritesContext);

  useEffect(() => {
    fetch('https://plant-app-3bea9-default-rtdb.firebaseio.com/plants.json')
      .then(response => {
        return response.json();
      })
      .then(data => {
        const plants = [];

        for (const key in data) {
          const plant = {
            id: key,
            ...data[key],
          };

          plants.push(plant);
        }

        setIsLoading(false);
        setLoadedPlants(plants);
      });
  }, [favoriteCtx.removePlant]);

  if (isLoading) {
    return (
      <section className={classes.load}>
        <Loader
          box={classes.loaderContainer}
          outside={classes.outside}
          inside={classes.inside}
        />
      </section>
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.my_plants}>
        <h2>My Plants</h2>
      </div>
      <div className={classes.card_container}>
        <CardContainer data={loadedPlants} />
      </div>
    </div>
  );
}

export default Home;
