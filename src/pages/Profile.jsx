import FavPlant from '../components/FavPlant';
import classes from './Profile.module.css';

export default function Profile() {
  return (
    <div className={classes.container}>
      <div className={classes.profileContainer}>
        <img
          src="https://dkuni.dk/wp-content/uploads/2020/11/profil-billede-1.png"
          alt="profile"
          className={classes.profileImage}
        />
      </div>
      <div>
        <div className={classes.profileInfo}>
          <h2>Ola Nordmann</h2>
          <h4>Xp: 1 000 000</h4>
        </div>
      </div>
      <div>
        <div className={classes.followContainer}>
          <div>
            <h4>20 184</h4>
            <p>Followers</p>
          </div>
          <div>
            <h4>342</h4>
            <p>Following</p>
          </div>
        </div>
      </div>
      <div className={classes.profilePlants}>
        <div>
          <div className={classes.favPlant}>
            <h3>Favorite Plant:</h3>
            <FavPlant className={classes.favPlantCard} />
          </div>
        </div>
        <div>
          <div className={classes.amountPlantsBox}>
            <h3>Amount of plants:</h3>
            <h1>23</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
