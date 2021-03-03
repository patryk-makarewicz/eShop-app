import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../theme/GlobalStyle';

import LoginView from './LoginView';
import MainView from './MainView';

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginView />
        </Route>
        <Route path="/main">
          <MainView />
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
