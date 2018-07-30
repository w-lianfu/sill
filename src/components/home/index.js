// @flow
import * as React from 'react';

import Nav from '@/common/components/nav';

class Home extends React.Component<{}> {
  render() {
    return (
      <div>
        <h3>Home Page...</h3>
        <i className="iconfont icon-home"></i>

        <Nav name="home" />
      </div>
    )
  }
}

export default Home;
