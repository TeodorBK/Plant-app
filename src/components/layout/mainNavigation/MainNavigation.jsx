import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

import FavoritesContext from '../../../store/Favorites-context';
import logo from '../../images/leaf-logo.png';
import Background from '../Background';
import Overlay from '../Overlay';

function MainNavigation() {
  const [menu, setMenu] = useState(false);

  const favoritesCtx = useContext(FavoritesContext);

  function Menu() {
    if (menu === false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  }

  return (
    <div>
      <div className={classes.container}>
        <div onClick={Menu} className={classes.navbar_container}>
          <div
            className={!menu ? classes.navbar : classes.navbar_clicked}
          ></div>
        </div>
        <div className={classes.logo_container}>
          <Link to="/">
            <img className={classes.logo} src={logo} alt="logo" />
          </Link>
        </div>
        <div className={classes.spacer}></div>
      </div>
      <div className={menu ? classes.side_menu_open : classes.side_menu}>
        <Link to="/" className={classes.link} onClick={Menu}>
          Home
        </Link>
        <Link to="/favorites" className={classes.link} onClick={Menu}>
          favorites{' '}
          <span className={classes.favtotal}>
            {favoritesCtx.totalFavorites}
          </span>
        </Link>
        <Link to="/profile" className={classes.link} onClick={Menu}>
          Profile
        </Link>
        <Link to="/shop" className={classes.link} onClick={Menu}>
          Shop
        </Link>
      </div>

      <Background forCalss1={classes.bg1} forCalss2={classes.bg2} />

      {menu ? <Overlay click={Menu} /> : ''}
    </div>
  );
}

export default MainNavigation;
