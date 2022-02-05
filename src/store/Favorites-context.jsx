import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: favoritePlant => {},
  removeFavorite: plantId => {},
  itemIsFavorite: plantId => {},

  removePlant: '',
  removePlantHandler: () => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoritePlant) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.concat(favoritePlant);
    });
  }

  function removeFavoriteHandler(plantId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(plant => plant.id !== plantId);
    });
  }

  function itemIsFavoriteHandler(plantId) {
    return userFavorites.some(plant => plant.id === plantId);
  }

  const [plantRemove, setPlantRemove] = useState();

  function plantRemoveHandler(plantId) {
    fetch(
      `https://plant-app-3bea9-default-rtdb.firebaseio.com/plants/${plantId}.json`,
      { method: 'DELETE' }
    ).then(() => {
      setPlantRemove(() => {
        return plantId;
      });
    });
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,

    removePlant: plantRemove,
    removePlantHandler: plantRemoveHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
