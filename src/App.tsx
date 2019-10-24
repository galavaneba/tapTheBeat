import React from 'react';
import _ from 'lodash';
import { BrowserRouter } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';

import ScrollToTop from './components/ScrollToTop';
import Leaderboard from './components/Leaderboard';
import Game from './components/Game';
import Result from './components/Result';
import css from './App.module.scss';
import createStore from './createStore';
import { saveState } from './utils/localStorage';

const store = createStore();

store.subscribe(_.throttle(() => {
  saveState(store.getState());
}, 1000));

const App: React.FC = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <div className={css.app}>
          <header className={css.appHeader}>
            <Link to='/'>Tap the beat</Link>
          </header>
          <Route path="/" exact component={Leaderboard}/>
          <Route path="/game" exact component={Game}/>
          <Route path="/result" exact component={Result}/>
        </div>
      </ScrollToTop>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
