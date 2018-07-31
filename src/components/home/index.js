// @flow
import * as React from 'react';

import Nav from '@/common/components/nav';
import HomeTop from '@/common/components/HomeTop';
import Hot from './hot';

import './scss/home.scss';

class Home extends React.Component<{}> {
  render() {
    return (
      <div className="home">
        <HomeTop />
        <Hot />

        <h3>Home Page...</h3>
        <i className="iconfont icon-home"></i>

        <Nav name="home" />
      </div>
    )
  }
}

export default Home;
