import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Characters, CharacterSingle, HousesGeral, Quotes, SortingHat, Spells, Error404 } from './pages';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/quotes" component={Quotes} />
          <Route exact path="/characters" component={Characters} />
          <Route path="/characters/:id" component={CharacterSingle} />
          <Route exact path="/houses" component={HousesGeral} />
          <Route exact path="/sortinghat" component={SortingHat} />
          <Route exact path="/spells" component={Spells} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
