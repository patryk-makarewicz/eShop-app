import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyle from 'theme/GlobalStyle';
import store from 'redux/store';

import LoginView from './LoginView';
import MainView from './MainView';

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
