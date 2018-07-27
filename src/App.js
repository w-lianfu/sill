// @flow
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import '@/common/scss';

class App extends Component<{}> {
  render() {
    return (
      <div className="App">
        <p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload.</p>
        <Button variant="contained" color="primary">Hello</Button>
        <Button variant="contained">React</Button>
        <Button variant="contained" color="secondary">Angular</Button>
        <Button variant="contained" color="secondary" disabled>Meteor</Button>
        <p>掌单是 36氪最近接触到的一家外卖代运营服务商，团队在今年年初完成了近千万美元 A 轮融资，本轮融资由 DCM 领投，新美大是战略投资方之一。融资完成后，团队将主要进行城市拓展、团队建设和产品优化。</p>
      </div>
    )
  }
}

export default App;
