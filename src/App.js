// @flow
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '@comp/home';
import Message from '@comp/message';
import Discover from '@comp/discover';
import My from '@comp/my';
import FindGroup from '@comp/message/find-group';
import Page404 from '@/common/components/page404';

import '@/common/scss';

class App extends Component<{}> {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/message" component={Message} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/my" component={My} />
          <Route exact path="/find-group" component={FindGroup} />
          <Route component={Page404} />
        </Switch>
      </Router>
    )
  }
}

export default App;
