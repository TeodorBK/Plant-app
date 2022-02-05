import { useContext, useState } from 'react';

import FavoritesContext from '../store/Favorites-context';
import CardContainer from '../components/card/CardContainer';

export default function Favorites(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const [favPage, setFavPage] = useState(true);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <CardContainer data={favoritesCtx.favorites} page={favPage} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}
