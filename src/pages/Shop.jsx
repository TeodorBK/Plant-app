import { useState, useEffect } from 'react';

import classes from './Home.module.css';
import Loader from '../components/Loader';
import StoreCard from '../components/storeCard/StoreCard';

function Shop() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPlants, setLoadedPlants] = useState([]);

  useEffect(() => {
    fetch('https://plant-app-3bea9-default-rtdb.firebaseio.com/shop.json')
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
  }, []);

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
        <h2>Shop Plants</h2>
      </div>
      <div className={classes.card_container}>
        <StoreCard data={loadedPlants} />
      </div>
    </div>
  );
}

export default Shop;
