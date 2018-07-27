// @flow
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '@comp/home';
import My from '@comp/my';

import '@/common/scss';

class App extends Component<{}> {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/my" component={My} />
        </Switch>
      </Router>
    )
  }
}

export default App;
