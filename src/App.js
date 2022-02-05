import { Route, Switch } from 'react-router-dom';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import Layout from './components/layout/Layout';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Shop from './pages/Shop';
import AddPlant from './pages/AddPlant';

library.add(fas);

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/addPlant">
            <AddPlant />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
